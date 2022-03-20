<script setup>
import CardCourse from '@/views/home/components/CardCourse.vue'
import { computed, onMounted } from 'vue'
import { useCoursesStore } from '@/stores/courses'
const store = useCoursesStore()
onMounted(() => {
  store.getCourses()
})
const myCourses = computed(() => store.myCourses)
</script>

<template>
  <div class="pageTitle">
    <span class="title">Meus Cursos</span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </div>

  <div class="content">
    <ul class="listCourses">
      <CardCourse
        v-for="course in myCourses"
        :key="course.id"
        :bg-name="'laravel'"
        :course="course"
      />
    </ul>
  </div>
</template>
