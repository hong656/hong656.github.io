import { createRouter, createWebHistory } from 'vue-router'
import adminRouter from '../router/adminRouter'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import service from '../views/service.vue'
import decor from '../views/decor.vue'
import store from '../views/store.vue'
import PageSearch from '@/views/PageSearch.vue'

const routes =[
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
      component: AboutView
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/decor',
      name: 'decor',
      component: decor
    },
    {
      path: '/store',
      name: 'store',
      component: store
    },
    {
      path: '/search',
      name: 'search',
      component: PageSearch
    }
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...adminRouter.options.routes]
})

export default router
