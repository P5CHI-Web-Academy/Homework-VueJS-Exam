import { fetchIssues } from '@/api/issues'

export default {
  namespaced: true,
  state: {
    issues: []
  },
  actions: {
    fetch ({ commit }) {
      fetchIssues()
        .then(result => commit('mutateIssues', result.data))
    }
  },
  mutations: {
    mutateIssues (state, issues) {
      state.issues = issues
    }
  },
  getters: {
    getIssues (state) {
      return state.issues
    }
  }
}
