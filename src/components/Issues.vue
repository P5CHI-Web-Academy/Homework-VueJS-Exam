<template>
  <div>
    <h1>Issues</h1>
    <Issue />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Issue from './Issue.vue'
export default {
  components: {
    Issue
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
