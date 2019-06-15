import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let axiosClient = axios.create({
  baseURL: `${'https://cors-anywhere.herokuapp.com/'}https://api.github.com`
})

export default new Vuex.Store({
  state: {
    list: [],
    selectedIssue: null
  },
  mutations: {
    'SET_LIST': (state, list) => {
      state.list = list
    },
    'SET_SELECTED_ISSUE': (state, issue) => {
      state.selectedIssue = issue
    }
  },
  actions: {
    'SET_LIST': ({ commit }, list) => {
      axiosClient.get('repos/vuejs/vue/issues')
        .then(res => {
          commit('SET_LIST', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    'SET_SELECTED_ISSUE': ({ commit }, id) => {
      const issue = this.state.list.filter(el => el.id === id)[0]
      commit('SET_SELECTED_ISSUE', issue)
    }
  },
  getters: {
    'GET_LIST': (state) => state.list,
    'GET_ISSUE_BY_ID': (state) => state.selectedIssue
  }
})
