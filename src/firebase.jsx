// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpJg_eV7ATROr6H3MJUIEbIio-3Vibquc",
  authDomain: "friends-space.firebaseapp.com",
  projectId: "friends-space",
  storageBucket: "friends-space.appspot.com",
  messagingSenderId: "839845062024",
  appId: "1:839845062024:web:464519dba34dee31fe863d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
