import React from "react";
import FarmerRegister from "../../assets/farmerRegister.svg";

export default function SellerRegister() {
  return (
    <form
      className="max-w-4xl mx-auto mt-4 px-2"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className="text-[#d36938] font-bold text-3xl">Seller Registration</h1>
      <div className="flex flex-col md:flex-row gap-x-4 items-center my-10">
        <div className="">
          <img src={FarmerRegister} alt="" className="h-72" />
        </div>
        <div className="bg-gray-500  rounded-full mt-2 mb-4"></div>
        <div className="flex flex-col gap-y-1">
          <h4 className="mb-2 text-lg font-semibold">
            Enter Your GST Details:
          </h4>
          <div className="grid md:grid-cols-2 md:flex-row items-center gap-x-4 gap-y-2 px-2 mb-2">
            <label htmlFor="sellerName">Enter Seller Name*</label>
            <input
              required
              type="text"
              id="sellerName"
              name="sellerName"
              className="max-w-sm md:max-w-lg outline-none px-2 rounded py-1"
            />
          </div>
          <div className="grid md:grid-cols-2 md:flex-row items-center gap-x-4 gap-y-2 px-2 mb-2">
            <label htmlFor="sellerLocation">Select Location* </label>
            <select
              required
              name="sellerLocation"
              id="sellerLocation"
              className="max-w-sm md:max-w-lg outline-none px-2 rounded py-1"
            >
              {/* Todo Add Options Available */}
            </select>
          </div>
          <div className="grid md:grid-cols-2 md:flex-row items-center gap-x-4 gap-y-2 px-2 mb-2">
            <label htmlFor="GSTName">
              Enter Business Name as registered in GST*
            </label>
            <input
              required
              type="text"
              id="GSTName"
              name="GSTName"
              className="max-w-sm md:max-w-lg outline-none px-2 rounded py-1"
            />
          </div>
          <div className="grid md:grid-cols-2 md:flex-row items-center gap-x-4 gap-y-2 px-2 mb-2">
            <label htmlFor="GSTNumber">Enter GST No.*</label>
            <input
              required
              type="text"
              id="GSTNumber"
              name="GSTNumber"
              className="max-w-sm md:max-w-lg outline-none px-2 rounded py-1"
            />
          </div>
          <div className="grid md:grid-cols-2 md:flex-row items-center gap-x-4 gap-y-2 px-2 mb-4">
            <label htmlFor="SellerImage">
              Attach a photo of your business workplace
            </label>
            <input
              required
              type="file"
              id="SellerImage"
              name="SellerImage"
              className="max-w-sm md:max-w-lg outline-none px-2 rounded py-1"
            />
          </div>
        </div>
      </div>
      <div className="px-2 w-min ml-auto">
        <button className="bg-[#d36938] px-2 py-1 rounded text-white font-bold">
          Submit
        </button>
      </div>
    </form>
  );
}
