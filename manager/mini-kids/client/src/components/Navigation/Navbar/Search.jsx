import { useState } from "react";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="flex items-center md:ml-auto md:pr-4">
      <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
        <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
          <i className="fas fa-search"></i>
        </span>
        <input onChange={() => setShowSearch(true)} type="text" className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow" placeholder="Nome, SKU, Código..." />
        <ul className={`${showSearch ? "opacity-100" : "opacity-0"} text-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease lg:shadow-3xl duration-250 min-w-72 before:sm:right-8 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent dark:shadow-dark-xl dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer`}>
          {/* <!-- add show className on dropdown open js --> */}
          {
            Array.from({length: 4}).map((_, i) => (
            <li key={i} className="relative mb-2">
              <a className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="/">
                <div className="flex py-1">
                  <div className="my-auto">
                    <img src="/img/shirt.jpg" className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl" />
                  </div>
                  <div className="flex justify-between items-center gap-2 flex-wrap">
                    <div>
                      <h6 className="text-sm font-normal leading-normal dark:text-white">Camisa</h6>
                      <span className="font-semibold">R$120,00</span>
                    </div>

                    <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-white/80">
                      <i className="mr-1 fas fa-shopping-cart"></i>
                      20 unids
                    </p>
                  </div>
                </div>
              </a>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Search;
