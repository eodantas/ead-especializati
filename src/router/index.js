import { createRouter, createWebHistory } from 'vue-router'
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

export default router
