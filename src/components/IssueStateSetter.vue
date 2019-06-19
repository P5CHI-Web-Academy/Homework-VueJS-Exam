<template>
  <div class="d-flex flex-row card" style="padding: 5px 5px">
    <div class="card-header">Filter</div>
    <div class="btn-group float-right" role="group">
      <button
        v-for="button in buttons"
        type="button"
        class="btn btn-secondary"
        @click="setState(button.toLowerCase())"
        :key="button"
        :class=" itemsState === button.toLowerCase() ? 'active' : null"
      >{{button}}</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'IssueStateSetter',
  data () {
    return {
      buttons: ['Open', 'Closed', 'All']
    }
  },
  computed: {
    ...mapGetters({
      itemsState: 'GET_ITEMS_STATE'
    })
  },
  methods: {
    ...mapActions({
      setItemsState: 'SET_ITEMS_STATE'
    }),
    setState (value) {
      this.setItemsState(value)
    }
  }
}
</script>
