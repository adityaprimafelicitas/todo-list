// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQTahmwBC_JVJQCzI8Try-BcRpzgNnft4",
  authDomain: "todo-list-f8cd7.firebaseapp.com",
  projectId: "todo-list-f8cd7",
  storageBucket: "todo-list-f8cd7.firebasestorage.app",
  messagingSenderId: "238137874227",
  appId: "1:238137874227:web:8c5c94c4193b2a04ee9046",
  measurementId: "G-6SDFCEDD9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { app, analytics, db };
