<template>
  <v-navigation-drawer>
    <v-list dense class="pt-0">
      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/" active-class="active">Home</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>
            <router-link to="/issues" active-class="active">Issues</router-link>
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Side'
}
</script>

<style scoped lang="scss">
  .v-list__tile__title > a {
    color: black;
    text-decoration: none;
  }
</style>
