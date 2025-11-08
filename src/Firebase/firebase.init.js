// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsowmDvnY6qhfc4GJYI3B0e7LHuDy6Q9o",
  authDomain: "online-learning-proj.firebaseapp.com",
  projectId: "online-learning-proj",
  storageBucket: "online-learning-proj.firebasestorage.app",
  messagingSenderId: "133883851559",
  appId: "1:133883851559:web:a32cb78cf75c020e74ef02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);