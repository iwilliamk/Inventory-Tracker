// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjj19awUz_dzA8R23p9aP10Br2lDxuPGI",
  authDomain: "inventory-management-e5179.firebaseapp.com",
  projectId: "inventory-management-e5179",
  storageBucket: "inventory-management-e5179.appspot.com",
  messagingSenderId: "505536956358",
  appId: "1:505536956358:web:a5817f5680feea649594c7",
  measurementId: "G-WRW2FK386E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);