import { db } from "./firebase";
import { collection, doc } from "firebase/firestore";

// Hardcoded references
// Location Doc Reference
export const LocationDoc = doc(db, "hardcoded", "locations");
// Category Doc Reference
export const CategoryDoc = doc(db, "hardcoded", "categories");

// Product references
// Product Collection
export const productCollection = collection(db, "products");
// Product Review
export const productReviewCollection = (pid) => {
  return collection(db, "products", pid, "reviews");
};
export const productDoc = (pid) => {
  return doc(productCollection, pid);
};

// User references
export const userCollection = collection(db, "users");

// Seller references
export const sellerCollection = collection(db, "sellers");

export const sellerDoc = (Suid) => {
  return doc(sellerCollection, Suid);
};

export const orderCollection = collection(db, "orders");
export const orderDoc = (oid) => {
  return doc(orderCollection, oid);
};

export const FaqDoc = doc(collection(db, "faqs"), "faqs");
