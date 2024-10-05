// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjyDRC0IGx8J19-dpnQ4-kTr6zz0WVbPI",
  authDomain: "my-inventory-84f27.firebaseapp.com",
  projectId: "my-inventory-84f27",
  storageBucket: "my-inventory-84f27.appspot.com",
  messagingSenderId: "76871497461",
  appId: "1:76871497461:web:ddd4ca5721323b008a37bc",
  measurementId: "G-RME0F0SB88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };