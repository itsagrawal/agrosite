import { useEffect, useState } from "react";
import { productCollection } from "../firebase/dbReferences";
import {
  getDocs,
  query,
  limit,
  where,
  orderBy,
  getDoc,
  or,
} from "firebase/firestore";
import useLocation from "./useLocation";
import useCategory from "./useCategory";
import { productDoc } from "../firebase/dbReferences";
import { useParams } from "react-router-dom";
import { useAppContext } from "../firebase/ApplicationContext";

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
      orderBy("aggregateRating", "desc"),
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

export const useProduct3 = () => {
  const locs = useLocation();
  const cates = useCategory();
  const [selecLoc, setSelecLoc] = useState("");
  const [selecCate, setSelecCate] = useState("");
  const [prods, setProds] = useState([]);
  useEffect(() => {
    let q = productCollection;
    // if locs
    if (locs.includes(selecLoc))
      q = query(q, where("location", "==", selecLoc));
    if (Object.keys(cates).includes(selecCate))
      q = query(q, where("category", "==", selecCate));
    q = query(q, orderBy("aggregateRating", "desc"), limit(100));
    getDocs(q).then((v) => {
      let products = [];
      v.forEach((vi) => {
        products.push({ ...vi.data(), id: vi.id });
      });
      setProds(products);
    });
  }, [cates, locs, selecCate, selecLoc]);
  return { prods, selecLoc, setSelecLoc, selecCate, setSelecCate, locs, cates };
};

export const useProductById = () => {
  const { id } = useParams();
  console.log(id);
  const [prod, setProd] = useState({});
  useEffect(() => {
    if (id)
      getDoc(productDoc(id)).then((v) => {
        setProd({ ...v.data(), id: v.id });
      });
  }, [id]);
  return prod;
};

export const useProductBySeller = () => {
  const { user } = useAppContext();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let q = query(productCollection, where("sid", "==", user.uid + "seller"));
    getDocs(q).then((vi) => {
      let prods = [];
      vi.forEach((v) => {
        prods.push({ ...v.data(), id: v.id });
      });
      setProducts(prods);
    });
  }, [user.uid]);
  console.log(products);
  return products;
};

export function useProductByCategory() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [cate, setCate] = useState({});
  const cates = useCategory();

  useEffect(() => {
    console.log(cates[category]);
    let q = productCollection;
    q = query(q, where("category", "==", category));
    getDocs(q).then((vi) => {
      let prods = [];
      vi.forEach((v) => {
        prods.push({ ...v.data(), id: v.id });
      });
      setProducts(prods);
    });
    try {
      setCate({ ...cates[category], name: category });
    } catch (err) {
      console.log(err);
    }
  }, [category, cates]);

  return { products, cate };
}

export const useProductBySearch = () => {
  const [products, setProducts] = useState([]);
  const { search } = useParams();
  useEffect(() => {
    let q = productCollection;
    q = query(
      q,
      or(
        or(
          or(where("name", "==", search), where("brandName", "==", search)),
          where("category", "==", search)
        ),
        where("sellerName", "==", search)
      ),
      limit(100)
    );
    getDocs(q).then((v) => {
      let prods = [];
      v.forEach((vi) => {
        prods.push({ ...vi.data(), id: vi.id });
      });
      setProducts(prods);
    });
  }, [search]);
  return { products, search };
};
