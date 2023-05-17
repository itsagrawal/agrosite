import { useEffect, useState, useRef } from "react";
import { getDoc } from "firebase/firestore";
import FarmerRegister from "../../assets/farmerRegister.svg";
import { LocationDoc, sellerDoc } from "../../firebase/dbReferences";
import { useAppContext } from "../../firebase/ApplicationContext";
import { sellerReference } from "../../firebase/storageReferences";
import { getDownloadURL, uploadBytes } from "firebase/storage";
import { setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import FullPageLoader from "../Loader/FullPageLoader";
import { v4 } from "uuid";

export default function SellerRegister() {
  const { loading, setLoading, user } = useAppContext();
  const formRef = useRef();
  const navigate = useNavigate();
  const [locs, setLocs] = useState([]);
  const sellerUID = String(user.uid) + "seller";
  useEffect(() => {
    setLoading(true);
    (async () => {
      const v = (await getDoc(LocationDoc)).data();
      // const v = { locations: ["abc", "bcd"] }; // for development only
      v.locations.sort();
      setLocs(v.locations);

      if ((await getDoc(sellerDoc(sellerUID))).exists()) {
        navigate("/seller");
      }
    })();
    setLoading(false);
  }, []);

  async function submitHandle() {
    // Create data object from form to JS object.
    const v = formRef.current;
    let imageURL = "";
    const supportingFile = v.SellerImage.files[0];
    await uploadBytes(sellerReference(sellerUID), supportingFile);
    await getDownloadURL(sellerReference(sellerUID)).then((url) => {
      imageURL = url;
    });
    const obj = {
      sellerName: v.sellerName.value,
      sellerLocation: v.sellerLocation.value,
      GSTName: v.GSTName.value,
      sid: sellerUID,
      GSTNumber: v.GSTNumber.value,
      sellerImage: imageURL,
    };
    await setDoc(sellerDoc(sellerUID), obj);
    console.log(obj);
    // Upload seller data to firestore.
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    await submitHandle();
    navigate("/seller");
  };

  return (
    <>
      {loading ? (
        <FullPageLoader />
      ) : (
        <form
          className="max-w-4xl mx-auto mt-4 px-2"
          onSubmit={submitHandler}
          ref={formRef}
        >
          <h1 className="text-[#d36938] font-bold text-3xl">
            Seller Registration
          </h1>
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
                  {locs.map((v, idx) => {
                    return (
                      <option value={v} key={v4()}>
                        {v}
                      </option>
                    );
                  })}
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
                  Attach a photo of your business workplace*
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
      )}
    </>
  );
}
