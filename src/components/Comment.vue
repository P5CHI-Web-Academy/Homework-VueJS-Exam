<template>
  <div>
    <hr>
    <div>
      <img
        :src="comment.user.avatar_url"
        class="rounded float-left avatar-img"
        alt="..."
      >
      <div class="card">
        <div class="card-header">
          <span class="font-weight-bold">{{ comment.user.login }}</span>
          commented on
          <span>{{ comment.created_at | formatData }}</span>
        </div>
        <div class="card-body">
          <span class="card-text">{{ comment.body }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatData } from  '@/filters/formatData'

export default {
  name: 'Comment',
  props: ['comment'],
  filters: {
    formatData
  }
}
</script>

<style scoped>
.avatar-img {
  width: 75px;
  height: 75px;
  margin-right: 20px;
}
</style>
