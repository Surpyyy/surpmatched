<script setup>
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(() => {
  // Check if user information exists in Local Storage
  const userName = localStorage.getItem("userName");
  const userEmail = localStorage.getItem("userEmail");
  const userImage = localStorage.getItem("userImage"); // Assuming you also store the image URL in Local Storage

  if (userName && userEmail) {
    // If user information is found, update the user ref
    user.value = {
      name: userName,
      email: userEmail,
      imageUrl: userImage, // Use the image URL from Local Storage
    };
  }
});
</script>

<template>
  <div>
    <h1>Home</h1>
    <div v-if="user">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <img :src="user.imageUrl" alt="User Image" v-if="user.imageUrl">
    </div>
    <p v-else>Not logged in</p>
  </div>
</template>

<style>
/* Add any styles for your home page here */
</style>