<template>
  <nav class="nav">
    <div class="title">surpy.</div>
    <div class="router-item home" :class="isActive('/') ? 'active' : 'inactive'">
      <router-link to="/" class="nav-item">Home</router-link>
    </div>
    <div class="router-item" :class="isActive('/login') ? 'active' : 'inactive'">
      <router-link to="/login" class="nav-item" v-if="!isLoggedIn" >Login</router-link>
    </div>
    <div class="router-item">
      <button @click="logout" class="nav-item" v-if="isLoggedIn">Logout</button>
    </div>
  </nav>
  <div>
    <div v-if="user">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p> 
      <img :src="user.imageUrl" alt="User Image" v-if="user.imageUrl">
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'TopNav',
  setup() {
    const user = ref(null);
    const route = useRoute();


    onMounted(() => {
      const userName = localStorage.getItem("userName");
      const userEmail = localStorage.getItem("userEmail");
      const userImage = localStorage.getItem("userImage");

      if (userName && userEmail) {
        user.value = {
          name: userName,
          email: userEmail,
          imageUrl: userImage,
        };
      }
    });

    const isLoggedIn = computed(() => {
      return !!user.value;
    });

    const logout = () => {
      localStorage.removeItem("userName");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userImage");
      user.value = null;
      window.location.reload(); // Reload the page to reflect changes
    };

    const isActive = (path) => {
      return route.path === path;
    };

    return {
      user,
      isLoggedIn,
      logout,
      isActive
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/__variables.scss";

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: transparent;
  color: white;
  margin: 0 2rem;

  .nav-item {
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    margin: 0 1rem;
    text-decoration: none;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      color: rgb(255, 255, 255, 0.7);
      transition: color 0.3s;
    }
  }
  
  .home{
    margin-left: auto;
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
  }

  .active {
    border-bottom: 2px solid $secondary;
    padding: 0 0 3px;
  }

  .inactive {
    padding: 0 0 3px;
  }
}
</style>