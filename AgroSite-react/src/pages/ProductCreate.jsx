import ProductCreateForm from "../components/forms/ProductCreate";
import SellerNavbar from "../components/navbar/SellerNavbar";
import Footer from "../components/footer/Footer";
import { useAppContext } from "../firebase/ApplicationContext";
import { useEffect, useState } from "react";
import { sellerDoc } from "../firebase/dbReferences";
import { getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ProductCreate() {
  const navigate = useNavigate();
  // if user and its seller then only create product,else create alert register as seller
  const { user } = useAppContext();
  useEffect(() => {
    init();
  }, []);
  async function init() {
    if (user) {
      if (!(await getDoc(sellerDoc(user.uid + "seller"))).exists()) {
        alert("Please Register as a Seller. Redirecting to registration page");
        new Promise((r) => {
          setTimeout(() => {
            navigate("/seller/register");
            r();
          }, 1000);
        });
      }
    } else {
      alert("Please Sign Up and register as a seller");
      setTimeout(() => {
        navigate("/seller");
      }, 1000);
    }
  }
  return (
    <div>
      <SellerNavbar />
      <ProductCreateForm />
      <Footer />
    </div>
  );
}
