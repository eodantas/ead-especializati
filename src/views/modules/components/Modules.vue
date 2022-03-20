<script setup>
import { useCoursesStore } from '@/stores/courses'
import { computed, ref } from 'vue';
const store = useCoursesStore()
const modules = computed(() => store.courseSelected.modules)
const lessonInPlayer = computed(() => store.lessonPlayer)
const showModule = ref(0)
const toggleModule = (moduleId) => (showModule.value = moduleId)
const addLessonInPlayer = (lesson) => store.setLessonPlayer(lesson)
</script>
<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>
      <div
        v-for="module in modules"
        :key="module.id"
        :class="['modules', showModule === module.id ? 'active' : '']"
      >
        <div @click="toggleModule(module.id)" class="name">
          <span class="text">{{ module.name }}</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul v-if="showModule === module.id" class="classes">
          <li
            v-for="(lesson, index) in module.lessons"
            :key="lesson.id"
            @click="addLessonInPlayer(lesson)"
            :class="[lesson.id === lessonInPlayer.id ? 'active' : '']"
          >
            <span
              v-if="lesson.views.length > 0"
              class="check active fas fa-check"
            ></span>
            <span class="nameLesson">{{ lesson.name }}</span>
            <span v-if="index > 0" class="file fas fa-file-archive"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
