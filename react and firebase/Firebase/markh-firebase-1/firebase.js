import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

import {
  getFirestore,
  addDoc,
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  getDocs,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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
const provider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const auth = getAuth(app);

const db = getFirestore(app);

export {
  auth,
  provider,
  app,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  addDoc,
  collection,
  db,
  FacebookAuthProvider,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  getDocs,
  onSnapshot,
};
