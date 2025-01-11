import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFn6Qmed-1tCHwOeHTvv8IF_YqbG1S-mQ",
  authDomain: "test-learn-lingo.firebaseapp.com",
  projectId: "test-learn-lingo",
  storageBucket: "test-learn-lingo.firebasestorage.app",
  messagingSenderId: "463569926883",
  appId: "1:463569926883:web:2357ee7b185d96c57e23d6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
