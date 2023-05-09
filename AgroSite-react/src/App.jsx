import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useAppContext } from "./firebase/ApplicationContext";
import FullPageLoader from "./components/Loader/FullPageLoader";
import FoF from "./pages/404";

export default function App() {
  const { loading } = useAppContext();
  return (
    <>
      {loading ? (
        <FullPageLoader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<FoF />} />
        </Routes>
      )}
    </>
  );
}
