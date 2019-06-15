import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.github.com/repos/vuejs/vue/issues',
  timeout: 3000
})

export default instance
