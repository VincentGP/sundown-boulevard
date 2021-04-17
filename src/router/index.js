import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/select-dish',
    name: 'Select dish',
    component: () => import('../views/checkout/steps/SelectDish.vue')
  },
  {
    path: '/select-beverage',
    name: 'Select beverage',
    component: () => import('../views/checkout/steps/SelectBeverage.vue')
  },
  {
    path: '/confirm-order',
    name: 'Confirm order',
    component: () => import('../views/checkout/steps/ConfirmOrder.vue')
  },
  {
    path: '/receipt',
    name: 'Receipt',
    component: () => import('../views/checkout/Receipt.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
