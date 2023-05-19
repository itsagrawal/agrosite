import Helmet from "react-helmet";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useProductByCategory } from "../hooks/useProducts";
import FullPageLoader from "../components/Loader/FullPageLoader";
import { v4 } from "uuid";
import ProductContainer from "../components/containers/ProductContainer";
import ProductCard from "../components/cards/ProductCard";

export default function CategoryProductDetailPage() {
  let { products, cate } = useProductByCategory();
  if (!cate) return <FullPageLoader />;
  return (
    <>
      <Helmet>
        <title>Agrosite - </title>
      </Helmet>
      <Navbar />
      <div className="h-32"></div>
      {/* Category Avatar, description, products with that category */}
      <div className="flex flex-col max-w-4xl md:mx-auto mx-2">
        <h1 className="text-2xl font-bold text-[#d36938]">{cate.name}</h1>
        <img
          src={cate.image}
          alt=""
          className="h-56 object-contain self-center my-6"
        />
        <p>{cate.description}</p>
        <h3 className="mt-4 mb-2 text-gray-500 italic text-xl">
          # Questions / Points to consider
        </h3>
        {cate.questions ? (
          <ul>
            {cate.questions.map((v) => {
              return (
                <li key={v4()} className="font-normal tracking-tight">
                  {v}{" "}
                </li>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
        <div className="bg-gray-300 h-0.5 rounded-full mx-2 my-10"></div>
        <ProductContainer>
          {products.map((v) => {
            return <ProductCard v={v} key={v4()} />;
          })}
        </ProductContainer>
      </div>
      <Footer />
    </>
  );
}
