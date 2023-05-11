import { useAppContext } from "../../firebase/ApplicationContext";

export default function SellerNavbar() {
  const { user, signIn, signOutApp } = useAppContext();
  return (
    <nav className="static bg-white py-2 text-black">
      <div className="max-w-4xl min-w-max mx-auto flex">
        <div className="text-[#d36938] font-semibold text-xl">
          Agro<span className="text-black">Site</span>
        </div>
        <div className="flex-auto"></div>
        <div className="text-sm flex items-center">
          {user ? (
            <button
              className="bg-red-300 px-2 rounded py-1"
              onClick={() => {
                signOutApp();
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="bg-gray-300 px-2 rounded py-1"
              onClick={() => {
                signIn();
              }}
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
