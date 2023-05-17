import { getDoc } from "firebase/firestore";
import { LocationDoc } from "../firebase/dbReferences";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [locs, setLocs] = useState([]);
  useEffect(() => {
    getDoc(LocationDoc).then((v) => {
      let l = v.data().locations;
      l.sort();
      setLocs(l);
    });
  }, []);
  return locs;
}
