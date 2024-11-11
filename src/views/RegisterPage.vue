<template>
    <h1>Create account</h1>
    <div id="googleBtn" @click="signInWithGoogle">
      <span class="icon"></span>
      <span class="buttonText">Sign in with Google</span>
    </div>
  </template>
  
  <script setup>
  import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const signInWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Sign-in successful!");
      // Save user information to Local Storage
      localStorage.setItem("userName", result.user.displayName);
      localStorage.setItem("userEmail", result.user.email);
      localStorage.setItem("userImage", result.user.photoURL);
      // Firebase Auth tokens are automatically managed by the SDK.
      // You can access the token like this if needed:
      result.user.getIdToken().then((token) => {
        localStorage.setItem("userToken", token);
      });

      console.log(result);
      router.push("/");
    })
    .catch((error) => {
      console.error(error);
    });
};
  </script>

  <style lang="scss">
  #googleBtn {
      
    }

  </style>