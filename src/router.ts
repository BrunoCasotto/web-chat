import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'

const routes = [
  {
    path: '/chat',
    name: 'chat',
    component: async () => await import('./pages/Chat.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: async () => await import('./pages/Wellcome.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeResolve(async (to, from, next) => {
  if (to.name === 'chat') {
    const authStore = useAuthStore()
    const authenticated = await authStore.isAuthenticated()

    return authenticated ? next() : next({ name: 'home' })
  } else {
    return next()
  }
})