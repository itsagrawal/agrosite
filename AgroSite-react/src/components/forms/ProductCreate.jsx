import React from "react";
import ProductCreateSVG from "../../assets/productCreate.svg";
export default function ProductCreate() {
  const divStr = "grid md:grid-cols-2 gap-y-2";
  const inputStr = "rounded";
  return (
    <div className="md:max-w-4xl mx-auto max-w-md mt-4">
      <h1 className="text-[#d36938] font-bold text-2xl mb-4">Create Product</h1>
      <div className="grid md:grid-cols-4 gap-x-4 px-4">
        <div className="min-h-[200px] w-full flex justify-center col-span-4 md:col-span-1">
          <img src={ProductCreateSVG} alt="" className="min-h-full " />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="col-span-3 flex flex-col gap-y-2 px-4 mt-4"
        >
          <div className={divStr}>
            <label htmlFor="name">Enter Product Name</label>
            <input type="text" id="name" name="name" className={inputStr} />
          </div>
          <div className={divStr}>
            <label htmlFor="brandName">Enter Brand Name</label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="category">Select Category</label>
            <select name="category" id="category" className={inputStr}>
              {/* TODO: Add Options Here */}
              <option value=""></option>
            </select>
          </div>
          <div className={divStr}>
            <label htmlFor="image">Upload Image</label>
            <input type="file" id="image" name="image" className={inputStr} />
          </div>
          <div className={divStr}>
            <label htmlFor="price">Enter Price</label>
            <input
              type="number"
              id="price"
              name="price"
              min={0}
              step={1}
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="location">
              Select Location <i className="text-gray-600">(of product)</i>
            </label>
            <select name="location" id="location" className={inputStr}>
              {/* TODO : Add option of locations here */}
            </select>
          </div>
          <div className={divStr}>
            <label htmlFor="address">Enter Address</label>
            <input
              type="text"
              id="address"
              name="address"
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="quantity">Quantity Available</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min={0}
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="contactDetails">Enter Contact Details</label>
            <input
              type="text"
              id="contactDetails"
              name="contactDetails"
              className={inputStr}
            />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-x-4 items-center">
            <label htmlFor="forRent">For Rent</label>
            <input
              type="checkbox"
              id="forRent"
              name="forRent"
              className="h-5"
            />
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-x-4 items-center">
            <label htmlFor="forSale">For Sale</label>
            <input
              type="checkbox"
              id="forSale"
              name="forSale"
              className="h-5"
            />
          </div>
          <div className="flex justify-end ">
            <button className="bg-[#d36938] px-2 py-1 text-white rounded my-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
