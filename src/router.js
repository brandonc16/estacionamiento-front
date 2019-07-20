import Vue from 'vue'
import Router from 'vue-router'
// import Dashboard from './views/Dashboard.vue'
import Parkings from './views/Parkings.vue'
import Users from './views/Users.vue'
import Sales from './views/Sales.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/parkings',
      name: 'parkings',
      component: Parkings
    },
    {
      path: '/sales',
      name: 'sales',
      component: Sales
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
