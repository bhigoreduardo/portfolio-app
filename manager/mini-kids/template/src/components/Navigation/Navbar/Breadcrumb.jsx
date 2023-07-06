import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { ThemeContext } from "../../../contexts/ThemeContext";

const Breadcrumb = () => {
  const { pathname } = useLocation();

  const { fixedNav } =useContext(ThemeContext);

  return (
    <nav>
      <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
        <li className={`${fixedNav ? "dark:text-white" : "text-white"} text-sm leading-normal opacity-50`} href="/">Seção</li>
        <li className={`${fixedNav ? "dark:text-white dark:before:text-white" : "text-white before:text-white"} text-sm pl-2 capitalize leading-normal before:float-left before:pr-2 before:text-white before:content-['/']`} aria-current="page">
          Painel&nbsp;
        </li>
        {pathname !== "/painel" && (
          <li className={`${fixedNav ? "dark:text-white dark:before:text-white" : "text-white before:text-white"} text-sm pl-2 capitalize leading-normal before:float-left before:pr-2 before:text-white before:content-['/']`}>
            {pathname.substring(1).replaceAll("-", " ")}
          </li>
        )}
      </ol>
      <h6 className={`${fixedNav ? "dark:text-white" : "text-white"} mb-0 font-bold capitalize`}>
        {pathname === "/painel" ? "Painel" : pathname.substring(1).replaceAll("-", " ")}
      </h6>
    </nav>
  );
};

export default Breadcrumb;
