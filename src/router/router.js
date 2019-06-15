import Vue from 'vue'
import Router from 'vue-router'
import CommonLayout from '@/components/layouts/CommonLayout'
import IssuesList from '@/views/IssuesList'
import IssueItem from '@/views/IssueItem'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: CommonLayout,
      children: [
        {
          path: '',
          name: 'issueslist',
          component: IssuesList
        },
        {
          path: 'issue/:id',
          name: 'issue-item',
          props: true,
          params: ['id'],
          component: IssueItem
        }
      ]
    }
  ]
})
