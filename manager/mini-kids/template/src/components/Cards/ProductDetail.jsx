/* eslint-disable react/prop-types */
const ProductDetailCard = ({ thumbnail, title, sku, width }) => {
  return (
    <li className={`relative flex justify-between py-2 px-2 mb-2 border-0 rounded-t-lg rounded-xl text-inherit ${width}`}>
      <div className="flex items-center w-full">
        <div className="w-1/4">
          <img src={thumbnail} alt={title} className="bg-white h-9 w-9 rounded-xl" />
        </div>
        <div className="flex flex-col w-3/4">
          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{sku}</p>
          <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white truncate">{title}</h6>
          <span className="text-xs leading-tight dark:text-white/80 truncate"><i className="mr-1 fas fa-shopping-cart"></i>250 unids, <span className="font-semibold">R$34,60</span></span>
        </div>
      </div>
      <div className="flex w-1/7">
        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
      </div>
    </li>
  );
};

export default ProductDetailCard;
