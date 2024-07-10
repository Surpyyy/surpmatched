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
      alert("Sign-in failed!");
      console.error(error);
    });
};
  </script>

  <style lang="scss">
  #googleBtn {
      display: inline-block;
      background: white;
      color: #444;
      width: 190px;
      border-radius: 5px;
      border: thin solid #888;
      box-shadow: 1px 1px 1px grey;
      white-space: nowrap;
    }
    #customBtn:hover {
      cursor: pointer;
    }
    span.label {
      font-family: serif;
      font-weight: normal;
    }
    span.icon {
      background: url('../assets/g-normal.png') transparent 5px 50% no-repeat;
      display: inline-block;
      vertical-align: middle;
      width: 42px;
      height: 42px;
    }
    span.buttonText {
      display: inline-block;
      vertical-align: middle;
      padding-left: 42px;
      padding-right: 42px;
      font-size: 14px;
      font-weight: bold;
      /* Use the Roboto font that is loaded in the <head> */
      font-family: 'Roboto', sans-serif;
    }

  </style>