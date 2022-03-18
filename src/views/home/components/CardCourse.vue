<script setup>
const props = defineProps({
  title: { type: String, required: true },
  image: { type: String, required: true },
  bgName: { type: String, required: true }
})
const imgUrl = new URL('/src/assets/images/icons/default.png', import.meta.url)
  .href
</script>
<template>
  <li>
    <span :class="['card', `bg-${props.bgName}`]">
      <span class="icon">
        <img :src="props.image != '' ? props.image : imgUrl" alt="" />
      </span>
      <span class="title">{{ props.title }}</span>
      <span class="action">
        <RouterLink
          :to="{ name: 'campus.modules' }"
          :class="['btn', props.bgName]"
          >Acessar</RouterLink
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
