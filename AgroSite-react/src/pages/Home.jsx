import { useState, useEffect } from "react";
import { useAppContext } from "../firebase/ApplicationContext";
import Navbar from "../components/navbar/Navbar";
import Helmet from "react-helmet";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import Feature from "../components/feature/Feature";
import SellerOrBuyerModal from "../components/modals/SellerOrBuyerModal";
import useSeller from "../hooks/useSeller";
import useProduct from "../hooks/useProducts";
import ProductCard from "../components/cards/ProductCard";
import ProductContainer from "../components/containers/ProductContainer";

export default function Home() {
  const res = useSeller();
  let v = Boolean(res);
  const [isOpenModal, setModal] = useState(v);
  const { user } = useAppContext();
  return (
    <>
      <Helmet>
        <title>Agrosite - Home</title>
      </Helmet>
      <Header />
      <Feature />
      <ProductList2 />
      <NewsLetter />
      <Footer />
      <SellerOrBuyerModal isOpen={isOpenModal} setIsOpen={setModal} />
    </>
  );
}

// Section 1
function Header() {
  return (
    <div className="header">
      <Navbar />
      <div
        id="bg"
        style={{ opacity: "1", top: "0px", backgroundPositionY: "0px" }}
      >
        <div className="coll">
          <p className="title">AgroSite</p>
          <p className="subtitle">For and by Farmers</p>
        </div>
      </div>
    </div>
  );
}

function ProductList2() {
  const products = useProduct();
  const [prods, setProds] = useState([]);
  useEffect(() => {
    (async () => {
      await products.then((v) => {
        setProds(v);
      });
    })();
  }, []);
  return (
    <ProductContainer>
      {prods.map((v, idx) => {
        return <ProductCard v={v} key={idx} />;
      })}
    </ProductContainer>
  );
}

// Section 3
function ProductList() {
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>New Modern farm Vehicles</p>
      <div className="pro-container">
        <div className="pro" onClick={() => {}}>
          <img src="./assets/t6 combine.avif" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>T670 Series Combine</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./assets/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro" onClick={() => {}}>
          <img src="./assets/x9 combine.webp" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>X9 1100 combines</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro" onClick={() => {}}>
          <img src="./assets/tarctor 3.avif" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>Row Crop Tractors</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro" onClick={() => {}}>
          <img src="./assets/seeder 2.avif" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>Hagie R120 Boom</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro" onClick={() => {}}>
          <img src="./assets/seeder.avif" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>Self Propelled Sprayer</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro" onClick={() => {}}>
          <img src="./assets/tractor 1.avif" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>Compact Tractors</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro" onClick={() => {}}>
          <img src="./assets/730 seeder.webp" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>730 Air Disk Drill</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
        <div className="pro" onClick={() => {}}>
          <img src="./assets/tractor 2.avif" alt="" />
          <div className="des">
            <span>JHON DEERE</span>
            <h5>Utility Tractors</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>
              <i className="fa fa-rupee"></i> 123
            </h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
