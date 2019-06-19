<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/">Github</router-link>
    <form class="form-inline">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search or jump to..."
        aria-label="Search"
      >
    </form>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          v-for="item in itemList"
          :to="{name: item.routeName}"
          tag="li"
          class="nav-item"
          activeClass="active"
          :key="item.itemName"
        >
          <a class="nav-link">{{item.itemName}}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      itemList: [
        { itemName: 'Pull Requests', routeName: 'PullRequests' },
        { itemName: 'Issues', routeName: 'IssuesList' },
        { itemName: 'Marketplace', routeName: 'Marketplace' },
        { itemName: 'Explore', routeName: 'Explore' }
      ]
    }
  }
}
</script>
