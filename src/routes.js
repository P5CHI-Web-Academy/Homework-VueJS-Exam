import Home from '@/components/Home'
import PullRequests from '@/components/PullRequests'
import Marketplace from '@/components/Marketplace'
import IssuesPage from '@/components/IssuesPage'
import IssuesList from '@/components/IssuesList'
import IssueDetail from '@/components/IssueDetail'
import Explore from '@/components/Explore'

export const routes = [
  {
    name: 'Home',
    path: '',
    component: Home
  },
  {
    name: 'PullRequests',
    path: '/pulls',
    component: PullRequests
  },
  {
    path: '/issues',
    component: IssuesPage,
    children: [
      {
        name: 'IssuesList',
        path: '',
        component: IssuesList
      },
      {
        name: 'IssueDetail',
        path: ':number',
        props: true,
        params: ['number'],
        component: IssueDetail
      }
    ]
  },
  {
    name: 'Marketplace',
    path: '/marketplace',
    component: Marketplace
  },
  {
    name: 'Explore',
    path: '/explore',
    component: Explore
  }
]
