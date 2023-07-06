import { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

const Settings = () => {
  const {
    isSettings, setIsSettings,
    setColorSidebar,
    themeSidebar, setThemeSidebar,
    fixedNav, setFixedNav,
    theme, setTheme
  } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setIsSettings(true)} className="fixed px-4 py-2 text-xl bg-white shadow-lg cursor-pointer bottom-8 right-8 z-990 rounded-circle text-slate-700">
        <i className="py-2 pointer-events-none fa fa-cog"></i>
      </button>
      <div className={`${isSettings ? "right-0" : "-right-90"} z-sticky backdrop-blur-2xl backdrop-saturate-200 dark:bg-slate-850/80 shadow-3xl w-90 ease fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-white/80 bg-clip-border px-2.5 duration-200`}>
        <div className="px-6 pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <div className="float-left">
            <h5 className="mt-4 mb-0 dark:text-white">Configurações do tema</h5>
            <p className="dark:text-white dark:opacity-80">Altere as cores e estilo do painel.</p>
          </div>
          <div className="float-right mt-6">
            <button onClick={() => setIsSettings(false)} className="inline-block p-0 mb-4 text-sm font-bold leading-normal text-center uppercase align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer hover:-translate-y-px tracking-tight-rem bg-150 bg-x-25 active:opacity-85 dark:text-white text-slate-700">
              <i className="fa fa-times"></i>
            </button>
          </div>
          {/* <!-- End Toggle Button --> */}
        </div>
        <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
        <div className="flex-auto p-6 pt-0 overflow-auto sm:pt-4">
          {/* <!-- Sidebar Backgrounds --> */}
          <div>
            <h6 className="mb-0 dark:text-white">Cores da barra lateral</h6>
          </div>
          <div className="my-2 text-left">
            <span onClick={() => setColorSidebar("blue")} className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-500 to-violet-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-slate-700 text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="blue"></span>
            <span onClick={() => setColorSidebar("gray")} className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="gray"></span>
            <span onClick={() => setColorSidebar("cyan")} className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-blue-700 to-cyan-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="cyan"></span>
            <span onClick={() => setColorSidebar("emerald")} className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-emerald-500 to-teal-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="emerald"></span>
            <span onClick={() => setColorSidebar("orange")} className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-orange-500 to-yellow-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="orange"></span>
            <span onClick={() => setColorSidebar("red")} className="py-2.2 text-xs rounded-circle h-5.6 mr-1.25 w-5.6 ease-in-out bg-gradient-to-tl from-red-600 to-orange-600 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700" data-color="red"></span>
          </div>
          {/* <!-- Sidenav Type --> */}
          <div className="mt-4">
            <h6 className="mb-0 dark:text-white">Estilo da barra lateral</h6>
            <p className="text-sm leading-normal dark:text-white dark:opacity-80">Escolha entre os diferentes estilos.</p>
          </div>
          <div className="flex">
            <button onClick={() => setThemeSidebar("light")} className={`${themeSidebar === "light" ? "bg-transparent text-white bg-blue-500 border-transparent bg-gradient-to-tl from-blue-500 to-violet-500" : "bg-white text-blue-500 border-blue-500 bg-none"} inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center capitalize align-middle transition-all border border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 hover:border-blue-500`}>Claro</button>
            <button onClick={() => setThemeSidebar("dark")} className={`${themeSidebar === "dark" ? "bg-transparent text-white bg-blue-500 border-transparent bg-gradient-to-tl from-blue-500 to-violet-500" : "bg-white text-blue-500 border-blue-500 bg-none"} ml-2 inline-block w-full px-4 py-2.5 mb-2 font-bold leading-normal text-center capitalize align-middle transition-all border border-solid rounded-lg cursor-pointer text-sm xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-blue-500 xl-max:to-violet-500 xl-max:text-white xl-max:border-0 hover:-translate-y-px dark:cursor-not-allowed dark:opacity-65 dark:pointer-events-none dark:bg-gradient-to-tl dark:from-blue-500 dark:to-violet-500 dark:text-white dark:border-0 hover:shadow-xs active:opacity-85 ease-in tracking-tight-rem shadow-md bg-150 bg-x-25 hover:border-blue-500`}>Escuro</button>
          </div>
          <p className="block mt-2 text-sm leading-normal dark:text-white dark:opacity-80 xl:hidden">Você também pode modificar o modo de visualização.</p>
          {/* <!-- Navbar Fixed --> */}
          <div className="flex my-4">
            <h6 className="mb-0 dark:text-white">Barra do topo fixa</h6>
            <div className="block pl-0 ml-auto min-h-6">
              <input onChange={() => setFixedNav(!fixedNav)} checked={fixedNav} className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox" />
            </div>
          </div>
          <hr className="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent " />
          <div className="flex mt-2 mb-12">
            <h6 className="mb-0 dark:text-white">Claro / Escuro</h6>
            <div className="block pl-0 ml-auto min-h-6">
              <input onChange={() => setTheme(theme === "light" ? "dark" : "light")} checked={theme === "dark"} className="rounded-10 duration-250 ease-in-out after:rounded-circle after:shadow-2xl after:duration-250 checked:after:translate-x-5.3 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-blue-500/95 checked:bg-blue-500/95 checked:bg-none checked:bg-right" type="checkbox"  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
