<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li :class="changeClass">
        <button
          class="page-link"
          @click="moveToPreviousPage"
        >Previous</button>
      </li>
      <li class="page-item active">
        <button class="page-link">
          {{ page }}
          <span class="sr-only">(current)</span>
        </button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setPage(secondPage)">{{ secondPage }}</button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setPage(thirdPage)">{{ thirdPage }}</button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setPage(page + 1)">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapGetters({
      page: 'GET_PAGE'
    }),
    secondPage () {
      return this.page + 1
    },
    thirdPage () {
      return this.page + 2
    }
  },
  methods: {
    ...mapActions({
      setPage: 'SET_PAGE',
      setIsLoading: 'SET_ISLOADING'
    }),
    moveToPreviousPage () {
      return this.page <= 1 ? null : this.setPage(this.page - 1)
    },
    changeClass () {
      return this.page <= 1 ? 'page-item disabled' : 'page-item'
    }
  }
}
</script>
