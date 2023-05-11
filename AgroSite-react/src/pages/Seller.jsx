import { Route, Routes } from "react-router-dom";
import Footer from "../components/footer/Footer";
import SellerNavbar from "../components/navbar/SellerNavbar";
import FeatureSeller from "../components/feature/FeatureSeller";

export default function Seller() {
  return (
    <>
      {/* Navbar */}
      <SellerNavbar />
      {/* Feature Component */}
      {/* Tab Bar */}
      {/* Footer */}
      <Routes>
        <Route path="" element={<FeatureSeller />}></Route>
      </Routes>
      {/* <div className="h-60 md:h-80"></div> */}
      <Footer />
    </>
  );
}
