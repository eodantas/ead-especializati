import axios from 'axios'
import { URL_API, TOKEN_NAME } from '@/configs'
// const http = axios.create({
//   baseURL: URL_API
// })

// export default http
export default class Http {
  constructor(status) {
    const token = sessionStorage.getItem(TOKEN_NAME)
    const headers = status.auth ? { Authorization: `Bearer ${token}` } : {}
    this.instance = axios.create({
      baseURL: URL_API,
      headers: headers
    })
    return this.instance
  }
}
