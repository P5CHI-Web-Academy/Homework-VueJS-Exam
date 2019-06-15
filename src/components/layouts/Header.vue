<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="home">Github</router-link>
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="issues">Issues</router-link>
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .v-toolbar__title > a,
  a {
    color: gray;
    text-decoration: none;
  }
</style>
