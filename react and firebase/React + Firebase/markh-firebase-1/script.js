import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
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


function register() {

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user ==>", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Message ==>", errorMessage);
    });
}

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener('click', register)
