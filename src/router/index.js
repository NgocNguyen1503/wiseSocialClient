import { createRouter, createWebHistory } from 'vue-router'
import BaseParentComponent from '../views/BaseParentComponent.vue'
import AuthComponent from '../views/AuthComponent.vue';
import indexComponent from '../views/indexComponent.vue';
import MyProfileComponent from '../views/MyProfileComponent.vue';
import UserProfileComponent from '../views/UserProfileComponent.vue';
import MessageComponent from '../views/MessageComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthComponent
    },
    {
      path: '/index',
      name: 'index',
      component: indexComponent
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      component: MyProfileComponent
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: UserProfileComponent
    },
    {
      path: '/message',
      name: 'message',
      component: MessageComponent
    },
  ]
})

export default router
