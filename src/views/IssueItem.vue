<template>
  <v-container>
    <v-layout wrap>
      <v-flex>
        <router-link :to="{ name: 'issueslist' }">Issue List</router-link>
        <h3 class="display-2 mt-3 mb-1">
          {{ issue.title }} <span class="text-grey">#{{ issue.number }}</span>
        </h3>

        <h4>Opened by {{ issue.user.login }}  · <span class="text-grey">{{ issue.comments }} Comments</span></h4>

        <br/>
        <v-card>
          <v-card-title primary-title>
              <div v-html="issue.body" />
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from '@/plugins/axios'

export default {
  name: 'IssueItem',
  data () {
    return {
      issue: {}
    }
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  created () {
    axios.get('/issues/' + this.id)
      .then(({ data }) => {
        this.issue = data
      })
  }
}
</script>

<style scoped>

</style>
