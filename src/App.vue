<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DemoComponent from './components/DemoComponent.vue'; 
import AuthComponent from './views/AuthComponent.vue';
import indexComponent from './views/indexComponent.vue';
import MyProfileComponent from './views/MyProfileComponent.vue';
import UserProfileComponent from './views/UserProfileComponent.vue';
import MessageComponent from './views/MessageComponent.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/auth">Login & Register</RouterLink>
        <RouterLink to="/index">index</RouterLink>
        <RouterLink to="/my-profile">My Profile</RouterLink>
        <RouterLink to="/user-profile">User Profile</RouterLink>
        <RouterLink to="/message">Message</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script>
export default {
  methods: {
    clickMe(data) {
      alert(0);
    }
  }
}
</script>

<style scoped>
</style>
