/* eslint-disable react/prop-types */
import { useContext } from "react";
import ReactStars from "react-rating-stars-component";

import { currencyPrice } from "@/utils/transform";
import { ProductContext } from "@/contexts/ProductContext";

const CardProduct = ({ product, modal }) => {
  const { setOpen, setProduct} = useContext(ProductContext);

  return (
    <div onClick={() => {setProduct(product), setOpen(true)}} className="group flex items-center cursor-pointer hover:shadow-md dark:hover:shadow-slate-800 bg-gray-100 dark:bg-slate-800 rounded-lg">
      <div className="flex items-center w-full gap-2 p-2 overflow-hidden">
        <img src={product?.image} className="bg-white h-20 w-20 rounded-xl" />
        <div className="flex flex-col w-[calc(100%-32px)] overflow-hidden">
          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white"><i className="mr-1 fas fa-shopping-cart"></i>{product?.name}</p>
          <span className="text-xs leading-tight truncate dark:text-white">
            {product?.promotion ? (
              <>
              <span className="font-semibold mr-3">{currencyPrice.format(product?.promotion)}</span>
              <span className="font-semibold line-through dark:text-gray-400">{currencyPrice.format(product?.price)}</span>
              </>
            ) : (
              <span className="font-semibold">{currencyPrice.format(product?.price)}</span>
            )}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-xs leading-tight font-semibold dark:text-white">{product?.reviewsAvg}</span>
            <ReactStars count={5} size={16} value={product?.reviewsAvg} edit={false} activeColor="#ffd700" />
          </div>
          {!modal && <p className="mb-1 text-sm leading-normal text-slate-900 dark:text-gray-300 uppercase truncate">{product?.description}</p>}
        </div>
        <i className="fa fa-arrow-right text-slate-700 dark:text-gray-200 relative text-sm group-hover:translate-x-1 transition-all duration-200 w-3 h-3"></i>
      </div>
    </div>
  );
};

export default CardProduct;
