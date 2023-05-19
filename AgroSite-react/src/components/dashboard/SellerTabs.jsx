import { useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import { v4 } from "uuid";
import { useProductBySeller } from "../../hooks/useProducts";
import { auth } from "../../firebase/firebase";
import { useAppContext } from "../../firebase/ApplicationContext";
import ProductContainer from "../containers/ProductContainer";
import ProductCard from "../cards/ProductCard";
import FullPageLoader from "../Loader/FullPageLoader";
import { useGetSeller } from "../../hooks/useSeller";
import { useOrderBySeller } from "../../hooks/useOrders";
import OrderCard from "../cards/OrderCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const prods = useProductBySeller();
  let [categories, setCategories] = useState({
    Orders: [],
    Inventory: prods,
    Profile: [],
  });

  if (!prods) return <FullPageLoader />;
  return (
    <div className="w-full max-w-md md:max-w-4xl px-2 mt-6 sm:px-0 mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={v4()}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <OrdersTab />
          <Tab.Panel
            className={classNames(
              "rounded-xl bg-white p-3 py-6 px-4",
              "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
            )}
          >
            <h2 className="font-semibold text-2xl text-gray-500">
              Your Inventory
            </h2>
            <ProductContainer>
              {prods.map((v) => {
                return <ProductCard v={v} key={v4()} />;
              })}
            </ProductContainer>
          </Tab.Panel>
          <SellerProfile />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function OrdersTab() {
  const orders = useOrderBySeller();
  return (
    <Tab.Panel
      className={classNames(
        "rounded-xl bg-white p-3",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      {orders.map((v) => {
        return <OrderCard order={v} key={v4()} />;
      })}
    </Tab.Panel>
  );
}

function SellerProfile() {
  const seller = useGetSeller();
  return (
    <Tab.Panel
      className={classNames(
        "rounded-xl bg-white p-3 py-6",
        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
      )}
    >
      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold text-2xl text-gray-500">Your Workplace</h3>
        <div className="grid md:grid-cols-2">
          <div className="flex items-center">
            <img src={seller.sellerImage} alt="" className="h-48 mx-auto" />
          </div>
          <div className="flex flex-col justify-between py-4">
            <div>
              Seller Name:{" "}
              <span className="font-bold ml-2">{seller.sellerName}</span>
            </div>
            <div>
              GST Name: <span className="font-bold ml-2">{seller.GSTName}</span>
            </div>
            <div>
              GST Number:{" "}
              <span className="font-bold ml-2">{seller.GSTNumber}</span>
            </div>
            <div>
              Seller Location:{" "}
              <span className="font-bold ml-2">{seller.sellerLocation}</span>
            </div>
            {/* Seller Name */}
            {/* GST Name */}
            {/* GST Number */}
            {/* Seller Location */}
          </div>
        </div>
      </div>
    </Tab.Panel>
  );
}
