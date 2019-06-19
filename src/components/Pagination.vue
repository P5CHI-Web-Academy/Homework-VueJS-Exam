<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="firstPage <= 1 ? 'page-item disabled' : 'page-item' ">
        <button
          class="page-link"
          @click="firstPage <= 1 ? null : setFirstPage(firstPage - 1)"
        >Previous</button>
      </li>
      <li class="page-item active">
        <button class="page-link">
          {{firstPage}}
          <span class="sr-only">(current)</span>
        </button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setFirstPage(secondPage)">{{secondPage}}</button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setFirstPage(thirdPage)">{{thirdPage}}</button>
      </li>
      <li class="page-item">
        <button class="page-link" @click="setFirstPage(firstPage + 1)">Next</button>
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
      firstPage: 'GET_FIRST_PAGE'
    }),
    secondPage () {
      return this.firstPage + 1
    },
    thirdPage () {
      return this.firstPage + 2
    }
  },
  methods: {
    ...mapActions({
      setFirstPage: 'SET_FIRST_PAGE',
      setIsLoading: 'SET_ISLOADING'
    })
  }
}
</script>
