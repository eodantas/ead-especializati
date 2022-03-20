<script setup>
import Modules from '@/views/modules/components/Modules.vue'
import Player from '@/views/modules/components/Player.vue'
import Supports from '@/views/modules/components/Supports.vue'
import { useCoursesStore } from '@/stores/courses'
import { computed } from 'vue'
const store = useCoursesStore()
const course = computed(() => store.courseSelected)
</script>

<template>
  <div>
    <div class="pageTitle">
      <span class="title">{{ course.name }}</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div class="content">
      <div class="container">
        <Modules />
        <div class="right">
          <div class="content">
            <Player />
            <Supports />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
