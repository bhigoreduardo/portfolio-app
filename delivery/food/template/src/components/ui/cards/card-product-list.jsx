/* eslint-disable react/prop-types */
import NoResults from "../no-results";
import CardProduct from "./card-product";

const CardProductList = ({ title, products }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-2xl text-slate-700 dark:text-white capitalize relative before:absolute before:content before:left-0 before:-bottom-2 before:w-32 before:h-1 before:bg-gradient-to-tr before:from-orange-400 before:to-orange-600 before:rounded-lg">{title}</h3>
      {products?.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products?.map((item, i) => (
          <CardProduct key={i} product={item} />
        ))}
      </div>
    </div>
  );
};

export default CardProductList;
