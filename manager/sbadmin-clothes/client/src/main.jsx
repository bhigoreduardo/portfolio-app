import React from "react";
import ReactDOM from "react-dom/client";

import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./assets/vendor/fontawesome-free/css/all.min.css";
import "./assets/scss/sb-admin-2.scss";
import "./assets/vendor/jquery/jquery.min.js";
import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/jquery-easing/jquery.easing.min.js";
import "./assets/js/sb-admin-2.min.js";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
