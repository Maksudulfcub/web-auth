// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxKn_Quxv0rpBIHe0ZYbyMPyYfgBvkYDM",
  authDomain: "web-auth-989f6.firebaseapp.com",
  projectId: "web-auth-989f6",
  storageBucket: "web-auth-989f6.firebasestorage.app",
  messagingSenderId: "225604090751",
  appId: "1:225604090751:web:c9daed0a373a978d7c784a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;