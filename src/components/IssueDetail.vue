 <template>
  <div class="issue-detail">
    <Spinner v-if="isLoading"/>
    <div class="card">
      <div class="card-content">
        <h3 class="issue-title">
          {{issue.title}}
          <span class="issue-number">#{{issue.number}}</span>
        </h3>

        <div style="marginBottom: 10px">
          <span
            class="badge"
            :class="issue.state === 'open' || issue.state === 'all' ? 'badge-success' : 'badge-danger'"
          >{{issue.state}}</span>
          <span style="margin-left: 10px; fontWeight: bold">{{issue.user.login}}</span>
          <span>
            opened this issue on {{date}}
            <span>&#183;</span>
            {{issue.comments}} comments
          </span>
        </div>
        <hr>
        <div>
          <img
            :src="issue.user.avatar_url"
            class="rounded float-left"
            style="width: 75px; height: 75px; marginRight: 20px"
            alt="..."
          >
          <div class="card">
            <div class="card-header">
              <span style="fontWeight: bold">{{issue.user.login}}</span>
              commented on
              <span>{{date}}</span>
            </div>
            <div class="card-body">
              <span class="card-text">{{issue.body}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Comment v-for="comment in comments" :comment="comment" :key="comment.id"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Comment from '@/components/Comment'
import Spinner from '@/components/Spinner'

export default {
  name: 'IssueDetail',
  computed: {
    ...mapGetters({
      issue: 'GET_SELECTED_ISSUE',
      isLoading: 'GET_ISLOADING',
      comments: 'GET_COMMENTS'
    }),
    date () {
      return new Date(Date.parse(this.issue.created_at)).toLocaleDateString(
        'en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      )
    }
  },
  methods: {
    ...mapActions({
      setSelectedIssue: 'SET_SELECTED_ISSUE',
      setIsLoading: 'SET_ISLOADING',
      setComments: 'SET_COMMENTS'
    })
  },
  watch: {
    issue (newValue, oldValue) {
      const newNumber = newValue !== null ? newValue.number : null
      const oldNumber = oldValue !== null ? oldValue.number : null

      if (newNumber !== oldNumber) {
        this.setIsLoading(true)
        this.setSelectedIssue(newNumber)
      }
    }
  },
  created () {
    this.setIsLoading(true)
    this.setSelectedIssue(this.$route.params.number)
  },
  components: {
    Comment,
    Spinner
  }
}
</script>

<style scoped>
.issue-detail {
  width: 60%;
  margin: 20px auto;
}

.issue-number {
  color: grey;
  font-weight: 200;
  margin-left: 10px;
}

.card-content {
  padding: 20px;
}
</style>
