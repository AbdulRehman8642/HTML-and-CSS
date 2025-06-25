import { auth, onAuthStateChanged } from "./firebase.js";

onAuthStateChanged(auth, (userCredential) => {
  if (userCredential) {
    console.log("User is logged in");
    console.log("user ID is ", userCredential.uid);
  } else {
    console.log("User is not signed in");
  }
});
