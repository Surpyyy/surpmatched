<template>
  <nav class="top-nav">
    <TopNav />
  </nav>
  <router-view />
</template>

<script>
import TopNav from './components/TopNav.vue';

export default {
  name: 'App',
  components: {
    TopNav
  }
};
</script>

<style>
@import "styles/reset.scss"; 
@import "styles/__variables.scss"; 

#app {
    font-family: "DM Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    background-color: #1A1323;
  }
</style>