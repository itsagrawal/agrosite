import { getDocs, orderBy, query, where, and } from "firebase/firestore";
import { orderCollection } from "../firebase/dbReferences";
import { useAppContext } from "../firebase/ApplicationContext";
import { useEffect, useState } from "react";

export const useOrderBySeller = () => {
  const [orders, setOrder] = useState([]);
  const { user } = useAppContext();

  useEffect(() => {
    let q = query(
      orderCollection,
      and(
        where("sid", "==", `${user.uid}seller`),
        where("status", "!=", "Declined")
      ),
      orderBy("status", "desc")
    );
    getDocs(q).then((vi) => {
      let ords = [];
      vi.forEach((v) => {
        ords.push({ ...v.data(), id: v.id });
      });
      setOrder(ords);
    });
  }, [user]);
  return orders;
};
