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

//LOG IN WITH GOOGLE
function loginWithGoogleFun() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("loginWithGoogle result", result);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.log("loginWithGoogle error", error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
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
    });F
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

const phoneNumber = "03313963733";
const appVerifier = window.recaptchaVerifier;

//SIGN IN WITH PHONE//
function signInWithPhoneFun() {
  const phoneInput = document.getElementById("phoneInput");
  const phoneNumber = phoneInput.value;
  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log("SMS sent");

      const code = prompt("Enter the OTP sent to your phone:");
      if (code) {
        confirmationResult
          .confirm(code)
          .then((result) => {
            const user = result.user;
            console.log("Phone auth successful, user:", user);
          })
          .catch((error) => {
            console.log("Incorrect OTP or verification failed:", error);
          });
      }
    })
    .catch((error) => {
      console.log("SMS not sent or reCAPTCHA error:", error);
    });
}

const signInWithPhone = document.getElementById("signInWithPhone");
signInWithPhone.addEventListener("click", signInWithPhoneFun);

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
