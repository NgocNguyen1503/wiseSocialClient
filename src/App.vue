<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DemoComponent from './components/DemoComponent.vue'; 
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/base">Base</RouterLink> -->
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
