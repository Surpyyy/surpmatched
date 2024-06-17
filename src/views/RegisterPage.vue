<template>
    <h1>Create account</h1>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
  </template>
  
  <script setup>
  import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push("/");
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>