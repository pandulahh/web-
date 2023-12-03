// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy5Btn3AdDpOpoxyaCHUKxLds5xUdnbeg",
  authDomain: "web-osisspengasmart.firebaseapp.com",
  projectId: "web-osisspengasmart",
  storageBucket: "web-osisspengasmart.appspot.com",
  messagingSenderId: "546706464023",
  appId: "1:546706464023:web:71ad95e607f3a83bfbeb52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();