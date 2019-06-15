import axios from 'axios'

const instance = axios.create({
  baseURL: `${'https://cors-anywhere.herokuapp.com/'}https://api.github.com/repos/vuejs/vue`,
  timeout: 1000
})

// interceptors / transformers / ...

export default instance
