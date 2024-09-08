import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Initialize Firebase

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-505b7.firebaseapp.com",
  projectId: "taskmanager-505b7",
  storageBucket: "taskmanager-505b7.appspot.com",
  messagingSenderId: "577959873241",
  appId: "1:577959873241:web:22d9c2ac414b48df754cc8",
  measurementId: "G-4YVKV3J9EP",
};

export const app = initializeApp(firebaseConfig);
