import { createRouter, createWebHistory } from 'vue-router'
import BaseParentComponent from '../views/BaseParentComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
