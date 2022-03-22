<template>
  <div>
    <transition name="fade">
      <ul id="mainMenu">
        <li><RouterLink :to="{ name: 'campus.home' }">Inicio</RouterLink></li>
        <li>
          <RouterLink :to="{ name: 'campus.my.supports' }"
            >Minhas Dúvidas</RouterLink
          >
        </li>
        <li><a href="#">Sair</a></li>
      </ul>
    </transition>
  </div>
</template>
