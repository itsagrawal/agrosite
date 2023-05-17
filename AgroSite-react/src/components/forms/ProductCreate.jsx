import { useEffect, useState } from "react";
import ProductCreateSVG from "../../assets/productCreate.svg";
import { getDoc, setDoc } from "firebase/firestore";
import {
  CategoryDoc,
  LocationDoc,
  productDoc,
  sellerDoc,
} from "../../firebase/dbReferences";
import { useAppContext } from "../../firebase/ApplicationContext";
import { useNavigate } from "react-router-dom";
import { v4 as UUID, v4 } from "uuid";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { prodcutsReference } from "../../firebase/storageReferences";

export default function ProductCreate() {
  const [cates, setCates] = useState({});
  const [selectedCate, setSelectedCate] = useState("Modern Harverster");
  const [locs, setLocs] = useState([]);
  const { user, loading, setLoading } = useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await getDoc(CategoryDoc).then((v) => {
        setCates(v.data());
      });
      await getDoc(LocationDoc).then((v) => {
        let x = v.data().locations;
        x.sort();
        setLocs(["Undefined", ...x]);
      });
    })();
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    // Get Seller Details
    if (user === false) {
      alert("Please Sign In");
    } else {
      let sellerDet;
      const sellerdoc = sellerDoc(user.uid + "seller");
      await getDoc(sellerdoc).then((v) => {
        if (v.exists() === false) {
          alert("First Register as Seller");
          setTimeout(() => {
            navigate("/seller/register");
          }, 1000);
        } else {
          sellerDet = v.data();
        }
      });

      // HTML object
      const v = e.target;
      // Generate a UUID
      const pid = UUID();
      let imageURL = "";
      // Push Image for that UUID
      await uploadBytes(prodcutsReference(pid), v.image.files[0]);
      imageURL = await getDownloadURL(prodcutsReference(pid));
      // create object map of given data
      const obj = {
        image: imageURL,
        isVerified: false,
        address: v.address.value,
        aggregateRating: 0,
        brandName: v.brandName.value,
        category: v.category.value,
        contactDetails: v.contactDetails.value,
        description: v.description.value,
        forRent: v.forRent.checked,
        forSale: v.forSale.checked,
        quantity: Number(v.quantity.value),
        location: v.location.value,
        price: Number(v.price.value),
        name: v.name.value,
        sellerName: sellerDet.sellerName,
        sid: sellerDet.sid,
        timePeriod:
          v.timePeriod.value != undefined ? Number(v.timePeriod.value) : 0,
      };
      // Push Data for that UUID
      await setDoc(productDoc(pid), obj);
      // navigate to another route
      navigate("/seller");
    }
    setLoading(false);
  }

  const divStr = "grid md:grid-cols-2 gap-y-2";
  const inputStr = "rounded px-2 py-1";
  return (
    <div className="md:max-w-4xl mx-2 md:mx-auto max-w-md mt-4">
      <h1 className="text-[#d36938] font-bold text-2xl mb-4">Create Product</h1>
      <div className="grid md:grid-cols-4 gap-x-4 px-4 gap-y-5">
        <div className="min-h-[200px] w-full flex justify-center col-span-4 md:col-span-1">
          <img src={ProductCreateSVG} alt="" className="min-h-full " />
        </div>
        <form
          onSubmit={submitHandler}
          className="col-span-3 flex flex-col gap-y-2 px-4 mt-4"
        >
          <div className="text-xs font-light text-gray-600 italic ">
            All fields are requried <span className="text-red-400">*</span>
          </div>
          <div className={divStr}>
            <label htmlFor="name">Enter Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={inputStr}
              required
            />
          </div>
          <div className={divStr}>
            <label htmlFor="brandName">Enter Brand Name</label>
            <input
              required
              type="text"
              id="brandName"
              name="brandName"
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="category">Select Category</label>
            <select
              required
              name="category"
              id="category"
              className={inputStr}
              onChange={(e) => {
                setSelectedCate(e.target.value);
              }}
            >
              {/* TODO: Add Options Here */}
              {["Undefined", ...Object.keys(cates)].map((v, idx) => {
                return (
                  <option value={v} key={v4()}>
                    {v}
                  </option>
                );
              })}
            </select>
          </div>

          <div className={divStr}>
            <label htmlFor="description">Enter Description</label>
            <textarea
              placeholder={`${
                cates[selectedCate]
                  ? "Consider the following points: \n" +
                    cates[selectedCate]["questions"].join("\n")
                  : ""
              }`}
              name="description"
              id="description"
              className={inputStr + " h-40"}
            ></textarea>
          </div>

          <div className={divStr}>
            <label htmlFor="image">Upload Image</label>
            <input
              required
              type="file"
              id="image"
              name="image"
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="price">Enter Price</label>
            <input
              required
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
            <select required name="location" id="location" className={inputStr}>
              {/* TODO : Add option of locations here */}
              {locs.map((v, idx) => {
                return (
                  <option value={v} key={v4()}>
                    {v}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={divStr}>
            <label htmlFor="address">Enter Address</label>
            <input
              type="text"
              required
              id="address"
              name="address"
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="quantity">Quantity Available</label>
            <input
              type="number"
              required
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
              required
              id="contactDetails"
              name="contactDetails"
              className={inputStr}
            />
          </div>
          <div className={divStr}>
            <label htmlFor="timePeriod">Enter Time Period (in months)</label>
            <input
              type="text"
              id="timePeriod"
              name="timePeriod"
              className={inputStr}
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 items-center">
            <label htmlFor="forRent">For Rent</label>
            <input
              type="checkbox"
              id="forRent"
              name="forRent"
              className="h-5"
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-4 items-center">
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
