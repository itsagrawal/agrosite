import Helmet from "react-helmet";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import FullPageLoader from "../components/Loader/FullPageLoader";
import { v4 } from "uuid";

import { useProductBySearch } from "../hooks/useProducts";
import ProductContainer from "../components/containers/ProductContainer";
import ProductCard from "../components/cards/ProductCard";

export default function ProductSearchPage() {
  const { products, search } = useProductBySearch();
  return (
    <>
      <Helmet>
        <title>{`Agrosite - ${search}`}</title>
      </Helmet>
      <Navbar />
      {/* Return all the recieved properties of that product */}

      <div className="h-28 "></div>
      <h1 className="text-gray-500 text-xl max-w-4xl md:mx-auto mx-2 ">
        Search Results for -{" "}
        <span className="text-black font-bold">"{search}"</span>
      </h1>
      <ProductContainer>
        {products.map((v) => {
          return <ProductCard v={v} key={v4()} />;
        })}
        {products.length == 0 ? (
          <div>
            <h4 className="text-gray-500">No Results Found</h4>
          </div>
        ) : (
          <></>
        )}
      </ProductContainer>

      <div className="bg-gray-300 h-0.5 rounded-full w-full mt-16 my-4"></div>

      <Footer />
    </>
  );
}
