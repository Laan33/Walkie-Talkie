// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Ubol116ACsiWlLQvPKp4mtgHViJV60U",
  authDomain: "softwareengineeringprojectv1.firebaseapp.com",
  databaseURL: "https://softwareengineeringprojectv1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "softwareengineeringprojectv1",
  storageBucket: "softwareengineeringprojectv1.appspot.com",
  messagingSenderId: "1085447217399",
  appId: "1:1085447217399:web:9648a76b48df10b831f3f2",
  measurementId: "G-DNGCDPRFP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;