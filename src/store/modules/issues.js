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
    // fetchUserSearchResults: ({ commit }, query) => {
    //   return fetchUsers(query)
    //     .then(result => {
    //       commit('mutateUsersSearchResults', result.data)
    //       return result
    //     })
    //     .catch(error => {
    //       alert(error)
    //     })
    // }
  },
  mutations: {
    mutateIssueList: (state, issues) => {
      state.issueList = issues
    }
    // mutateIssuesSearchResults: (state, results) => {
    //   state.issueSearchResults = results
    // }
  },
  getters: {
    getIssueList: state => state.issueList,
    // getIssuesSearchResults: state => state.issueSearchResults,
    getById: state => id => state.issueList.find(obj => obj.id === id)
  }
}
