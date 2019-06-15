import { fetchIssues } from '@/api/issues'

export default {
  namespaced: true,
  state: {
    issueList: [],
    issueSearchResults: []
  },
  actions: {
    fetch: ({ commit }, params) => {
      return fetchIssues(params)
        .then(result => {
          commit('mutateIssueList', result.data)
          return result
        })
        .catch(error => {
          alert(error)
        })
    }
  },
  mutations: {
    mutateIssueList: (state, issues) => {
      state.issueList = issues
    }
  },
  getters: {
    getIssueList: state => state.issueList,
    getById: state => id => state.issueList.find(obj => obj.id === id)
  }
}
