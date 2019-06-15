<template>
  <div class="card">
    <div class="card-header">
      <h2>{{issue.title}} #{{issue.number}}</h2>
      <p>
        <h5>
          <span class="badge badge-secondary">{{issue.state}}</span>
        </h5>
      </p>
    </div>
    <div class="card-body">
      <p class="card-text">{{issue.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'issueDetail',
  computed: {
    ...mapGetters({
      issue: 'GET_ISSUE_BY_ID'
    })
  },
  mounted () {
    this.set(this.$route.params.id)
  },
  methods: {
    ...mapActions({
      set: 'SET_SELECTED_ISSUE'
    })
  }
}
</script>
