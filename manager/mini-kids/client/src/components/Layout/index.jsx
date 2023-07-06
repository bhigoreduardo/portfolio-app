/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { UserContext } from "../../contexts/UserContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import Sidebar from "../Navigation/Sidebar";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Settings from "../Settings";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { themeSidebar } = useContext(ThemeContext);

  useEffect(() => {
    if (!user) navigate("/");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
  <section className="m-0 font-sans text-base antialiased font-normal min-h-screen h-full dark:bg-slate-900 bg-gray-50 leading-default text-slate-500">
    <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
    <div className={`${themeSidebar}`}>
      <Sidebar />
    </div>

    <main className="relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
      <Navbar />
      <Settings />

      <div className="w-full px-6 py-6 mx-auto">
        {children}
        <Footer />
      </div>
    </main>
    
  </section>
  );
};

export default Layout;
