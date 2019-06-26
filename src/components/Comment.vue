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
          <span>{{ date }}</span>
        </div>
        <div class="card-body">
          <span class="card-text">{{ comment.body }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment'],
  computed: {
    date () {
      return new Date(Date.parse(this.comment.created_at)).toLocaleDateString(
        'en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
      )
    }
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
