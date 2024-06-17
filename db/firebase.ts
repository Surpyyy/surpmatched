import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'

export const firebaseConfig = initializeApp({
    apiKey: process.env.APIKEY,

    authDomain: process.env.AUTHDOMAIN,
  
    projectId: process.env.PROJECTID,
  
    storageBucket: process.env.STORAGEBUCKET,
  
    messagingSenderId: process.env.MESSANGINGSENDERID,
  
    appId: process.env.APPID,
  
})