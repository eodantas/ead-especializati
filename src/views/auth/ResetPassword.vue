<script setup>
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { ref } from 'vue'
import { notify } from '@kyvg/vue3-notification'
import { useToggleTypePassword } from '@/views/auth/composable/toggleTypePassword'
const { typePassword, toggleTypePassword } = useToggleTypePassword()
const props = defineProps({
  token: { type: String, required: true }
})
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
  const response = await users.resetPassword({
    email: email.value,
    password: password.value,
    token: props.token
  })
  loading.value = false
  if (response.status === 200) {
    notify({
      title: 'Sucesso',
      text: 'Senha Atualizada Com Sucesso'
    })
    router.push({ name: 'auth' })
  } else {
    notify({
      title: 'Falha',
      text: 'Falha Ao Resetar Senha',
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
                  :type="typePassword"
                  name="password"
                  placeholder="Senha"
                  required
                />
                <i
                  @click.prevent="toggleTypePassword"
                  class="far fa-eye buttom"
                ></i>
              </div>
              <button
                @click.prevent="auth"
                :class="['btn', 'primary', loading ? 'loading' : '']"
                type="submit"
              >
                <span v-if="!loading">Atualizar Senha</span>
                <span v-else>Atualizando...</span>
              </button>
            </form>
          </div>
          <span class="copyright fontSmall">
            Todos os Direitos reservados - <b>Especializati</b>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
