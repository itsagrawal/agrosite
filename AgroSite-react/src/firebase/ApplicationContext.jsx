import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useContext, useState, useEffect, createContext } from "react";
import { auth, db } from "./firebase";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export default function ApplicationContext({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  async function signIn() {
    await setPersistence(auth, browserLocalPersistence).then(() => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    });
  }
  async function signOutApp() {
    await signOut(auth);
    setUser(null);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      }
    });
    setLoading(false);
  }, []);
  const value = { user, signIn, signOutApp, loading };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
