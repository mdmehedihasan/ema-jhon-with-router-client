import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_HlNpoQnYxxF-WozOz8y2w8RUF6iwmjE",
    authDomain: "ema-john-simple-fa2d1.firebaseapp.com",
    projectId: "ema-john-simple-fa2d1",
    storageBucket: "ema-john-simple-fa2d1.appspot.com",
    messagingSenderId: "590870873804",
    appId: "1:590870873804:web:577a086fb48fa0b2652469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;