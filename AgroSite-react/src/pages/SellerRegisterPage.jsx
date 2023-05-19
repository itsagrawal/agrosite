import React from "react";
import SellerRegister from "../components/forms/SellerRegister";
import SellerNavbar from "../components/navbar/SellerNavbar";
import Footer from "../components/footer/Footer";

export default function SellerRegisterPage() {
  return (
    <div>
      <SellerNavbar />
      <SellerRegister />
      <Footer />
    </div>
  );
}
