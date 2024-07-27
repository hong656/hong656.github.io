import { createRouter, createWebHistory } from 'vue-router'
import loginpage from '../views/adminpage/loginpage.vue'
import User from '@/views/adminpage/User.vue'
import UploadFile from '../views/adminpage/UploadFile.vue'
import ListUser from '../views/adminpage/ListUser.vue'
import UpdateUser from '../views/adminpage/UpdateUser.vue'
import ConProduct from '@/views/adminpage/product-manage/ConProduct.vue'
import ListProduct from '../views/adminpage/product-manage/ListProduct.vue'
import UpdateProduct from '../views/adminpage/product-manage/UpdateProduct.vue'
const routes = [
        {
            path: '/admin/login',
            name: 'admin-login-page',
            component: loginpage
        },
        {
            path: '/admin/user/upload',
            name: 'admin-user-upload',
            component: UploadFile,
                beforeEnter: (to, from, next) => {
                    var isLogin = localStorage.getItem('isLogin')
                    if (isLogin != 'OK') {
                    next('/admin/login')
                    } else {
                    next()
                    }
                }
        },
        {
            path: '/admin/user/listuser',
            name: 'admin-user-listuser',
            component: ListUser,
                beforeEnter: (to, from, next) => {
                    var isLogin = localStorage.getItem('isLogin')
                    if (isLogin != 'OK') {
                    next('/admin/login')
                    } else {
                    next()
                    }
                }
        },
        {
            path: '/admin/user/Updateuser',
            name: 'admin-user-updateuser',
            component: UpdateUser,
                beforeEnter: (to, from, next) => {
                    var isLogin = localStorage.getItem('isLogin')
                    if (isLogin != 'OK') {
                    next('/admin/login')
                    } else {
                    next()
                    }
                }
        },
        {
            path: '/admin/user/product',
            name: 'admin-user-product',
            component: ConProduct,
                beforeEnter: (to, from, next) => {
                    var isLogin = localStorage.getItem('isLogin')
                    if (isLogin != 'OK') {
                    next('/admin/login')
                    } else {
                    next()
                    }
                }
        },
        {
            path: '/admin/user/listproduct',
            name: 'admin-user-list',
            component: ListProduct,
                beforeEnter: (to, from, next) => {
                    var isLogin = localStorage.getItem('isLogin')
                    if (isLogin != 'OK') {
                    next('/admin/login')
                    } else {
                    next()
                    }
                }
        },
        {
            path: '/admin/user/updateproduct',
            name: 'admin-user-updateproduct',
            component: UpdateProduct,
                beforeEnter: (to, from, next) => {
                    var isLogin = localStorage.getItem('isLogin')
                    if (isLogin != 'OK') {
                    next('/admin/login')
                    } else {
                    next()
                    }
                }
        },
        {
            path: '/admin/user',
            name: 'admin-user',
            component: User,                        
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
