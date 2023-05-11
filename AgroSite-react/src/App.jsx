import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Seller from "./pages/Seller";
import { useAppContext } from "./firebase/ApplicationContext";
import FullPageLoader from "./components/Loader/FullPageLoader";
import FoF from "./pages/404";
import SignInModal from "./components/modals/SignInModal";

export default function App() {
  const { loading, user } = useAppContext();
  return (
    <>
      {loading ? (
        <FullPageLoader />
      ) : (
        <div className="select-none static">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="store" element={<Store />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* <Route path="/test" element={<Modal isOpen={true} />} /> */}
            <Route path="seller/*" element={<Seller />}></Route>
            <Route path="/*" element={<FoF />} />
          </Routes>
          {user && !loading ? <></> : <SignInModal />}
        </div>
      )}
    </>
  );
}
