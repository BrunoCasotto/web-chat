import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/chat', component: async () => await import('./pages/Chat.vue') },
  { path: '/', component: async () => await import('./pages/Wellcome.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
