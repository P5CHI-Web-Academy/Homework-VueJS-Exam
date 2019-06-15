import API from './axios'

export const fetchIssues = (params) => API.get('https://api.github.com/repos/vuejs/vue/issues', { params })
