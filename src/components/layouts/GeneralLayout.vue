<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">
      <v-flex xs3>
        <Side />
      </v-flex>

      <v-flex xs9>
        <router-view />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Side from '@/components/layouts/Side'

export default {
  name: 'GeneralLayout',
  components: {
    Header,
    Side
  }
}
</script>
