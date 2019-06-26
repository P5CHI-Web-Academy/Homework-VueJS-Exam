<template>
  <div class="card issue">
    <div class="card-body">
      <div class="position-relative">
        <span
          class="badge issue-state-badge"
          :class="detectState(issue.state)"
        >!</span>
        <router-link :to="{name: 'IssueDetail', params: { number: issue.number }}">
          <h5 class="card-title issue-title">{{ issue.title }}</h5>
        </router-link>
      </div>
      <p class="card-text">
        <span class="font-weight-bold">#{{ issue.number }}</span>
        opened {{ issue.create_at }} by
        <span class="font-weight-bold">{{ issue.user.login }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Issue',
  props: ['issue'],
  methods: {
    detectState (state) {
      return (state === 'open' || state === 'all' ? 'badge-success' : 'badge-danger')
    }
  }
}
</script>

<style scoped>
.issue {
  width: 70%;
  margin: 10px auto;
}

.issue-state-badge {
  position: absolute;
  top: 5px;
  left: 5px;
}

.issue-title {
  margin-left: 30px;
}
</style>
