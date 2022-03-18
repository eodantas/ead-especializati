<script setup>
import { ref } from 'vue'
import { useUsersStore } from '@/stores/users'
import { useRouter } from 'vue-router'
import { notify } from '@kyvg/vue3-notification'
const store = useUsersStore()
const router = useRouter()
const imgUrl = new URL('/src/assets/images/logo.svg', import.meta.url).href
const imgLogoDark = new URL('/src/assets/images/logoDark.svg', import.meta.url)
  .href
const email = ref('')
const loading = ref(false)
const forgetPassword = async () => {
  loading.value = true
  const response = await store.forgetPassword({ email: email.value })
  loading.value = false
  if (response.status === 200) {
    notify({
      title: 'Sucesso',
      text: 'Confira Seu E-mail'
    })
    router.push({ name: 'auth' })
  } else {
    notify({
      title: 'Falha',
      text: 'Falah Ao Recuperar o Usuário',
      type: 'warn'
    })
  }
}
</script>
<template>
  <section
    id="loginPage"
    :style="{ backgroundImage: 'url(/src/assets/images/bgLogin.jpg)' }"
  >
    <div class="loginContent">
      <div class="loginCard">
        <div
          class="decor"
          :style="{ backgroundImage: 'url(/src/assets/images/building.jpg)' }"
        >
          <div class="content">
            <span class="logo">
              <img :src="imgUrl" alt="EspecializaTI" />
            </span>
            <span class="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="description">
              <p>
                Os melhores e mais completos cursos de Laravel do Brasil, cursos
                com projetos reais. Do zero ao profissional.
              </p>
            </span>
            <span class="copyright fontSmall">
              Todos os Direitos reservados - <b>Especializati</b>
            </span>
          </div>
        </div>
        <div class="login">
          <div class="content">
            <span class="logo">
              <img :src="imgLogoDark" alt="" />
            </span>
            <span>
              <p>Seja muito bem vindo!</p>
            </span>
            <span class="dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span class="description">
              Acesse nossa plataforma e desfrute de cursos completos para sua
              especialização.
            </span>
            <form action="/dist/index.html" method="">
              <div class="groupForm">
                <i class="far fa-envelope"></i>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <button
                class="btn primary"
                type="submit"
                @click.prevent="forgetPassword"
              >
                <span v-if="!loading">Recuperar</span>
                <span v-else>Recuperando...</span>
              </button>
            </form>
            <span>
              <p class="fontSmall">
                Acessar?
                <RouterLink :to="{ name: 'auth' }" class="link primary"
                  >Clique aqui</RouterLink
                >
              </p>
            </span>
          </div>
          <span class="copyright fontSmall">
            Todos os Direitos reservados - <b>Especializati</b>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
