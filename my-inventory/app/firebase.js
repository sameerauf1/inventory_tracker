// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_BwLVDNfc8fUXbK9wK2wGgmvapwo6764",
  authDomain: "my-inventory-6bc2c.firebaseapp.com",
  projectId: "my-inventory-6bc2c",
  storageBucket: "my-inventory-6bc2c.appspot.com",
  messagingSenderId: "659688937559",
  appId: "1:659688937559:web:1a19e39f191eab16336b12",
  measurementId: "G-SEQXJ1QQSH"
};

// Initialize Firebase instance
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };