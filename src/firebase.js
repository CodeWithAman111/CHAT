// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHev7l4Xcffpp9qeriCxxn4XMboZFwnQM",
  authDomain: "chat-751c5.firebaseapp.com",
  projectId: "chat-751c5",
  storageBucket: "chat-751c5.appspot.com",
  messagingSenderId: "686885370987",
  appId: "1:686885370987:web:7391c588f0249c4755c52e",
  measurementId: "G-8E1NQZ5JJS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
