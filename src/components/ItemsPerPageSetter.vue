<template>
  <div class="d-flex flex-row card" style="padding: 5px 5px">
    <div class="card-header">Items per Page</div>
    <div class="btn-group float-right" role="group">
      <button
        v-for="button in buttons"
        type="button"
        class="btn btn-secondary"
        @click="setItemsPerPage(button)"
        :key="button"
        :class=" itemsPerPage === button ? 'active' : null"
      >{{button}}</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ItemsPerPageSetter',
  data () {
    return {
      buttons: [10, 15, 20]
    }
  },
  computed: {
    ...mapGetters({
      itemsPerPage: 'GET_ITEMS_PER_PAGE'
    })
  },
  methods: {
    ...mapActions({
      setItemsPerPage: 'SET_ITEMS_PER_PAGE'
    }),
    setNumber (value) {
      this.setItemsPerPage(value)
    }
  }
}
</script>
