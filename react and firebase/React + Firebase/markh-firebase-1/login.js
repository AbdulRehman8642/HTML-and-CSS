import {
  auth,
  signInWithEmailAndPassword,
  provider,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  FacebookAuthProvider,
  app,
  db,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  deleteField,
  addDoc,
} from "./firebase.js";

// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});

// EMAIL PASSWORD LOGIN
// EMAIL + PASSWORD = LOGIN
function login() {
  console.log("check");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("User Signed In Successfully");
      console.log("user ==>", user);
      addUserToFirestore(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error Message ==>", errorMessage);
    });
}

const registerBtn = document.getElementById("loginBtn");
registerBtn.addEventListener("click", login);

const addUserToFirestore = async (user) => {
  await setDoc(doc(db, "users", user.uid), {
    name: "null",
    userID: user.uid,
    email: user.email,
    image: user.photoURL,
  });
};
//LOG IN WITH GOOGLE
function loginWithGoogleFun() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("loginWithGoogle result", result);
      const user = result.user;
      console.log("user ==>", user);
      addUserToFirestore(user);
    })
    .catch((error) => {
      console.error("Google login error:", error.message);
    });
}
const loginWithGoogle = document.getElementById("loginWithGoogle");
loginWithGoogle.addEventListener("click", loginWithGoogleFun);

// SIGN OUT WITH GOOGLE
function SignOutWithGoogleFun() {
  signOut(auth)
    .then(() => {
      console.log("SignOutWithGoogleFun success");
      // Sign-out successful.
    })
    .catch((error) => {
      console.log("SignOutWithGoogleFun error");
      // An error happened.
    });
}
const SignOutWithGoogle = document.getElementById("SignOutWithGoogle");
SignOutWithGoogle.addEventListener("click", SignOutWithGoogleFun);

window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
  size: "invisible",
  callback: (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
  },
});

//User update process below:

let updateFun = async () => {
  let username = document.getElementById("name");

  const userRef = doc(db, "users", auth.currentUser.uid);

  await updateDoc(userRef, {
    name: username.value,
  });
  console.log("Updated");
};

let updateBtn = document.getElementById("updateBtn");
updateBtn && updateBtn.addEventListener("click", updateFun);

// data deletion process below:

let deleteDataFun = async () => {
  const userRef = doc(db, "users", auth.currentUser.uid);
  console.log("before deletion");
  await deleteDoc(userRef, {
    email: deleteField(),
  });
  console.log("after deletion");
};

let deleteBtn = document.getElementById("deleteBtn");
deleteBtn && deleteBtn.addEventListener("click", deleteDataFun);

// ToDo list Item Adding function... Below:

let addTodoItem = () => {
  const docRef = addDoc()
};

let addItemBtn = document.getElementById("addTodoBtn");
addItemBtn && addItemBtn.addEventListener('click', addTodoItem)

// const phoneNumber = "03313963733";
// const appVerifier = window.recaptchaVerifier;

//SIGN IN WITH PHONE//
// function signInWithPhoneFun() {
//   const phoneInput = document.getElementById("phoneInput");
//   const phoneNumber = phoneInput.value;
//   const appVerifier = window.recaptchaVerifier;

//   signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       window.confirmationResult = confirmationResult;
//       console.log("SMS sent");

//       const code = prompt("Enter the OTP sent to your phone:");
//       if (code) {
//         confirmationResult
//           .confirm(code)
//           .then((result) => {
//             const user = result.user;
//             console.log("Phone auth successful, user:", user);
//           })
//           .catch((error) => {
//             console.log("Incorrect OTP or verification failed:", error);
//           });
//       }
//     })
//     .catch((error) => {
//       console.log("SMS not sent or reCAPTCHA error:", error);
//     });
// }

// const signInWithPhone = document.getElementById("signInWithPhone");
// signInWithPhone.addEventListener("click", signInWithPhoneFun);

// signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   });
