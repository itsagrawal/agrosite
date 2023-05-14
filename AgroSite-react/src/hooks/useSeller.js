import { getDoc } from "firebase/firestore";
import { useAppContext } from "../firebase/ApplicationContext";
import { sellerDoc } from "../firebase/dbReferences";

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
