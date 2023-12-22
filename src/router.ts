import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'

export enum PAGES {
  CHAT='CHAT',
  HOME='HOME'
}

const routes = [
  {
    path: '/chat',
    name: PAGES.CHAT,
    component: async () => await import('./pages/Chat.vue')
  },
  {
    path: '/',
    name: PAGES.HOME,
    component: async () => await import('./pages/Login.vue')
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

  switch(to.name) {
    case PAGES.CHAT:
      return authenticated ? next() : next({ name: PAGES.HOME })

    case PAGES.HOME:
      return authenticated ? next({ name: PAGES.CHAT }) : next()

    default:
      next()
      break
  }
})