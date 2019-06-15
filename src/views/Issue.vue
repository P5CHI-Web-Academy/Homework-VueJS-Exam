<template>
  <div>
    <div v-if="Object.keys(currentIssue).length > 0">
      <hr>
      <v-layout row wrap class="mt-5">
        {{ currentIssue }}
      </v-layout>
    </div>
    <div v-else>
      <h2>Issue not found</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  computed: {
    ...mapGetters({
      getById: 'issues/getById'
    }),
    currentIssue () {
      return this.getById(+this.id) || {}
    }
  },
  async created () {
    if (!this.getById(+this.id)) {
      await this.fetchIssue({ id: +this.id })
    }
  },
  methods: {
    ...mapActions({
      fetchIssue: 'issues/fetch'
    })
  }
}
</script>
