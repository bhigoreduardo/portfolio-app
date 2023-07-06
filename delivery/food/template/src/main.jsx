import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/js/all.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { UserProvider } from "@/contexts/UserContext.jsx";
import { ProductProvider } from "@/contexts/ProductContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <ToastContainer
          position="top-right"
          // autoClose={250}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
        <App />
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);
