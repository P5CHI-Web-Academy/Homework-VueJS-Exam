<template>
  <div>
    <h1>Issues</h1>
    <Issue v-for="issue in issues" :key="issue.id" :issue='issue'/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Issue from './Issue.vue'
export default {
  components: {
    Issue
  },
  computed: {
    ...mapGetters({
      issues: 'issues/getIssues'
    })
  },
  methods: {
    ...mapActions({
      fetch: 'issues/fetch'
    })
  },
  created () {
    this.fetch()
  }
}
</script>
