
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2YDsGe5wykC8OZpuSbRcWZdfZUVUcj5A",
    authDomain: "nasha-offline.firebaseapp.com",
    projectId: "nasha-offline",
    storageBucket: "nasha-offline.firebasestorage.app",
    messagingSenderId: "1014044421995",
    appId: "1:1014044421995:web:3d4cb5201ae076b73a662e"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new FacebookAuthProvider();
export const db = getFirestore(app);

