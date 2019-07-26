import Vue from 'vue'
import Router from 'vue-router'
import Parkings from './views/Parkings.vue'
import Users from './views/Users.vue'
import Sales from './views/Sales.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/parkings',
      name: 'parkings',
      component: Parkings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/sales',
      name: 'sales',
      component: Sales,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    //check the autentication cookie
    let auth = window.$cookies.isKey("parken-auth")
    auth = true

    if(auth){
      // user signed in, proceed to route
      next()
    } else {
      // no user signed in, redirect to login
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router