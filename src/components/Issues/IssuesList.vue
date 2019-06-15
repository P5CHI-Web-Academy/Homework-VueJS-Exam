<template>
  <div>
    <v-layout>
      <v-flex>
        <v-select
          v-model="selected"
          :items="issuestate"
          label="Filter Issues"
          @change="newgetrequest"
        />
      </v-flex>
      <v-flex>
        <v-select
          v-model="perPage"
          :items="itemsPerPage"
          label="Issues per page"
          @change="newgetrequest"
        />
      </v-flex>
    </v-layout>

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

    <div class="text-xs-center">
      <v-pagination
        v-model="page"
        :length="6"
        @input="onpagechange"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IssuesList',
  data () {
    return {
      issuestate: [
        'open',
        'closed',
        'all'
      ],
      itemsPerPage: [
        10,
        20,
        30,
        40
      ],
      selected: 'open',
      page: 1,
      perPage: 10
    }
  },
  computed: {
    ...mapGetters({
      issueList: 'issues/getIssueList'
    })
  },
  created () {
    this.fetchIssues({ 'page': this.page, 'state': this.selected, 'per_page': this.perPage })
  },
  methods: {
    ...mapActions({
      fetchIssues: 'issues/fetch'
    }),
    shortenRow (row) {
      return row.replace(/<[^>]+>/g, '').substr(0, 200) + '...'
    },
    newgetrequest () {
      this.fetchIssues({ 'page': this.page, 'state': this.selected, 'per_page': this.perPage })
      console.log(this.perPage)
    },
    onpagechange () {
      this.fetchIssues({ 'page': this.page, 'state': this.selected, 'per_page': this.perPage })
    }
  }
}
</script>
