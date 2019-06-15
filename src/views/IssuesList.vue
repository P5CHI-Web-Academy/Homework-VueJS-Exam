<template>
  <v-container>
    <v-layout wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-5 mt-3">
          Issues List
        </h1>
      </v-flex>
    </v-layout>

    <v-layout v-for="issue in issues" :key="issue.id" class="mb-4" row wrap>
      <v-flex xs10>
        <router-link :to="{ name: 'issue-item', params: { id: issue.number } }">
          <h2>{{ issue.title }}</h2>
        </router-link>
        <div class="text-grey">#{{ issue.number }} opened by {{ issue.user.login }}</div>
      </v-flex>
      <v-flex xs2 text-xs-right>
        <v-chip>
          <v-avatar class="com-nr">{{ issue.comments }}</v-avatar>
          Comments
        </v-chip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from '@/plugins/axios'
export default {
  name: 'IssuesList',
  data () {
    return {
      issues: []
    }
  },
  created () {
    axios.get('/issues?per_page=10')
      .then(({ data }) => {
        this.issues = data
      })
  }
}
</script>

<style>
.text-grey {
  color: #586069;
}
.com-nr {
  background: rgba(0,0,0,.7);
  color: rgba(255,255,255,0.8);
}
</style>
