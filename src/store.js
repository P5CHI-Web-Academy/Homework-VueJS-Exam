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
    selectedIssue: null,
    comments: [],
    page: 1,
    isLoading: false,
    itemsPerPage: 10,
    itemsState: 'all'
  },
  mutations: {
    SET_LIST: (state, list) => {
      state.list = list
      state.isLoading = false
    },
    SET_SELECTED_ISSUE: (state, issue) => {
      state.selectedIssue = issue
      state.isLoading = false
    },
    SET_COMMENTS: (state, comments) => {
      state.comments = comments
    },
    SET_PAGE: (state, number) => {
      state.isLoading = true
      state.page = number
    },
    SET_ISLOADING: (state, param) => {
      state.isLoading = param
    },
    SET_ITEMS_PER_PAGE: (state, number) => {
      state.itemsPerPage = number
    },
    SET_ITEMS_STATE: (state, arg) => {
      state.itemsState = arg
    }
  },
  actions: {
    SET_LIST: ({ commit }, params) => {
      axiosClient
        .get(`repos/vuejs/vue/issues?page=${params[0]}&per_page=${params[1]}&state=${params[2]}`)
        .then(res => { commit('SET_LIST', res.data) })
        .catch(err => { console.log(err) })
    },
    SET_SELECTED_ISSUE: ({ commit }, number) => {
      axiosClient.get(`repos/vuejs/vue/issues/${number}`)
        .then(res => { commit('SET_SELECTED_ISSUE', res.data) })
      axiosClient.get(`repos/vuejs/vue/issues/${number}/comments`)
        .then(res => { commit('SET_COMMENTS', res.data) })
    },
    SET_PAGE: ({ commit }, number) => {
      commit('SET_PAGE', number)
    },
    SET_ISLOADING: ({ commit }, param) => {
      commit('SET_ISLOADING', param)
    },
    SET_ITEMS_PER_PAGE: ({ commit }, number) => {
      commit('SET_ITEMS_PER_PAGE', number)
    },
    SET_ITEMS_STATE: ({ commit }, state) => {
      commit('SET_ITEMS_STATE', state)
    }
  },
  getters: {
    GET_LIST: state => state.list,
    GET_SELECTED_ISSUE: state => state.selectedIssue,
    GET_COMMENTS: state => state.comments,
    GET_PAGE: state => state.page,
    GET_ISLOADING: state => state.isLoading,
    GET_ITEMS_PER_PAGE: state => state.itemsPerPage,
    GET_ITEMS_STATE: state => state.itemsState
  }
})
