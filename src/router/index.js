import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BaseParentComponent from '../views/BaseParentComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/base',
      name: 'base',
      // route level code-splitting
      // this generates a separate chunk (BaseParentComponent.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: BaseParentComponent
    }
  ]
})

export default router
