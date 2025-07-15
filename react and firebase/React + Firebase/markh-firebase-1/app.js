import {
  auth,
  onAuthStateChanged,
  getFirestore,
  addDoc,
  collection,
  app,
} from "./firebase.js";


let name = document.getElementById("name");
let email = document.getElementById("email");

// LOCATIONS
let profile = "/markh-firebase-1/profile.html";
let signup = "/markh-firebase-1/index+register.html";
let login = "/markh-firebase-1/login.html";

// User Sign In or Not function
onAuthStateChanged(auth, (user) => {
  if (user) {
    if (name) {
      name.innerHTML = user.email.slice(0, user.email.indexOf("@"));
    }
    console.log("User is logged in");
    console.log("user ID is ", user.uid);
  } else {
    console.log("User is not signed in");
  }
  // if (
  //   user &&
  //   (window.location.pathname === signup || window.location.pathname === login)
  // ) {
  //   window.location = profile;
  // }
  // if (!user && window.location.pathname === profile) {
  //   window.location = signup;
  // }
});

// const writeData = async () => {
//   const result = await addDoc(collection(firestore), "users", {
//     username: "abdul_rehman",
//     class: "intermediate",
//     hobby: "programming",
//     vision: "A good human being",
//   });
  
//   console.log("Result", result)
// };

// let dataWriterButton = document.getElementById('DataWriter')
// dataWriterButton.addEventListener('click', writeData())