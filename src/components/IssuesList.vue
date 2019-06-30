<template>
  <div>
    <Spinner v-if="isLoading"/>
    <div
      class="d-flex justify-content-between card-header"
      style="width: 70%; margin: 10px auto 0 auto;"
    >
      <IssueStateSetter/>
      <ItemsPerPageSetter/>
    </div>
    <Issue v-for="issue in issues" :key="issue.id" :issue="issue"/>
    <Pagination/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Issue from '@/components/Issue.vue'
import Pagination from '@/components/Pagination.vue'
import Spinner from '@/components/Spinner.vue'
import ItemsPerPageSetter from '@/components/ItemsPerPageSetter.vue'
import IssueStateSetter from '@/components/IssueStateSetter.vue'

export default {
  name: 'IssuesList',
  components: {
    Issue,
    Pagination,
    Spinner,
    ItemsPerPageSetter,
    IssueStateSetter
  },
  computed: {
    ...mapGetters({
      issues: 'GET_LIST',
      page: 'GET_PAGE',
      itemsPerPage: 'GET_ITEMS_PER_PAGE',
      itemsState: 'GET_ITEMS_STATE',
      isLoading: 'GET_ISLOADING'
    })
  },
  watch: {
    page (newValue, oldValue) {
      this.setIsLoading(true)
      if (newValue !== oldValue) {
        this.fetch([this.page, this.itemsPerPage, this.itemsState])
      }
    },
    itemsPerPage (newValue, oldValue) {
      this.setIsLoading(true)
      if (newValue !== oldValue) {
        this.fetch([this.page, this.itemsPerPage, this.itemsState])
      }
    },
    itemsState (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.setIsLoading(true)
        this.fetch([this.page, this.itemsPerPage, this.itemsState])
      }
    }
  },
  methods: {
    ...mapActions({
      fetch: 'SET_LIST',
      setSelectedIssue: 'SET_SELECTED_ISSUE',
      setIsLoading: 'SET_ISLOADING'
    })
  },
  created () {
    this.setIsLoading(true)
    this.fetch([this.page, this.itemsPerPage, this.itemsState])
  }
}
</script>
