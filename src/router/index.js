import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/estudios',
    name: 'Estudios',
    component: () => import('../views/Estudios.vue')
  },
  {
    path: '/Sobremi',
    name: 'Sobremi',
    component: () => import('../views/Sobremi.vue')
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
