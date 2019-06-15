<template>
  <div>
    <router-link :to="{name: 'issue', params: {id: issue.id}}">
      <strong class="title">{{ issue.title }}</strong>
    </router-link>
    <v-layout align-center mb-3>
      <v-avatar color="grey" class="mr-3">
        <img
          :src="issue.user.avatar_url"
          alt="User"
        >
      </v-avatar>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="mr-3">{{ issue.user.login }}</p>
      <v-spacer />
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p>{{ issue.body }}</p>
    </v-layout>
    <hr>
    <br>
  </div>
</template>

<script>
export default {
  props: ['issue']
}
</script>

