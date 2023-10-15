// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AKI KEY HERE",
  authDomain: "ecommerce-c7ec1.firebaseapp.com",
  projectId: "ecommerce-c7ec1",
  storageBucket: "ecommerce-c7ec1.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXXX",
  appId: "API ID HERE XXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
export { fireDb,auth } ;