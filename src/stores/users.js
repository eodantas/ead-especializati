import { defineStore } from 'pinia'
import { TOKEN_NAME } from '@/configs'
import Http from '@/services/Http.init'
const http = new Http({ auth: false })
export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    user: {
      name: '',
      email: ''
    },
    logedIn: false,
    loading: false,
    msgLoading: ''
  }),
  getters: {
    isLoged: (state) => state.logedIn
  },
  actions: {
    setLoading(status, msg = 'Carregando... Aguarde!') {
      this.loading = status
      this.msgLoading = msg
    },
    setUser(user) {
      this.user = user
      this.logedIn = true
    },
    unsetUser() {
      this.user.name = ''
      this.user.email = ''
      this.logedIn = false
    },
    async auth(params) {
      try {
        const response = await http.post('/auth', params)
        sessionStorage.setItem(TOKEN_NAME, response.data.token)
        await this.getMe()
        return response
      } catch (error) {
        return error.response
      }
    },
    async logout() {
      const httpA = new Http({ auth: true })
      try {
        const response = await httpA.post('/logout')
        sessionStorage.removeItem(TOKEN_NAME)
        this.unsetUser()
        return response
      } catch (error) {
        return error.response
      }
    },
    async getMe() {
      const token = sessionStorage.getItem(TOKEN_NAME)
      if (!token) {
        return { status: 1, msg: 'Token Not Found' }
      }
      const httpA = new Http({ auth: true })
      try {
        this.setLoading(true)
        const response = await httpA.get('/me')
        this.setLoading(false)
        this.setUser(response.data.data)
        return response
      } catch (error) {
        sessionStorage.removeItem(TOKEN_NAME)
        return error.response
      }
    },
    async forgetPassword(params) {
      try {
        const response = await http.post('/forgot-password', params)
        return response
      } catch (error) {
        return error.response
      }
    },
    async resetPassword(params) {
      try {
        const response = await http.post('/reset-password', params)
        return response
      } catch (error) {
        return error.response
      }
    }
  }
})
