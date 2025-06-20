import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApsVMczoOJYNnwgvPmobRuPQ08yll5gDQ",
  authDomain: "alpek-consultancy.firebaseapp.com",
  projectId: "alpek-consultancy",
  storageBucket: "alpek-consultancy.firebasestorage.app",
  messagingSenderId: "395931296143",
  appId: "1:395931296143:web:c8da4727863fb790372bfa",
  measurementId: "G-BKHM6GFYMZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
