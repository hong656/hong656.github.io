import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/adminpage/Dashboard.vue'
import loginpage from '../views/adminpage/loginpage.vue'
import User from '@/views/adminpage/User.vue'

const routes = [
        {
            path: '/admin/login',
            name: 'admin-login-page',
            component: loginpage
        },
        {
            path: '/admin/user',
            name: 'admin-user',
            component: User
        },
        {
            path: '/admin/dachboard',
            name: 'admin-user-Dashboard',
            component: Dashboard,                        
                beforeEnter: (to, from, next) => {
                    var isLogin = localStorage.getItem('isLogin')
                    if (isLogin != 'OK') {
                    next('/admin/login')
                    } else {
                    next()
                    }
                }
        }
    ]

const adminRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default adminRouter
