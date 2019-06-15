<template>
  <div>
    <div v-for="issue in issues" :key="issue.id">
      <router-link :to="{ name:'issueDetail', params: { id: issue.id }}">
        <Issue :issue="issue" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Issue from '@/components/Issue.vue'

export default {
  name: 'issuesList',
  components: {
    Issue
  },
  computed: {
    ...mapGetters({
      issues: 'GET_LIST'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'SET_LIST'
    })
  },
  created () {
    this.fetch()
  }
}
</script>
