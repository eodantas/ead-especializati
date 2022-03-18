<script setup>
const imgUrl = new URL('/src/assets/images/logo.svg', import.meta.url)
</script>
<template>
  <header id="header">
    <nav>
      <span class="toggleMenu far fa-bars"></span>
      <RouterLink :to="{ name: 'campus.home' }">
        <span class="logo">
          <img :src="imgUrl" alt="EspecializaTI" />
        </span>
      </RouterLink>
    </nav>
  </header>
</template>
