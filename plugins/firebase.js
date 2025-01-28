// plugins/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration (ensure to keep this safe in production)
const firebaseConfig = {
    apiKey: "AIzaSyC2YDsGe5wykC8OZpuSbRcWZdfZUVUcj5A",
    authDomain: "nasha-offline.firebaseapp.com",
    projectId: "nasha-offline",
    storageBucket: "nasha-offline.firebasestorage.app",
    messagingSenderId: "1014044421995",
    appId: "1:1014044421995:web:3d4cb5201ae076b73a662e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);  // Authentication
export const provider = new FacebookAuthProvider();  // Facebook Auth provider
export const db = getFirestore(app);  // Firestore database

