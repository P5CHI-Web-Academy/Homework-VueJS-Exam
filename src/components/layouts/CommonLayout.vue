<template>
  <div>
    <Header />
    <v-layout row wrap class="mt-4">
      <v-flex xs10 class="pa-5">
        <router-view />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Header from '../Header.vue'

export default {
  name: 'CommonLayout',
  components: {
    Header
  }
}
</script>