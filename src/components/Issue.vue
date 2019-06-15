<template>
      <div class="card issue">
        <div class="card-header">
          <h5>{{issue.title}}</h5>
        </div>
        <div class="card-body">
          <p class="card-text">#{{issue.number}} opened {{issue.created_at}} by {{issue.user.login}}</p>
        </div>
      </div>
</template>

<script>
export default {
  name: 'issue',
  props: ['issue']
}
</script>

<style scoped>
  .issue {
    width: 70%;
    margin: 10px auto;
  }
</style>
