import Navbar from "../components/navbar/Navbar";
import Helmet from "react-helmet";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import Feature from "../components/feature/Feature";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Agrosite - Home</title>
      </Helmet>
      <Header />
      <Feature />
      <ProductList />
      <NewsLetter />
      <Footer />
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

// Section 3
function ProductList() {
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>New Modern farm Vehicals</p>
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
            <h4>$123</h4>
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
            <h4>$123</h4>
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
            <h4>$123</h4>
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
            <h4>$123</h4>
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
            <h4>$123</h4>
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
            <h4>$123</h4>
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
            <h4>$123</h4>
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
            <h4>$123</h4>
          </div>
          <a href="./pages/cart.html">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
