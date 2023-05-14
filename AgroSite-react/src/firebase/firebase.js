// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3tnCSGnOo6tlnSOg0phzQtwQSH5TdamU",
  authDomain: "agrosite-24.firebaseapp.com",
  projectId: "agrosite-24",
  storageBucket: "agrosite-24.appspot.com",
  messagingSenderId: "233970728101",
  appId: "1:233970728101:web:f7a4ec676915848348a14c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// connectFirestoreEmulator(db, "localhost", 8080);
// connectStorageEmulator(storage, "localhost", 9199);
