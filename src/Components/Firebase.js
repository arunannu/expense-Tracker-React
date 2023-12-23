import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCgVft_1gD2fNAoO-5L3zu62qe1WSwUsKQ",
  authDomain: "signup-ebfae.firebaseapp.com",
  projectId: "signup-ebfae",
  storageBucket: "signup-ebfae.appspot.com",
  messagingSenderId: "167359014949",
  appId: "1:167359014949:web:d72ae81099ecd63c7cf7cc",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
