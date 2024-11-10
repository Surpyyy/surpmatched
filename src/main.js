import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_APPID,
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(router)

app.mount('#app')
