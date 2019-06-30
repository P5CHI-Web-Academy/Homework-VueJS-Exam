<template>
  <div class="card issue">
    <div class="card-body">
      <div class="position-relative">
        <span
          class="badge issue-state-badge"
          :class="issue.state | detectState"
        >!</span>
        <router-link :to="{ name: 'IssueDetail', params: { number: issue.number } }">
          <h5 class="card-title issue-title">{{ issue.title }}</h5>
        </router-link>
      </div>
      <p class="card-text">
        <span class="font-weight-bold">#{{ issue.number }}</span>
        opened {{ issue.created_at }} by
        <span class="font-weight-bold">{{ issue.user.login }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { detectState } from '@/filters/detectState'

export default {
  name: 'Issue',
  props: ['issue'],
  filters: {
    detectState
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
