import { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { UserContext } from "@/contexts/UserContext";

const AdminNavbar = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const spliPath = pathname.split("/")[3];
  const { theme, setTheme } = useContext(UserContext);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openSettingMenu, setOpenSettingMenu] = useState(false);
  const [opening, setOpening] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center sm:justify-between justify-end p-4 border-b dark:border-slate-800">
      <div className={`${openMobileMenu ? "right-4 opacity-100" : "translate-x-full opacity-0"} sm:translate-x-0 sm:opacity-100 transition-all flex items-center justify-between sm:gap-2 sm:flex-row flex-col sm:static absolute gap-5 sm:w-fit w-[70%] sm:rounded-none rounded-md sm:py-0 py-10 sm:top-0 top-full sm:bg-transparent sm:dark:bg-transparent sm:backdrop-blur-0 sm:shadow-none backdrop-blur-md dark:bg-white/30 shadow-md z-50`}>
        <Link to="painel" className={`text-sm font-semibold transition-all hover:dark:text-white hover:text-slate-900 ${spliPath === undefined ? "dark:text-white text-slate-900" : "text-slate-400"}`}>Painel</Link>
        <Link to="destaques" className={`text-sm font-semibold transition-all hover:dark:text-white hover:text-slate-900 ${spliPath === "destaques" ? "dark:text-white text-slate-900" : "text-slate-400"}`}>Destaques</Link>
        <Link to="categorias" className={`text-sm font-semibold transition-all hover:dark:text-white hover:text-slate-900 ${spliPath === "categorias" ? "dark:text-white text-slate-900" : "text-slate-400"}`}>Categorias</Link>
        <Link to="produtos" className={`text-sm font-semibold transition-all hover:dark:text-white hover:text-slate-900 ${spliPath === "produtos" ? "dark:text-white text-slate-900" : "text-slate-400"}`}>Produtos</Link>
        <Link to="pedidos" className={`text-sm font-semibold transition-all hover:dark:text-white hover:text-slate-900 ${spliPath === "pedidos" ? "dark:text-white text-slate-900" : "text-slate-400"}`}>Pedidos</Link>
        <Link to="clientes" className={`text-sm font-semibold transition-all hover:dark:text-white hover:text-slate-900 ${spliPath === "clientes" ? "dark:text-white text-slate-900" : "text-slate-400"}`}>Clientes</Link>
        <Link to="mesas" className={`text-sm font-semibold transition-all hover:dark:text-white hover:text-slate-900 ${spliPath === "mesas" ? "dark:text-white text-slate-900" : "text-slate-400"}`}>Mesas</Link>
      </div>

      <div className={`${openSettingMenu ? "opacity-100 flex" : "hidden opacity-0"} absolute right-4 top-full transition-all ease-in items-center flex-col gap-4 px-4 py-5 rounded-md w-fit backdrop-blur-md dark:bg-white shadow-md z-50`}>
        <Link to="configuracoes" className="flex items-center gap-2 text-sm font-semibold transition-all hover:text-slate-900 text-slate-400"><i className="fas fa-cogs"></i>Configuração</Link>
        <Link to={`/${params.storeId}`} className="flex items-center gap-2 text-sm font-semibold transition-all hover:text-slate-900 text-slate-400"><i className="fas fa-store-alt"></i>Loja</Link>
        <Link to={`/${params.storeId}/admin`} className="flex items-center gap-2 text-sm font-semibold transition-all hover:text-red-800 text-red-500"><i className="fas fa-sign-out-alt"></i>Sair</Link>
      </div>

      <div className="flex items-center justify-between gap-2">
        <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="sm:hidden block text-sm font-semibold h-8 w-8 rounded-md text-slate-500 transition-all">
          {openMobileMenu ? (<i className="fas fa-times"></i>) : (<i className="fa fa-bars"></i>)}
        </button>
        <button type="button" onClick={() => setOpening(!opening)} className="relative flex items-center justify-between w-[50px] h-[26px] bg-slate-900 dark:bg-slate-600 rounded-full p-2 transition-all ease-in-out">
          <i className="fa fa-check text-green-500"></i>
          <i className="fa fa-close text-red-500"></i>
          <span className={`${opening && "translate-x-6"} absolute top-[2px] left-[2px] w-[22px] h-[22px] bg-gray-200 rounded-full transition-all ease-linear`}></span>
        </button>
        <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="relative flex items-center justify-between w-[50px] h-[26px] bg-slate-900 dark:bg-slate-600 rounded-full p-2 transition-all ease-in-out">
          <i className="fas fa-moon text-gray-200"></i>
          <i className="fas fa-sun text-yellow-500"></i>
          <span className={`${theme === "dark" && "translate-x-6"} absolute top-[2px] left-[2px] w-[22px] h-[22px] bg-gray-200 rounded-full transition-all ease-linear`}></span>
        </button>
        <button onClick={() => setOpenSettingMenu(!openSettingMenu)} className="flex items-center justify-center text-sm font-semibold h-8 w-8 rounded-full bg-slate-900 dark:bg-slate-600 text-white transition-all">
          <i className="fa fa-user"></i>
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
