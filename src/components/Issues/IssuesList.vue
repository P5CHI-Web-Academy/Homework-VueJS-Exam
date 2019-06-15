<template>
  <div>
    <!-- {{ issueList }} -->
    <div v-for="issue in issueList" :key="issue.id">
      <v-layout class="mx-3 my-3">
        <v-flex>
          <div>
            <router-link :to="{ name: 'issue', params: { id: issue.id } }">
              <h3>{{ issue.title }}</h3>
            </router-link>
          </div>
          <div>
            {{ shortenRow(issue.body) }}"
          </div>
          <br>
        </v-flex>
      </v-layout>
      <hr>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IssuesList',
  computed: {
    ...mapGetters({
      issueList: 'issues/getIssueList'
    })
  },
  created () {
    this.fetchIssues('?_limit=20')
  },
  methods: {
    ...mapActions({
      fetchIssues: 'issues/fetch'
    }),
    shortenRow (row) {
      return row.replace(/<[^>]+>/g, '').substr(0, 200) + '...'
    }
  }
}
</script>
