<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
    <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
    <button @click="logout" v-if="isLoggedIn">Logout</button>
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

export default {
  name: 'TopNav',
  setup() {
    const user = ref(null);

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

    return {
      user,
      isLoggedIn,
      logout
    };
  }
};
</script>