import { productCollection } from "../firebase/dbReferences";
import { getDocs, query, limit, where } from "firebase/firestore";

const useProduct = async () => {
  const q = query(
    productCollection,
    where("aggregateRating", "==", 0),
    limit(5)
  );
  let products = [];
  await getDocs(q).then((v) => {
    v.forEach((vi) => {
      products.push({ ...vi.data(), id: vi.id });
    });
  });
  return products;
};

export const useProduct2 = async () => {
  const q = query(
    productCollection,
    where("aggregateRating", "==", 0),
    limit(10)
  );
  let products = [];
  await getDocs(q).then((v) => {
    v.forEach((vi) => {
      products.push({ ...vi.data(), id: vi.id });
    });
  });
  return products;
};

export default useProduct;
