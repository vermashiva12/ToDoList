// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOWNK8dJQDRmD9YlN_lnHpIdvgID-_rbs",
  authDomain: "todo-app-9a05b.firebaseapp.com",
  projectId: "todo-app-9a05b",
  storageBucket: "todo-app-9a05b.appspot.com",
  messagingSenderId: "1099122175170",
  appId: "1:1099122175170:web:e360f0a90ad6ca730c5f5b",
  measurementId: "G-RR461GDFD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)