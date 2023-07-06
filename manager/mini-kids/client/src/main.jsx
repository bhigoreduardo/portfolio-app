import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <ToastContainer />
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
