import {
  auth,
  createUserWithEmailAndPassword,
  setDoc,
  db,
  doc,
} from "./firebase.js";

const addUserToFirestore = async (user) => {
  await setDoc(doc(db, "users", user.uid), {
    userID: user.uid,
    email: user.email,
  });
};

function register() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("New User Created Successfully");
      console.log("user ==>", user.uid);
      addUserToFirestore(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Message ==>", errorMessage);
    });
}

const registerBtn = document.getElementById("registerBtn");
registerBtn.addEventListener("click", register);
