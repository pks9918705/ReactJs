// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc-pld8aept1f9pIX9Et2RyrEIsBL5fcU",
  authDomain: "blog-app-b5f2b.firebaseapp.com",
  projectId: "blog-app-b5f2b",
  storageBucket: "blog-app-b5f2b.appspot.com",
  messagingSenderId: "506737778371",
  appId: "1:506737778371:web:f5b17c99ed2ab4f2840c76"
};

 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
//named export