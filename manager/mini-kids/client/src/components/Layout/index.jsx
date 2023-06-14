/* eslint-disable react/prop-types */
import Sidebar from "../Navigation/Sidebar";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";

const Layout = ({ children }) => {
  return (
  <section className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
    <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
    <Sidebar />

    <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
      <Navbar />

      <div className="w-full px-6 py-6 mx-auto">
        {children}

        <Footer />
      </div>
    </main>
  </section>
  );
};

export default Layout;
