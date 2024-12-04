// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY3OxqBlFsOhtxdYYm7DHTG0rmsFYgaO0",
  authDomain: "sports-equipments-client.firebaseapp.com",
  projectId: "sports-equipments-client",
  storageBucket: "sports-equipments-client.firebasestorage.app",
  messagingSenderId: "626418555261",
  appId: "1:626418555261:web:37f13061335f766cfc1414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);