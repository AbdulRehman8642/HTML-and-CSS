import { React, useState } from "react";
import {
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  db,
  auth,
} from "../firebase.js";
import "../App.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });

  const sendUserData = async (user) => {
    const docRef = doc(db, "user", user.uid);
    await setDoc(docRef, {
      userEmail: email,
      userPassword: password,
    });
  };

  const newUserCreation = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        const user = userCred.user;
        console.log("new user created");
        console.log("user ==>", user.uid);
        console.log(email);
        console.log(password);
        sendUserData(user);
      })
      .catch((error) => {
        console.log("error ==>", error);
      });
  };

  return (
    <>
      <div className="signupFormParent">
        <div className="e-p-signup">
          <div className="emailInpDiv">
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="passInpDiv">
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <button id="test1" onClick={newUserCreation}>
        test it
      </button>
    </>
  );
}
