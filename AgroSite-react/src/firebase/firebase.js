// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEW_Eck7ra6uT0AvZtaRUfg6oRWZ4YMkI",
  authDomain: "agrosite-2.firebaseapp.com",
  projectId: "agrosite-2",
  storageBucket: "agrosite-2.appspot.com",
  messagingSenderId: "834895861105",
  appId: "1:834895861105:web:70decd8bde0ce64a1b92d0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, "localhost", 8080);
// connectStorageEmulator(storage, "localhost", 9199);

/*
firebase emulators:start --import=fire-emulator --export-on-exit=./fire-emulator
*/
