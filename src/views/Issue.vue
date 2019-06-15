<template>
<div>
  <router-link :to="{ name: 'home' }">Home</router-link>
  <template>
    <v-layout>
      <v-flex sm12 offset-sm3>
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ issue.title }}</h3>
            </div>
          </v-card-title>
          <br>
          {{ issue.body }}
        </v-card>
      </v-flex>
    </v-layout>
  </template>    
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
      getIssueById: 'issues/getIssueById'
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
