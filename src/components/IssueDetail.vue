 <template>
  <div class="issue-detail">
    <Spinner v-if="isLoading"/>
    <div class="card">
      <div class="card-content">
        <h3 class="issue-title">
          {{ issue.title }}
          <span class="issue-number">#{{ issue.number }}</span>
        </h3>

        <div style="marginBottom: 10px">
          <span
            class="badge"
            :class="issue.state | detectState"
          >{{issue.state}}</span>
          <span class="font-weight-bold issue-user-login">{{ issue.user.login }}</span>
          <span>
            opened this issue on {{ issue.created_at | formatData }}
            <span>&#183;</span>
            {{ issue.comments }} comments
          </span>
        </div>
        <hr>
        <div>
          <img
            :src="issue.user.avatar_url"
            class="rounded float-left issue-user-avatar"
            alt="..."
          >
          <div class="card">
            <div class="card-header">
              <span class="font-weight-bold">{{ issue.user.login }}</span>
              commented on
              <span>{{ issue.created_at | formatData }}</span>
            </div>
            <div class="card-body">
              <span class="card-text">{{ issue.body }}</span>
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
import { formatData } from '@/filters/formatData'
import { detectState } from '@/filters/detectState'

export default {
  name: 'IssueDetail',
  filters: {
    formatData,
    detectState
  },
  computed: {
    ...mapGetters({
      issue: 'GET_SELECTED_ISSUE',
      isLoading: 'GET_ISLOADING',
      comments: 'GET_COMMENTS'
    })
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

.issue-user-login {
  margin-left: 10px;
}

.issue-user-avatar {
  width: 75px;
  height: 75px;
  margin-right: 20px;
}
</style>
