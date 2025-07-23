import {
  auth,
  onAuthStateChanged,
  addDoc,
  collection,
  app,
  db,
  doc,
  getDoc,
  getDocs,
} from "./firebase.js";

let name = document.getElementById("name");
let email = document.getElementById("email");

// LOCATIONS
let profile = "/markh-firebase-1/profile.html";
let signup = "/markh-firebase-1/index+register.html";
let login = "/markh-firebase-1/login.html";

// User (Sign In or Not) function
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    console.log("user data =>", docSnap.data());
    let userData = docSnap.data();

    if (name) {
      name.innerHTML = userData.name;
    }
    console.log("User is logged in");
    console.log("user ID is ", user.uid);
  } else {
    console.log("User is not signed in");
  }
});


// ALL USERS DATA PROCESS BELOW:
let getAllUsers = async () => {
  const q = collection(db, "users");
  let querySnap = await getDocs(q);
  querySnap.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
};

getAllUsers()

// // DATABASE OF FIREBASE STARTS FROM HERE // //
