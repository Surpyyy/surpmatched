<template>
  <nav class="top-nav">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/signin" class="nav-link">Sign in</router-link>
  </nav>
  <router-view />
</template>

<script>

</script>

<style>
@import "styles/reset.scss"; 
@import "styles/__variables.scss"; 

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
  }
</style>