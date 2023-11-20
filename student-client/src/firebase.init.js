// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7SMx_Iv5auDSY1ibCVMNe38reFwQV4dA",
  authDomain: "student-management-28dd2.firebaseapp.com",
  projectId: "student-management-28dd2",
  storageBucket: "student-management-28dd2.appspot.com",
  messagingSenderId: "1074952737991",
  appId: "1:1074952737991:web:4e658f35495e85fd765ae2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;