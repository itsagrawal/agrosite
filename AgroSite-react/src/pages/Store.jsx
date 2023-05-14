import Navbar from "../components/navbar/Navbar";
import Helmet from "react-helmet";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import useProduct, { useProduct2 } from "../hooks/useProducts";
import { useEffect, useState } from "react";
export default function Store() {
  return (
    <>
      <Helmet>
        <title>Agrosite - Store</title>
      </Helmet>
      <Navbar />
      <ShopNav />
      <ProductList2 />
      <NewsLetter />
      <Footer />
    </>
  );
}

// Section 1
function ShopNav() {
  return (
    <section id="shop-nav">
      <h2>#Buyrelivently</h2>
      <p className="text-gray-900">
        Save more with coupons &amp; low down payment
      </p>
    </section>
  );
}

function ProductList2() {
  const products = useProduct2();
  const [prods, setProds] = useState([]);
  useEffect(() => {
    (async () => {
      await products.then((v) => {
        setProds(v);
      });
    })();
  }, []);
  return (
    <div className="flex gap-x-4 flex-wrap justify-center ">
      {prods.map((v) => {
        return (
          <div
            key={v.id}
            className="mt-16 border bg-white py-4 px-2 max-w-sm rounded-md"
            onClick={() => {}}
          >
            <img
              src={v.image}
              alt=""
              className=" w-60 aspect-square object-contain"
            />
            <div className="des">
              <span>{v.brandName}</span>
              <h5>{v.name}</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>
                <i className="fa fa-rupee"></i> {v.price}
              </h4>
            </div>
            <a href={v.image}>
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
        );
      })}
    </div>
  );
}

// Section 2
function ProductList() {
  return (
    <>
      <section id="product1" className="section-p1">
        <div className="pro-container">
          <div className="pro" onClick={() => {}}>
            <img src="../assets/t6 combine.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/x9 combine.webp" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/tarctor 3.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/seeder 2.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/seeder.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/tractor 1.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/730 seeder.webp" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/tractor 2.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/t6 combine.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/x9 combine.webp" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/tarctor 3.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/seeder 2.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/seeder.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/tractor 1.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/730 seeder.webp" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro" onClick={() => {}}>
            <img src="../assets/tractor 2.avif" alt="" />
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
            <a href="../pages/cart.html">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
        </div>
      </section>
      <section id="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i className="fal fa-long-arrow-alt-right"></i>
        </a>
      </section>
    </>
  );
}
