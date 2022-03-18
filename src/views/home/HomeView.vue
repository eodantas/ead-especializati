<script setup>
import CardCourse from '@/views/home/components/CardCourse.vue'
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
      <CardCourse :title="'Curso de Vue'" :image="''" :bg-name="'laravel'" />
    </ul>
  </div>
</template>
