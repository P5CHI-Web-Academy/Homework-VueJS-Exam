<template>
  <div>
    <div v-if="loading" class="text-xs-center mt-5">
      <v-progress-circular
        :width="3"
        color="red"
        :size="100"
        indeterminate
      />
    </div>
    <div v-else>
      <h1>Issues</h1>
      <Issue v-for="issue in issues" :key="issue.id" :issue='issue'/>
    </div>
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
      issues: 'issues/getIssues',
      loading: 'issues/getLoading'
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
