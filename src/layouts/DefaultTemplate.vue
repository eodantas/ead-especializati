<script setup>
import HeaderComponent from '@/layouts/components/HeaderComponent.vue'
import FooterComponet from '@/layouts/components/FooterComponent.vue'
import { onBeforeMount } from 'vue'
onBeforeMount(() => {
  document.body.classList.add('page')
  document.body.classList.add('dark')
  document.title = 'Curso EAD com Vue.js 3 - EspecializaTI'
})
</script>
<template>
  <div>
    <HeaderComponent />
    <section>
      <RouterView />
    </section>
    <FooterComponet />
  </div>
</template>
