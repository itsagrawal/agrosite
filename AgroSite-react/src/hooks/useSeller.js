import { getDoc } from "firebase/firestore";
import { useAppContext } from "../firebase/ApplicationContext";
import { sellerDoc } from "../firebase/dbReferences";
import { useEffect, useState } from "react";

const useSeller = async () => {
  const { user } = useAppContext();
  if (user) {
    const sellDoc = sellerDoc(user.uid + "seller");
    await getDoc(sellDoc).then((v) => {
      if (v.exists() === false) {
        return false;
      } else {
        return v.data();
      }
    });
  }
  return false;
};
export default useSeller;

export const useGetSeller = () => {
  const [seller, setSeller] = useState({});
  const { user } = useAppContext();
  useEffect(() => {
    if (user) {
      const sellDoc = sellerDoc(user.uid + "seller");
      getDoc(sellDoc).then((v) => {
        if (v.exists()) setSeller(v.data());
      });
    }
  }, [user]);
  return seller;
};
