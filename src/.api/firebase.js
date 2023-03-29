// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDOLEFhtkX2Vra0ZKMWc9qDRRAOhDUhEBA",
  authDomain: "walkie-talkie-f57ce.firebaseapp.com",
  databaseURL: "https://walkie-talkie-f57ce-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "walkie-talkie-f57ce",
  storageBucket: "walkie-talkie-f57ce.appspot.com",
  messagingSenderId: "13384004136",
  appId: "1:13384004136:web:cb86f68ccffd3652f33b1d",
  measurementId: "G-DZ0WRV77SG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;