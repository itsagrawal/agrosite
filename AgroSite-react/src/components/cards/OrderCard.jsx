import { setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { orderDoc } from "../../firebase/dbReferences";

export default function OrderCard({ order }) {
  function refresh() {
    window.location.reload();
  }

  useEffect(() => {
    console.log(order.id);
  }, []);

  async function AcceptHandler() {
    delete order["status"];
    const oid = order["id"];
    delete order["id"];
    await setDoc(orderDoc(oid), { ...order, status: "Accepted" });
    refresh();
  }

  async function DeclineHandler() {
    delete order["status"];
    const oid = order["id"];
    delete order["id"];
    await setDoc(orderDoc(oid), { ...order, status: "Declined" });
    refresh();
  }

  return (
    <div className="w-full flex gap-x-4 h-28 px-4 py-2 items-center">
      <div
        className={`w-2  self-stretch ${
          order.status == "Pending"
            ? "bg-yellow-400"
            : order.status == "Declined"
            ? "bg-red-400"
            : "bg-green-400"
        } `}
      ></div>

      <div className="flex flex-col gap-y-4 text-gray-500 font-light">
        <div className="flex gap-x-4 items-center">
          <div className="text-black font-medium">{order.buyerName}</div>
          <div className="flex items-center">
            Amount: <div className="w-2"></div>
            <i className="fa fa-rupee"></i> {order.amount}
          </div>
          <div className="flex">Quantity x {order.quantity}</div>
        </div>
        <div className="flex gap-x-4 items-center">
          <div className="flex gap-x-2 items-center">
            <i className="fa-solid fa-location-dot "></i>
            {order.location}
          </div>
          <div className="flex w-full">{`${
            order.contactNo ? `+91${order.contactNo}` : ""
          }`}</div>
          <div className="truncate ... w-20 md:w-full md:min-w-20">
            {order.mailAddress}
          </div>
        </div>
      </div>
      <div className="ml-auto self-center flex gap-x-2">
        <button
          className="bg-[#d36938] px-2 py-1 rounded md:text-base text-xs"
          onClick={AcceptHandler}
        >
          Accept
        </button>
        <button
          className="bg-red-300 px-2 py-1 rounded"
          onClick={DeclineHandler}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
