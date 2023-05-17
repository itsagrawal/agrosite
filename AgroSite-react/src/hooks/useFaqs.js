import { getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { FaqDoc } from "../firebase/dbReferences";

export default function useFaqs() {
  const [fqs, setFqs] = useState([]);
  useEffect(() => {
    getDoc(FaqDoc).then((v) => {
      setFqs(Object.values(v.data()));
    });
  }, []);
  return fqs;
}
