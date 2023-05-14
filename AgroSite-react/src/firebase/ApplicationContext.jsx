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
  const [user, setUser] = useState(undefined);
  async function signIn() {
    setLoading(true);
    await setPersistence(auth, browserLocalPersistence).then(() => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider);
    });
    setLoading(false);
  }
  async function signOutApp() {
    await signOut(auth);
    setUser(null);
  }
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(false);
      }
    });
    setLoading(false);
  }, []);
  const value = { user, signIn, signOutApp, loading, setLoading };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
