// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSF-Uwe7801uwQltk8reg1qMYPbAYVbkw",
    authDomain: "hasmarks-perle.firebaseapp.com",
    projectId: "hasmarks-perle",
    storageBucket: "hasmarks-perle.appspot.com",
    messagingSenderId: "907160469943",
    appId: "1:907160469943:web:088cc034931815fa2aa832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app
