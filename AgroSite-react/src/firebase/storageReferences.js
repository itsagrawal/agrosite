import { storage } from "./firebase";
import { ref } from "firebase/storage";

export const prodcutsReference = (pid) => {
  return ref(storage, `products/${pid}`);
};

export const sellerReference = (sid) => {
  return ref(storage, `sellers/${sid}`);
};
