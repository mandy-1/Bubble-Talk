// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIVNGTKzGOUh8JohyrMfGD1E8N3KTKW1Q",
  authDomain: "bubble-talk-9fda7.firebaseapp.com",
  projectId: "bubble-talk-9fda7",
  storageBucket: "bubble-talk-9fda7.appspot.com",
  messagingSenderId: "869805253817",
  appId: "1:869805253817:web:b23f64df49de607e062768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);