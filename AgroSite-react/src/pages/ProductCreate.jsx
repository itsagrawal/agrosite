import ProductCreateForm from "../components/forms/ProductCreate";
import SellerNavbar from "../components/navbar/SellerNavbar";
import Footer from "../components/footer/Footer";

export default function ProductCreate() {
  return (
    <div>
      <SellerNavbar />
      <ProductCreateForm />
      <Footer />
    </div>
  );
}
