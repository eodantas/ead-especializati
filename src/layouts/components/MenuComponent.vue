<script setup>
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { ref } from 'vue'
const store = useUsersStore()
const router = useRouter()
const loading = ref(false)
const logout = async () => {
  loading.value = true
  await store.logout()
  loading.value = false
  router.push({ name: 'auth' })
}
</script>
<template>
  <div class="animate__animated animate__fadeIn">
    <transition name="fade">
      <ul id="mainMenu">
        <li class="animate__animated animate__headShake">
          <RouterLink :to="{ name: 'campus.home' }">Inicio</RouterLink>
        </li>
        <li class="animate__animated animate__headShake">
          <RouterLink :to="{ name: 'campus.my.supports' }"
            >Minhas Dúvidas</RouterLink
          >
        </li>
        <li class="animate__animated animate__headShake">
          <a @click.prevent="logout" href="#"
            ><span v-if="!loading">Sair</span><span v-else>Saindo...</span></a
          >
        </li>
      </ul>
    </transition>
  </div>
</template>
