// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt5oSonZ2KtHziGB57fgy59ytiyS_uRII",
  authDomain: "netflixclone-46490.firebaseapp.com",
  projectId: "netflixclone-46490",
  storageBucket: "netflixclone-46490.appspot.com",
  messagingSenderId: "94103611114",
  appId: "1:94103611114:web:24325053bb9bea40731993",
  measurementId: "G-CGSJ53QBYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth=getAuth(app);