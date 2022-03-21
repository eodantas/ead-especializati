<script setup>
import Support from '@/components/Support.vue'
import { onMounted, ref } from 'vue'
import { useSupportsStore } from '@/stores/supports'
const store = useSupportsStore()
const status = ref('')
const getMySupports = (newStatus) => {
  status.value = newStatus
  store.getMySupports(status.value)
}
onMounted(() => {
  getMySupports()
})
</script>
<template>
  <div>
    <div class="pageTitle">
      <span class="title">Minhas Dúvidas</span>
      <span class="dots">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div class="content">
      <div class="container">
        <div class="left">
          <div class="card">
            <div class="title bg-laravel">
              <span class="text">Filtros</span>
            </div>
            <div class="modules">
              <ul class="classes">
                <li
                  @click="getMySupports('')"
                  :class="[status === '' ? 'active' : '']"
                >
                  Todos
                </li>
                <li
                  @click="getMySupports('A')"
                  :class="[status === 'A' ? 'active' : '']"
                >
                  Agurdando Minha Resposta
                </li>
                <li
                  @click="getMySupports('P')"
                  :class="[status === 'P' ? 'active' : '']"
                >
                  Aguardando Professor
                </li>
                <li
                  @click="getMySupports('C')"
                  :class="[status === 'C' ? 'active' : '']"
                >
                  Finalizados
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <div class="comments">
              <Support />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
