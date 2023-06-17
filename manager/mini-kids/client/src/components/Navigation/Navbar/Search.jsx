import { useState } from "react";
import { products } from "../../../utils/data";
import ProductDetailCard from "../../Cards/ProductDetail";

const Search = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="flex items-center md:ml-auto md:pr-4">
      <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
        <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
          <i className="fas fa-search"></i>
        </span>
        <input onChange={() => setShowSearch(true)} type="text" className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow" placeholder="Nome, SKU, Código..." />
        <ul className={`${showSearch ? "opacity-100" : "opacity-0"} max-h-100 overflow-y-auto top-full lg:mt-2 lg:block lg:absolute lg:right-0 lg:left-auto lg:shadow-3xl lg:min-w-90 min-w-60 w-full absolute left-0 right-0 z-50 list-none rounded-lg dark:shadow-dark-xl dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4`}>
          {
            products?.length > 0 &&
              products.map((item, i) => (
                <ProductDetailCard key={i} {...item} />
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Search;
