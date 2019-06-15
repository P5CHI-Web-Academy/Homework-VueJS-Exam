import { fetchIssues } from '@/api/issues'

export default {
  namespaced: true,
  state: {
    issues: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      commit('mutateLoading', true)
      fetchIssues()
        .then(result => commit('mutateIssues', result.data))
        .finally(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateIssues (state, issues) {
      state.issues = issues
    },
    mutateLoading (state, loading) {
      state.loading = loading
    }
  },
  getters: {
    getIssues (state) {
      return state.issues
    },
    getIssueById: (state) => (id) => state.issues.find(el => el.id === id),
    getClosedIssues (state) {
      return state.issues.map(issue.state = 'closed')
    },
    getLoading (state) {
      return state.loading
    }
  }
}
