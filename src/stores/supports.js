import { defineStore } from 'pinia'
import Http from '@/services/Http.init'
const http = new Http({ auth: true })
export const useSupportsStore = defineStore({
  id: 'supports',
  state: () => ({
    supports: {
      data: [],
      meta: {
        total: 0,
        page: 0,
        last_page: 0
      }
    }
  }),
  getters: {},
  actions: {
    setSupports(supports) {
      this.supports = Object.assign({}, this.supports, supports)
    },
    addNewSupport(support) {
      this.supports.data.unshift(support)
    },
    resetSupports() {
      this.supports = {
        data: [],
        meta: {
          total: 0,
          page: 0,
          last_page: 0
        }
      }
    },
    addNewReplyToSupport(data) {
      const reply = data.reply
      const supportId = data.supportId
      const supports = this.supports.data
      supports.forEach((support, i) => {
        if (support.id === supportId) {
          supports[i].replies.unshift(reply)
        }
      })
      this.supports.data = supports
    },
    async getSupportsByLesson(lessonId) {
      try {
        const response = await http.get('/supports', {
          params: { lesson: lessonId }
        })
        this.setSupports(response.data)
        return response
      } catch (error) {
        return error.response
      }
    },
    async storeSupport(params) {
      try {
        const response = await http.post('/supports', params)
        this.addNewSupport(response.data.data)
        return response
      } catch (error) {
        return error.response
      }
    },
    async newReplySupport(params) {
      try {
        const response = await http.post('/replies', params)
        const data = { reply: response.data.data, supportId: params.support }
        this.addNewReplyToSupport(data)
        return response
      } catch (error) {
        return error.response
      }
    },
    async getMySupports(params) {
      try {
        const response = await http.get('/my-supports', { params })
        this.setSupports(response.data)
        return response
      } catch (error) {
        return error.response
      }
    }
  }
})
