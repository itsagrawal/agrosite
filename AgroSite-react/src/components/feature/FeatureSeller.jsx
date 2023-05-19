import FarmerSeller from "../../assets/farmer-seller.svg";
import { useNavigate } from "react-router-dom";

export default function FeatureSeller() {
  const navigate = useNavigate();
  return (
    <div className="static flex max-w-4xl object-contain min-h-60 mx-auto flex-col md:flex-row gap-y-4 px-4 py-10">
      <img src={FarmerSeller} alt="" className="h-60" />
      <div className="flex-auto min-w-[50px]"></div>
      <div className="flex flex-col mx-4 md:mx-0 text-center md:text-right md:text-6xl text-4xl font-semibold ">
        Be the smart <span className="text-[#d36938]">Farmer,</span> Seller.
        <div className="flex-auto h-auto"></div>
        <button
          className="text-base bg-[#d36938] px-2 py-1 rounded md:self-end mt-4 self-center outline-none"
          onClick={(e) => {
            navigate("/seller/register");
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
