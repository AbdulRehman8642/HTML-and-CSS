import { React, useState } from "react";
import { createUserWithEmailAndPassword } from "../firebase.js";
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
  function test1check() {
    console.log(email);
    console.log(password);
  }

  const sendUserDataToDb = ()=>{
    const docRef = doc(db, "user", "test")
  }

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
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <button id="test1" onClick={test1check}>
        test it
      </button>
    </>
  );
}
