<template>
  <div class="card issue">
    <div class="card-body">
      <div style="position: relative">
        <span
          class="badge"
          :class="issue.state === 'open' || issue.state === 'all' ? 'badge-success' : 'badge-danger'"
          style="position: absolute; top: 5px; left: 5px;"
        >!</span>
        <router-link :to="{name: 'IssueDetail', params: { number: issue.number }}">
          <h5 class="card-title" style="marginLeft: 30px">{{issue.title}}</h5>
        </router-link>
      </div>
      <p class="card-text">
        <span style="fontWeight: bold">#{{issue.number}}</span>
        opened {{issue.create_at}} by
        <span style="fontWeight: bold">{{issue.user.login}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Issue',
  props: ['issue']
}
</script>

<style scoped>
.issue {
  width: 70%;
  margin: 10px auto;
}
</style>
