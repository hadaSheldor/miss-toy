import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import aboutPage from '../views/about-page.vue'
import toyApp from '../views/toy-app.cmp.vue'
import toyEdit from '../views/toy-edit.cmp.vue'
import toyDetails from '../views/toy-details.cmp.vue'
import dashboard from '../views/dashboard.vue'
import loginSignup from '../views/login-signup.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/**',
      redirect: loginSignup,
    },
    {
      path: '/',
      name: 'home',
      component: homePage,
    },
    {
      path: '/login-signup',
      name: 'login',
      component: loginSignup,
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },
    {
      path: '/toy/:toyId',
      name: 'toy-details',
      component: toyDetails,
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'toy-edit',
      component: toyEdit,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage,
    },
  ],
})

export default router
