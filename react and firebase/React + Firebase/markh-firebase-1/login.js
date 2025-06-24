import { auth, signInWithEmailAndPassword } from "./firebase.js";

function login() {
  console.log("check");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Signed In Successfully");
      console.log("user ==>", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Message ==>", errorMessage);
    });
}

const registerBtn = document.getElementById("loginBtn");
registerBtn.addEventListener("click", login);
