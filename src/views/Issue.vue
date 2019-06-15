<template>
<div>
   {{ issue.body }}
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'issue',
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getIssueById: 'issues/getIssueById',
      getClosedIssues: 'issues/getClosedIssues'
    }),
    issue () {
      console.log(this.id)
      return this.getIssueById(parseInt(this.id))
    }
  },
  methods: {
    ...mapActions({
      fetchIssue: 'issues/fetch'
    })
  },
  created () {
    if (!this.getIssueById(parseInt(this.id))) {
      this.fetchIssue()
    }
  },
}
</script>
