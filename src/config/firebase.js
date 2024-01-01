
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI4riy7gLMbGHSzhFebDzAcQ2jtbkC2zI",
  authDomain: "ijjazahmad11.firebaseapp.com",
  projectId: "ijjazahmad11",
  storageBucket: "ijjazahmad11.appspot.com",
  messagingSenderId: "70363591411",
  appId: "1:70363591411:web:04cff53ce31fe5829e3d86",
  measurementId: "G-0P1890M6HG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { firestore, auth }
