// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0bp-cS9BQf7mpNzIXqbJYf7j9mdMNsNU",
  authDomain: "indio-branco.firebaseapp.com",
  databaseURL: "https://indio-branco-default-rtdb.firebaseio.com",
  projectId: "indio-branco",
  storageBucket: "indio-branco.appspot.com",
  messagingSenderId: "294743979152",
  appId: "1:294743979152:web:c5f93a5a623baf4ca6d415",
  measurementId: "G-8XXT3TBT8Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, auth, storage };