import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginpage.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/service.vue')
    },
    {
      path: '/decor',
      name: 'decor',
      component: () => import('../views/decor.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('../views/store.vue')
    },
  ]
})

export default router
