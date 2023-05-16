import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import FullPageLoader from "./components/Loader/FullPageLoader.jsx";
const ApplicationContext = lazy(() =>
  import("./firebase/ApplicationContext.jsx")
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={FullPageLoader}>
      <ApplicationContext>
        <Router>
          <App />
        </Router>
      </ApplicationContext>
    </Suspense>
  </React.StrictMode>
);
