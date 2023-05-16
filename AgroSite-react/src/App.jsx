import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
const Home = lazy(() => import("./pages/Home"));
const Store = lazy(() => import("./pages/Store"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Seller = lazy(() => import("./pages/Seller"));
import { useAppContext } from "./firebase/ApplicationContext";
import FullPageLoader from "./components/Loader/FullPageLoader";
const FoF = lazy(() => import("./pages/404"));
import SignInModal from "./components/modals/SignInModal";

export default function App() {
  const { loading, user } = useAppContext();
  // Sign In modal
  const [showSignInModal, setSignModal] = useState(false);
  useEffect(() => {
    new Promise((res) => {
      setTimeout(() => {
        if (user === false) setSignModal(true);
        else setSignModal(false);
        res();
      }, 200);
    });
  }, [user]);

  return (
    <>
      {loading || user === undefined ? (
        <FullPageLoader />
      ) : (
        <div className="select-none static">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="store"
              element={
                <Suspense fallback={<FullPageLoader />}>
                  <Store />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<FullPageLoader />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<FullPageLoader />}>
                  <Contact />
                </Suspense>
              }
            />
            {/* <Route path="/test" element={<Modal isOpen={true} />} /> */}
            <Route
              path="seller/*"
              element={
                <Suspense fallback={<FullPageLoader />}>
                  <Seller />
                </Suspense>
              }
            ></Route>
            <Route
              path="/*"
              element={
                <Suspense>
                  <FoF />
                </Suspense>
              }
            />
          </Routes>
          <SignInModal isOpen={showSignInModal} setIsOpen={setSignModal} />
        </div>
      )}
    </>
  );
}
