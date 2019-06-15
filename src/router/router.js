import Vue from 'vue'
import Router from 'vue-router'
import GeneralLayout from '@/components/layouts/GeneralLayout'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: GeneralLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/issues',
          name: 'Issues',
          component: () => import('@/views/Issues.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
