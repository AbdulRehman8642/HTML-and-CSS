import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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
console.log();
export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};

const ascii = `
       d8888 888888b.   8888888b.  888     888 888                     
      d88888 888  "88b  888  "Y88b 888     888 888                     
     d88P888 888  .88P  888    888 888     888 888                     
    d88P 888 8888888K.  888    888 888     888 888                     
   d88P  888 888  "Y88b 888    888 888     888 888                     
  d88P   888 888    888 888    888 888     888 888                     
 d8888888888 888   d88P 888  .d88P Y88b. .d88P 888                     
d88P     888 8888888P"  8888888P"   "Y88888P"  88888888                
                                                                       
                                                                       
                                                                       
8888888b.  8888888888 888    888 888b     d888        d8888 888b    888
888   Y88b 888        888    888 8888b   d8888       d88888 8888b   888
888    888 888        888    888 88888b.d88888      d88P888 88888b  888
888   d88P 8888888    8888888888 888Y88888P888     d88P 888 888Y88b 888
8888888P"  888        888    888 888 Y888P 888    d88P  888 888 Y88b888
888 T88b   888        888    888 888  Y8P  888   d88P   888 888  Y88888
888  T88b  888        888    888 888   "   888  d8888888888 888   Y8888
888   T88b 8888888888 888    888 888       888 d88P     888 888    Y888
`