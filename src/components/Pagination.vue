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
          {{ firstPaginationButton }}
          <span class="sr-only">(current)</span>
        </button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setFirstPaginationButton(secondPage)">{{ secondPage }}</button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setFirstPaginationButton(thirdPage)">{{ thirdPage }}</button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setFirstPaginationButton(firstPaginationButton + 1)">Next</button>
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
      firstPaginationButton: 'GET_FIRST_PAGINATION_BUTTON'
    }),
    secondPage () {
      return this.firstPaginationButton + 1
    },
    thirdPage () {
      return this.firstPaginationButton + 2
    }
  },
  methods: {
    ...mapActions({
      setFirstPaginationButton: 'SET_FIRST_PAGINATION_BUTTON',
      setIsLoading: 'SET_ISLOADING'
    }),
    moveToPreviousPage () {
      return this.firstPaginationButton <= 1 ? null : this.setFirstPaginationButton(this.firstPaginationButton - 1)
    },
    changeClass () {
      return this.firstPaginationButton <= 1 ? 'page-item disabled' : 'page-item'
    }
  }
}
</script>
