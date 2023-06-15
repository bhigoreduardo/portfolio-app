/* eslint-disable react/prop-types */
import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import Sidebar from "../Navigation/Sidebar";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Settings from "../Settings";

const Layout = ({ children }) => {
  const { themeSidebar } = useContext(ThemeContext);

  return (
  <section className="m-0 font-sans text-base antialiased font-normal min-h-screen dark:bg-slate-900 bg-gray-50 leading-default text-slate-500">
    <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
    <div className={`${themeSidebar}`}>
      <Sidebar />
    </div>

    <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
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
