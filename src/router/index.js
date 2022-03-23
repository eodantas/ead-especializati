import { createRouter, createWebHistory } from 'vue-router'
import { useUsersStore } from '@/stores/users'
import { TOKEN_NAME } from '@/configs'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: () => import('@/views/auth/Auth.vue')
  },
  {
    path: '/recuperar-senha',
    name: 'forget.password',
    component: () => import('@/views/auth/ForgetPassword.vue')
  },
  {
    path: '/reset/:token',
    name: 'reset.password',
    component: () => import('@/views/auth/ResetPassword.vue'),
    props: true
  },
  {
    path: '/campus',
    name: 'campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: '',
        name: 'campus.home',
        component: () => import('@/views/home/HomeView.vue')
      },
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: () => import('@/views/supports/MySupports.vue')
      },
      {
        path: 'modulos',
        name: 'campus.modules',
        component: () => import('@/views/modules/ModulesAndLessonsView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const store = useUsersStore()
  const logedIn = store.logedIn
  if (to.name !== 'reset.password' && !logedIn) {
    const token = await sessionStorage.getItem(TOKEN_NAME)
    if (!token && to.name !== 'auth' && to.name !== 'forget.password') {
      return router.push({ name: 'auth' })
    }
    const response = await store.getMe()
    if (response.status !== 200) {
      if (to.name != 'auth') {
        return router.push({ name: 'auth' })
      }
    }
  }
  if (to.name === 'auth' && store.isLoged) {
    return router.push({ name: 'campus.home' })
  }
})

export default router
