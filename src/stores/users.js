import { defineStore } from 'pinia'
import { TOKEN_NAME } from '@/configs'
import http from '@/services/Http.init'

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    user: {
      name: '',
      email: ''
    },
    logedIn: false
  }),
  getters: {
    isLoged: (state) => state.logedIn
  },
  actions: {
    setUser(user) {
      this.user = user
      this.logedIn = true
    },
    logOut() {
      this.user.name = ''
      this.user.email = ''
      this.logedIn = false
    },
    async auth(params) {
      try {
        const response = await http.post('/auth', params)
        sessionStorage.setItem(TOKEN_NAME, response.data.token)
        return response
      } catch (error) {
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
