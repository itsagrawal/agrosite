import { getDoc } from "firebase/firestore";
import { CategoryDoc } from "../firebase/dbReferences";
import { useState, useEffect } from "react";

const useCategory = () => {
  const [cates, setCates] = useState({});
  useEffect(() => {
    getDoc(CategoryDoc).then((v) => {
      setCates(v.data());
    });
  }, []);
  return cates;
};

export default useCategory;
