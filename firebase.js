// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaeGYBTj2AoF23GUFhlkGVYB8mdtxkAcM",
  authDomain: "minespace-f6383.firebaseapp.com",
  projectId: "minespace-f6383",
  storageBucket: "minespace-f6383.appspot.com",
  messagingSenderId: "811314144835",
  appId: "1:811314144835:web:24c5e6cfc22d0131e4d6f6",
  measurementId: "G-CF8SCJFVSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app);


export { app, db, storage, auth };
