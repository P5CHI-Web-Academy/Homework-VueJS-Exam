import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Issues from '@/components/Issues'
import IssueDetail from '@/components/IssueDetail'
import IssuesLayout from '@/views/IssuesLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: IssuesLayout,
      children: [
        {
          path: '',
          name: 'issues',
          component: Issues
        },
        {
          path: 'issues/:id',
          name: 'issueDetail',
          props: true,
          params: ['id'],
          component: IssueDetail
        }
      ]
    }
  ]
})
