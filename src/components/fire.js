import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCwg7Zxjgjgn4SunMEr14X2zWav6m-yLxU",
    authDomain: "upgrace-5a820.firebaseapp.com",
    projectId: "upgrace-5a820",
    storageBucket: "upgrace-5a820.appspot.com",
    messagingSenderId: "511288749020",
    appId: "1:511288749020:web:34443d0511716418497d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)
export {firestore, storage}