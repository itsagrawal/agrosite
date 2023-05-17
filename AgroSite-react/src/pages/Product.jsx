import Helmet from "react-helmet";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Route, Routes } from "react-router-dom";

export default function Product() {
  return (
    <Routes>
      <Route path="" element={<ProductHomePage />} />
      <Route path=":id" element={<ProductDetailPage />} />
      <Route
        path="/category/:category"
        element={<CategoryProductDetailPage />}
      />
    </Routes>
  );
}

function CategoryProductDetailPage() {
  return (
    <>
      <Helmet>
        <title>Agrosite -{/* category name */}</title>
      </Helmet>
      <Navbar />
      {/* Category Avatar, description, products with that category */}
      <Footer />
    </>
  );
}

function ProductDetailPage() {
  return (
    <>
      <Helmet>
        <title>Agrosite</title>
      </Helmet>
      <Navbar />
      {/* Return all the recieved properties of that product */}
      <Footer />
    </>
  );
}

function ProductHomePage() {
  return (
    <>
      <Helmet>
        <title>Agrosite - Products</title>
      </Helmet>
      <Navbar />
      {/* Category Bar */}

      {/* Return products with high aggregate rating */}
      {/* Return products sorted by price */}
      <Footer />
    </>
  );
}
