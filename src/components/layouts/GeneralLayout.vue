<template>
  <div>
    <Header />

    <v-layout>
      <router-view />
    </v-layout>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header'

export default {
  name: 'GeneralLayout',
  components: {
    Header
  }
}
</script>
