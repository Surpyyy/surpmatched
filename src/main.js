import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.APIKEY,

    authDomain: process.env.AUTHDOMAIN,
  
    projectId: process.env.PROJECTID,
  
    storageBucket: process.env.STORAGEBUCKET,
  
    messagingSenderId: process.env.MESSANGINGSENDERID,
  
    appId: process.env.APPID,
  
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')