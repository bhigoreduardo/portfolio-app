import { useContext } from "react";

import { UserContext } from "../../../contexts/UserContext";
import { ThemeContext } from "../../../contexts/ThemeContext";
import Breadcrumb from "./Breadcrumb";
// import Notifications from "./Notifications";
import Search from "./Search";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const { fixedNav, setIsMobileSidebar } = useContext(ThemeContext);

  return (
    <nav className={`relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all ease-in shadow-none duration-250 rounded-2xl lg:flex-nowrap lg:justify-start ${fixedNav && "sticky top-[1%] backdrop-saturate-200 backdrop-blur-2xl dark:bg-slate-850/80 dark:shadow-dark-blur bg-[hsla(0,0%,100%,0.8)] shadow-blur z-110"}`}>
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
          <Breadcrumb />

          <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <Search />

            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
              <li className="flex items-center">
                <a href="/perfil" className={`${fixedNav ? "dark:text-white" : "text-white"} block px-0 py-2 text-sm font-semibold  transition-all ease-nav-brand`}>
                  <i className="fa fa-user sm:mr-1"></i>
                  <span className="hidden sm:inline">Perfil</span>
                </a>
              </li>
              <li className="flex items-center pl-4 xl:hidden" onClick={() => setIsMobileSidebar(true)}>
                <button className="block p-0 text-sm text-white transition-all ease-nav-brand">
                  <div className="w-4.5 overflow-hidden">
                    <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                    <i className="ease mb-0.75 relative block h-0.5 rounded-sm bg-white transition-all"></i>
                    <i className="ease relative block h-0.5 rounded-sm bg-white transition-all"></i>
                  </div>
                </button>
              </li>

              {
                user.profile === 2 && (
                  <li className="flex items-center px-4">
                    <a href="/configuracoes" className={`${fixedNav ? "dark:text-white" : "text-white"} p-0 text-sm transition-all ease-nav-brand`}>
                      <i className="cursor-pointer fa fa-cog"></i>
                    </a>
                  </li>
                )
              }

              {/* <Notifications /> */}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
