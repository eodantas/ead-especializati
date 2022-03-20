<script setup>
import { useCoursesStore } from '@/stores/courses'
import { useRouter } from 'vue-router'
const props = defineProps({
  course: { type: Object, required: true },
  bgName: { type: String, required: true }
})
const store = useCoursesStore()
const router = useRouter()
const imgUrl = new URL('/src/assets/images/icons/default.png', import.meta.url)
  .href
const setCourse = () => {
  store.setCourseSelected(props.course)
  router.push({ name: 'campus.modules' })
}
</script>
<template>
  <li>
    <span :class="['card', `bg-${props.bgName}`]">
      <span class="icon">
        <img
          :src="props.course.image != '' ? props.course.image : imgUrl"
          alt=""
        />
      </span>
      <span class="title">{{ props.course.name }}</span>
      <span class="action">
        <!-- <RouterLink
          :to="{ name: 'campus.modules' }"
          :class="['btn', props.bgName]"
          >Acessar</RouterLink
        > -->
        <a @click.prevent="setCourse" href="#" :class="['btn', props.bgName]"
          >Acessar</a
        >
      </span>
    </span>
    <span class="dots">
      <span></span>
      <span></span>
      <span></span>
    </span>
  </li>
</template>
