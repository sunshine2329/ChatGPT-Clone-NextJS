// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8TvhrFyddHA4sq_HyzCpOUaKSQNuqfNE",
  authDomain: "chatgpt-clone-b022f.firebaseapp.com",
  projectId: "chatgpt-clone-b022f",
  storageBucket: "chatgpt-clone-b022f.appspot.com",
  messagingSenderId: "858343771909",
  appId: "1:858343771909:web:6d4d8cbb6f5663d82cb16c",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
