import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: '/', component: () => import('../pages/Home.vue') },
  { path: '/Login', component: () => import('../pages/Login.vue') },
  { path: '/Security', component: () => import('../pages/Security.vue') },
  { path: '/2FA', component: () => import('../pages/2FA.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;