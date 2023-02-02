// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8up6r6pSOS_9Yvk2rHkxL0xzpyIRXPtY",
  authDomain: "famstagram-df4ba.firebaseapp.com",
  projectId: "famstagram-df4ba",
  storageBucket: "famstagram-df4ba.appspot.com",
  messagingSenderId: "904946714234",
  appId: "1:904946714234:web:e1f11cba29c2ead2729dc3",
  measurementId: "G-7QZVSP95FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);