<script setup>
import { ref } from 'vue';
import MenuComponent from '@/layouts/components/MenuComponent.vue'

const imgUrl = new URL('/src/assets/images/logo.svg', import.meta.url)
const showMenu = ref(false)
const toggleMenu = () => (showMenu.value = !showMenu.value)
</script>

<template>
  <header id="header">
    <nav>
      <span @click="toggleMenu" class="toggleMenu far fa-bars"></span>
      <RouterLink :to="{ name: 'campus.home' }">
        <span class="logo">
          <img :src="imgUrl" alt="EspecializaTI" />
        </span>
      </RouterLink>
    </nav>
  </header>
  <MenuComponent v-if="showMenu" />
</template>
