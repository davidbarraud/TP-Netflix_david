// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtOPLoRwe6AU52B8L1EZTx8oEtTLkI79A",
  authDomain: "frontend-netflix.firebaseapp.com",
  projectId: "frontend-netflix",
  storageBucket: "frontend-netflix.appspot.com",
  messagingSenderId: "529486317784",
  appId: "1:529486317784:web:7db20def669b4fb6512fad"
};

// Initialize Firebase
export const AppFirebase = initializeApp(firebaseConfig);