import { defineStore } from 'pinia'
import Http from '@/services/Http.init'
const http = new Http({ auth: true })
export const useCoursesStore = defineStore({
  id: 'courses',
  state: () => ({
    myCourses: [],
    courseSelected: {
      id: '',
      name: '',
      image: '',
      modules: []
    },
    lessonPlayer: {
      id: '',
      name: '',
      video: '',
      views: []
    }
  }),
  getters: {},
  actions: {
    async getCourses() {
      try {
        const response = await http.get('/courses')
        this.myCourses = response.data.data
        return response
      } catch (error) {
        return error.response
      }
    },
    setCourseSelected(course) {
      this.courseSelected = course
    },
    setLessonPlayer(lesson) {
      this.lessonPlayer = lesson
    },
    removeLessonPlayer() {
      this.lessonPlayer = {
        id: '',
        name: '',
        video: '',
        views: []
      }
    }
  }
})
