// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4DOmVUh27nZNRu90hMeXzz0pTakL6cmE",
  authDomain: "client-site-ass10.firebaseapp.com",
  projectId: "client-site-ass10",
  storageBucket: "client-site-ass10.appspot.com",
  messagingSenderId: "232736773766",
  appId: "1:232736773766:web:b42f418df3e4138b70e307"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app