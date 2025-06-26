import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAb61GYK7N8Ky2OVMhG7L3jt0d7D5WApLI",
  authDomain: "markh-firebase-1.firebaseapp.com",
  projectId: "markh-firebase-1",
  storageBucket: "markh-firebase-1.firebasestorage.app",
  messagingSenderId: "927632402246",
  appId: "1:927632402246:web:ad8552555df9832dcf2747",
  measurementId: "G-KH4LVN3HH2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log();
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};