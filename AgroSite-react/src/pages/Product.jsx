import { Route, Routes } from "react-router-dom";
import ProductDetailPage from "../pages/ProductDetailPage";
import CategoryProductDetailPage from "../pages/CategoryProductDetailPage";
import ProductSearchPage from "./ProductSearchPage";

export default function Product() {
  return (
    <Routes>
      <Route path="/:id" element={<ProductDetailPage />} />
      <Route
        path="/category/:category"
        element={<CategoryProductDetailPage />}
      />
      <Route path="/search/:search" element={<ProductSearchPage />} />
    </Routes>
  );
}
