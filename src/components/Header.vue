<template>
  <v-toolbar class="toolbar">
    <v-toolbar-title>
      <router-link :to="{ name: 'home' }" class="brand">
        GitHub Issues
      </router-link>
    </v-toolbar-title>
    <v-spacer />
  </v-toolbar>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  .brand {
    text-decoration: none
  }
</style>
