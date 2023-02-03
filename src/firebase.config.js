// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC95cyEO_ovX_DTt_cfpg-J1IWblRpsdDY",
  authDomain: "rentalweb-a0484.firebaseapp.com",
  projectId: "rentalweb-a0484",
  storageBucket: "rentalweb-a0484.appspot.com",
  messagingSenderId: "1006475225663",
  appId: "1:1006475225663:web:d4a704e1343a39997de68a",
  measurementId: "G-6EZD7EB3F4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
