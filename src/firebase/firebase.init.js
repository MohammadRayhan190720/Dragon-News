// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiojeUH_PP1rLp8DYgjYWT4Xree48rnyw",
  authDomain: "dragon-news-auth-56532.firebaseapp.com",
  projectId: "dragon-news-auth-56532",
  storageBucket: "dragon-news-auth-56532.firebasestorage.app",
  messagingSenderId: "399082319478",
  appId: "1:399082319478:web:27797bfc5b0ad0ceeb7957",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
