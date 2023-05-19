import Helmet from "react-helmet";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useProductById } from "../hooks/useProducts";
import FullPageLoader from "../components/Loader/FullPageLoader";
import { v4 } from "uuid";
import OrderNowModal from "../components/modals/OrderNowModal";

export default function ProductDetailPage() {
  const prod = useProductById();
  if (!prod) return <FullPageLoader />;
  return (
    <>
      <Helmet>
        <title>{`Agrosite - ${prod.name}`}</title>
      </Helmet>
      <Navbar />
      {/* Return all the recieved properties of that product */}

      <div className="max-w-4xl md:mx-auto mx-2">
        <div className="h-28 "></div>
        <div className="flex flex-col gap-y-6">
          <div className="font-bold text-xl text-[#d36938]">
            {prod.brandName}: {prod.name}, {prod.category}
          </div>

          <div className="grid md:grid-cols-2 gap-y-3 gap-x-6 items-center">
            <div className="flex justify-center">
              <img src={prod.image} alt="" className="h-60 object-contain rounded-xl" />
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="font-bold text-xl tracking-wide">{prod.name}</div>
              <div className="flex gap-x-2">
                <span className="text-gray-500">Brand </span>{" "}
                <div className="px-4 mx-2 font-bold">{prod.brandName}</div>
              </div>
              <div className="flex gap-x-2">
                <span className="text-gray-500">Category</span>
                <div className="font-bold ">{prod.category}</div>
              </div>
              <div className="flex gap-x-2 flex-wrap gap-y-2">
                <div className="bg-gray-300 px-4 rounded-full py-1">
                  <span>
                    {prod.forRent ? (
                      <i className="fa-solid fa-check mx-2 text-green-500"></i>
                    ) : (
                      <i className="fa-solid fa-xmark mx-2 text-red-500"></i>
                    )}
                  </span>{" "}
                  For Rent
                </div>
                <div className="bg-gray-300 px-4 rounded-full py-1">
                  <span>
                    {prod.forSale ? (
                      <i className="fa-solid fa-check mx-2 text-green-500"></i>
                    ) : (
                      <i className="fa-solid fa-xmark mx-2 text-red-500"></i>
                    )}
                    For Sale
                  </span>
                </div>
                {prod.forRent ? (
                  <div className="bg-gray-300 px-4 rounded-full py-1">
                    <span>
                      <i className="fa-solid fa-clock mr-2"></i>
                    </span>{" "}
                    {prod.timePeriod} months
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-gray-500">Rating</div>
                <div className="flex gap-x-1">
                  {[...Array(prod.aggregateRating)].map(() => {
                    return (
                      <i className="fas fa-star text-yellow-400" key={v4()}></i>
                    );
                  })}
                  {prod.aggregateRating ? (
                    <>
                      {[...Array(5 - prod.aggregateRating)].map(() => {
                        return (
                          <i
                            className="fas fa-star text-gray-400"
                            key={v4()}
                          ></i>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="flex gap-x-4 items-center">
                <div className="text-gray-500">Price</div>
                <div className="flex items-center text-xl ">
                  <i className="fa fa-rupee inline-block mr-2"></i>
                  <div>{prod.price}</div>
                </div>
              </div>
              <div className="">
                <OrderNowModal product={prod} />
              </div>
            </div>
          </div>

          <div className="h-0.5 bg-gray-300 rounded-full my-2"></div>

          <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
            {/* Description, Category */}
            <div className="flex flex-col">
              <div>
                <span>Description: </span>
                <p>{prod.description}</p>
              </div>
              <div>
                <span>Category: </span>
                {prod.category}
              </div>
            </div>

            {/* Seller Details, Location, isVerified, forRent, forSale, Time Period */}
            <div className="flex flex-col gap-y-2">
              <div>
                <span>Seller: </span> {prod.sellerName}
              </div>
              <div>
                <span>
                  {" "}
                  <i className="fa-solid fa-location-dot mr-4 "></i>Location:{" "}
                </span>{" "}
                {prod.location}
              </div>
              <div>
                <span> Verified: </span>{" "}
                {prod.isVerified ? (
                  <span>
                    <i className="fa-solid fa-check mx-2 text-green-500"></i>
                  </span>
                ) : (
                  <span>
                    <i className="fa-solid fa-xmark mx-2 text-red-500"></i>
                  </span>
                )}
              </div>
              <div className="bg-gray-300 px-4 rounded-full py-1 self-start">
                <span>
                  {prod.forRent ? (
                    <i className="fa-solid fa-check mx-2 text-green-500"></i>
                  ) : (
                    <i className="fa-solid fa-xmark mx-2 text-red-500"></i>
                  )}
                </span>{" "}
                For Rent
              </div>
              <div className="bg-gray-300 px-4 rounded-full py-1 self-start">
                <span>
                  {prod.forSale ? (
                    <i className="fa-solid fa-check mx-2 text-green-500"></i>
                  ) : (
                    <i className="fa-solid fa-xmark mx-2 text-red-500"></i>
                  )}
                  For Sale
                </span>
              </div>
              <div className="self-start">
                {prod.forRent ? (
                  <div className=" py-1 self-start flex items-center gap-x-2">
                    <span className="">
                      <i className="fa-solid fa-clock mr-2"></i>
                      Time Period:
                    </span>
                    {prod.timePeriod} months
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-0.5 rounded-full w-full mt-16 my-4"></div>

      <Footer />
    </>
  );
}
