<script setup>
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { notify } from '@kyvg/vue3-notification'
import { ref } from 'vue'
const users = useUsersStore()
const email = ref('')
const password = ref('')
const loading = ref(false)
const router = useRouter()
const imgUrl = new URL('/src/assets/images/logo.svg', import.meta.url).href
const imgLogoDark = new URL('/src/assets/images/logoDark.svg', import.meta.url)
  .href

const auth = async () => {
  loading.value = true
  const response = await users.auth({
    email: email.value,
    password: password.value,
    device_name: 'teste'
  })
  loading.value = false
  if (response.status === 200) {
    router.push({ name: 'campus.home' })
  } else {
    let msgError = 'Falha Na Requisição'
    if (response.status === 422) {
      msgError = 'Dados Inválidos'
    }
    if (response.status === 404) {
      msgError = 'Usuário Não Encontrado'
    }
    notify({
      title: 'Falha Ao Fazer Login',
      text: msgError,
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
              <div class="groupForm">
                <i class="far fa-key"></i>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  placeholder="Senha"
                  required
                />
                <i class="far fa-eye buttom"></i>
              </div>
              <button
                @click.prevent="auth"
                :class="['btn', 'primary', loading ? 'loading' : '']"
                type="submit"
              >
                <span v-if="!loading">Login</span>
                <span v-else>Enviando...</span>
              </button>
            </form>
            <span>
              <p class="fontSmall">
                Esqueceu sua senha?
                <RouterLink
                  :to="{ name: 'forget.password' }"
                  class="link primary"
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
