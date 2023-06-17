// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwxc2VrRvQ0z6nSG9nnLrqOdLfD8B3Mso",
  authDomain: "blogging-app-c0306.firebaseapp.com",
  projectId: "blogging-app-c0306",
  storageBucket: "blogging-app-c0306.appspot.com",
  messagingSenderId: "585243575736",
  appId: "1:585243575736:web:5faca2595dac698499bb4d"
};

 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
//named export