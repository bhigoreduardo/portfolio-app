import { Outlet, useLocation } from "react-router-dom";

import AdminNavbar from "@/components/navigation/admin/navbar";
import Footer from "@/components/navigation/Footer";

const Admin = () => {
  const { pathname } = useLocation();
  const pathnameSplit = pathname.split("/");

  return (
    <section className="m-0 font-sans text-base antialiased font-normal min-h-screen h-full dark:bg-slate-900 bg-gray-50 leading-default text-slate-500">
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>
      <main className="relative h-full transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        {pathnameSplit[pathnameSplit.length - 1] !== "admin"
          &&  pathnameSplit[pathnameSplit.length - 1] !=="recuperar-senha"
          && <AdminNavbar />
        }

        <div className="w-full px-6 py-6 mx-auto">
          <Outlet />
          <Footer />
        </div>
      </main>
    </section>
  );
};

export default Admin;
