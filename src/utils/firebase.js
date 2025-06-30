// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuMNOVix-kwKT83kptF4dmbrjKcXTii6A",
  authDomain: "netflix-gpt-aec4e.firebaseapp.com",
  projectId: "netflix-gpt-aec4e",
  storageBucket: "netflix-gpt-aec4e.firebasestorage.app",
  messagingSenderId: "745878287412",
  appId: "1:745878287412:web:2c9c4b5d87780a57828661",
  measurementId: "G-WCRQZHFG54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
