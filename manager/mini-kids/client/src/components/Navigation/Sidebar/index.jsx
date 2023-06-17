import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { ThemeContext } from "../../../contexts/ThemeContext";

const Sidebar = () => {
  const { pathname } = useLocation();
  const { colorSidebar, isMobileSidebar, setIsMobileSidebar } = useContext(ThemeContext);

  return (
    <aside className={`${isMobileSidebar ? "left-6" : "-translate-x-full"} fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0`}>
      <div className="h-19">
        <i onClick={() => setIsMobileSidebar(false)} className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"></i>
        <a  href="/painel" className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700">
          <img src="/img/logo.png" className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8" />
          <img src="/img/logo.png" className="hidden h-full max-w-full transition-all duration-200 dark:inline ease-nav-brand max-h-8" alt="Logo" />
          <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Mini Kids</span>
        </a>
      </div>

      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

      <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
        <ul className="flex flex-col pl-0 mb-0">
          <li className="mt-0.5 w-full">
            <a href="/painel" className={`${pathname === "/painel" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-blue-500 fa fa-home"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Painel</span>
            </a>
          </li>

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
              Cadastros
            </h6>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/clientes" className={`${pathname === "/clientes" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-orange-500 fas fa-user-tie"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Clientes</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/fornecedores" className={`${pathname === "/fornecedores" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-emerald-500 fas fa-user-tag"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Fornecedores</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/vendedores" className={`${pathname === "/vendedores" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-cyan-500 fas fa-user-friends"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Vendedores</span>
            </a>
          </li>

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
              Estoques
            </h6>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/marcas" className={`${pathname === "/marcas" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-red-600 fas fa-cubes"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Marcas</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/categorias" className={`${pathname === "/categorias" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-purple-600 fab fa-buffer"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Categorias</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/produtos" className={`${pathname === "/produtos" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-lime-600 fas fa-boxes"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Produtos</span>
            </a>
          </li>

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
              Financeiro
            </h6>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/vendas" className={`${pathname === "/vendas" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-orange-600 fas fa-shopping-cart"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Vendas</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/contas-pagar" className={`${pathname === "/contas-pagar" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-sky-600 fas fa-book"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Contas à pagar</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/contas-receber" className={`${pathname === "/contas-receber" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-violet-600 fas fa-hand-holding-usd"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Contas à receber</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/formas-pagamento" className={`${pathname === "/formas-pagamento" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-zinc-600 fas fa-credit-card"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Formas de pagamento</span>
            </a>
          </li>

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
              Relatórios
            </h6>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/relatorios-contas-pagar" className={`${pathname === "/relatorios-contas-pagar" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-rose-600 fas fa-book"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Contas à pagar</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/relatorios-contas-receber" className={`${pathname === "/relatorios-contas-receber" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-indigo-600 fas fa-hand-holding-usd"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Contas à receber</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/relatorios-vendas" className={`${pathname === "/relatorios-vendas" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-teal-600 fas fa-shopping-cart"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Vendas</span>
            </a>
          </li>

          <li className="w-full mt-4">
            <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
              Sistema
            </h6>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/perfil" className={`${pathname === "/perfil" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-slate-700 fa fa-user"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Perfil</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/usuarios" className={`${pathname === "/usuarios" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-red-600 fas fa-users"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Usuários</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/configuracoes" className={`${pathname === "/configuracoes" && `bg-${colorSidebar}-500/${colorSidebar === "blue" ? "13" : "30"}`} rounded-lg dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}>
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-stone-600 fas fa-cogs"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Configurações</span>
            </a>
          </li>

          <li className="mt-0.5 w-full">
            <a href="/" className=" dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors">
              <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className="relative top-0 text-sm leading-normal text-red-600 fas fa-sign-out-alt"></i>
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">Sair</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-4">
        {/* <!-- load phantom colors for card after: --> */}
        {/* <p className="invisible hidden text-gray-800 text-red-500 text-red-600 text-blue-500 bg-gray-500/30 bg-cyan-500/30 bg-emerald-500/30 bg-orange-500/30 bg-red-500/30 after:bg-gradient-to-tl after:from-zinc-800 after:to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 after:from-blue-700 after:to-cyan-500 after:from-orange-500 after:to-yellow-500 after:from-green-600 after:to-lime-400 after:from-red-600 after:to-orange-600 after:from-slate-600 after:to-slate-300 text-emerald-500 text-cyan-500 text-slate-400"></p> */}
        <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
          <img
            className="w-1/2 mx-auto"
            src="/img/docs.svg"
            alt="sidebar illustrations"
          />
          <div className="flex-auto w-full p-4 pt-0 text-center">
            <div className="transition-all duration-200 ease-nav-brand">
              <h6 className="mb-0 dark:text-white text-slate-700">
                Precisa de ajuda?
              </h6>
              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">
                Fale com o desenvolvedor
              </p>
            </div>
          </div>
        </div>
        <a href="/" className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px">
          Email
        </a>
        <a href="/" className="inline-block w-full px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md select-none bg-150 bg-x-25 hover:shadow-xs hover:-translate-y-px">
          WthasApp
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
