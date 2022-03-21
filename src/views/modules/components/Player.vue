<script setup>
import { useCoursesStore } from '@/stores/courses'
import { computed } from 'vue'
const store = useCoursesStore()
const lesson = computed(() => store.lessonPlayer)
const imgUrl = new URL('/src/assets/images/icons/laravel.svg', import.meta.url)
</script>

<template>
  <div class="training">
    <div class="card bg-laravel">
      <span class="icon">
        <img :src="imgUrl" alt="" />
      </span>
      <span class="title">{{ lesson.name }}</span>
      <RouterLink :to="{ name: 'campus.home' }" class="btn laravel">
        <i class="fas fa-chevron-left"></i>
        Voltar
      </RouterLink>
    </div>
    <iframe
      v-if="lesson.video !== ''"
      width="100%"
      height="auto"
      :src="`https://www.youtube.com/embed/${lesson.video}`"
      :title="lesson.name"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
