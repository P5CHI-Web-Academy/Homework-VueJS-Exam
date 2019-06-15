import { fetchIssues } from '@/api/issues'

export default {
  namespaced: true,
  state: {
    issues: []
  },
  actions: {
    fetch ({ commit }) {
      fetchIssues()
        .then(result => console.log(result))
    }
  }
}
