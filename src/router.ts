import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'

const routes = [
  {
    path: '/',
    name: 'Web Chat',
    component: async () => await import('./pages/Chat.vue')
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// @ts-ignore
router.beforeResolve(async (to, from, next) => {
  const authStore = useAuthStore()
  const authenticated = await authStore.isAuthenticated()
  console.log('authenticated', authenticated)

  return next()
})