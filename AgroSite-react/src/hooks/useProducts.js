import React, { useEffect, useState } from "react";
import { productCollection } from "../firebase/dbReferences";
import {
  getDocs,
  query,
  limit,
  where,
  orderBy,
  getDoc,
} from "firebase/firestore";
import useLocation from "./useLocation";
import useCategory from "./useCategory";

const useProduct = () => {
  let [products, setProds] = useState([]);
  useEffect(() => {
    const q = query(
      productCollection,
      orderBy("aggregateRating", "desc"),
      limit(12)
    );
    let prod = [];
    getDocs(q).then((v) => {
      v.forEach((vi) => {
        prod.push({ ...vi.data(), id: vi.id });
      });
    });
    setProds(prod);
  }, []);
  return products;
};
export default useProduct;

export const useProduct2 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const q = query(
      productCollection,
      where("aggregateRating", ">=", 0),
      limit(12)
    );
    getDocs(q).then((v) => {
      let prod = [];
      v.forEach((vi) => {
        prod.push({ ...vi.data(), id: vi.id });
      });
      setProducts(prod);
    });
  }, []);
  return products;
};

export const useProduct3 = ({ location, category }) => {
  const [prods, setProds] = useState([]);
  const locs = useLocation();
  const cates = useCategory();
  useEffect(() => {
    let q = productCollection;
    // if locs
    if (locs.includes(location))
      q = query(q, where("location", "==", location));
    if (Object.keys(cates).includes(category))
      q = query(q, where("category", "==", category));
    getDocs(q).then((v) => {
      let products = [];
      v.forEach((vi) => {
        products.push({ ...vi.data(), id: vi.id });
      });
      setProds(products);
    });
  }, [location, category]);
  return prods;
};
