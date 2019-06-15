<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Issues</h1>
        <br>
      </v-flex>

      <v-flex xs6 class="text-xs-right" />
    </v-layout>

    <IssuesList />
  </div>
</template>

<script>
import IssuesList from '@/components/Issues/IssuesList'

export default {
  name: 'AllIssues',
  components: {
    IssuesList
  }
}
</script>
