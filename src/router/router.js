import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  },
  {
    path: '/forgot_password',
    name: 'Recuperar senha',
    component: () => import(/* webpackChunkName: "about" */ '../views/forgot_password/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
