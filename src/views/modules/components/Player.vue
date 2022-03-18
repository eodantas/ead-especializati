<script setup>
const imgUrl = new URL('/src/assets/images/icons/laravel.svg', import.meta.url)
</script>
<template>
  <div class="training">
    <div class="card bg-laravel">
      <span class="icon">
        <img :src="imgUrl" alt="" />
      </span>
      <span class="title">Aula 01 - LaraFood</span>
      <RouterLink :to="{ name: 'campus.home' }" class="btn laravel">
        <i class="fas fa-chevron-left"></i>
        Voltar
      </RouterLink>
    </div>
    <iframe
      width="100%"
      height="auto"
      src="https://www.youtube.com/embed/KuzeyRr74xM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
