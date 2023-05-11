import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import SellerNavbar from "../components/navbar/SellerNavbar";
import FeatureSeller from "../components/feature/FeatureSeller";
import SellerRegisterPage from "./SellerRegisterPage";
import SellerTabs from "../components/dashboard/SellerTabs";
import ProductCreate from "./ProductCreate";

export default function Seller() {
  return (
    <Routes>
      <Route path="" element={<SellerHomePage />}></Route>
      <Route path="register" element={<SellerRegisterPage />}></Route>
      <Route path="product/create" element={<ProductCreate />}></Route>
    </Routes>
  );
}

function SellerHomePage() {
  return (
    <>
      {/* Navbar */}
      <SellerNavbar />
      {/* Feature Component */}
      {/* Tab Bar */}
      {/* Footer */}
      <FeatureSeller />
      {/* <div className="h-60 md:h-80"></div> */}
      <SellerActionsTabs />
      <SellerTabs />
      <Footer />
    </>
  );
}

function SellerActionsTabs() {
  return (
    <div className="my-2 flex justify-end md:max-w-4xl mx-auto max-w-md ">
      <button className="bg-blue-700 px-2 py-1 rounded text-white">
        Add Product <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
