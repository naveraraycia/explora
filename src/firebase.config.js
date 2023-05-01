// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVXxQZI1a1HD4fRYOfueZzn3glZbk-S4c",
  authDomain: "explora-app-e410d.firebaseapp.com",
  projectId: "explora-app-e410d",
  storageBucket: "explora-app-e410d.appspot.com",
  messagingSenderId: "1007669830749",
  appId: "1:1007669830749:web:a949e6f63667c44eb199b4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// Export
export const db = getFirestore()