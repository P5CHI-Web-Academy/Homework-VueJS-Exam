import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '../components/layouts/CommonLayout.vue'
import Home from '../views/Home.vue'
import Issue from "../views/Issue.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '', 
      component: CommonLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'issue/:id',
          name: 'issue',
          params: ['id'],
          props: true,
          component: Issue
        }
      ]
    }
  ]
})