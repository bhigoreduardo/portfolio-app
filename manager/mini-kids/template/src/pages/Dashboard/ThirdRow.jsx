import { products } from "../../utils/data";
import CardTitle from "./CardTitle";
import ProductsTable from "./ProductsTable";
import ProductDetailCard from "../../components/Cards/ProductDetail";

const ThirdRow = () => {
  return (
    <div className="flex flex-wrap gap-4 lg:flex-nowrap mb-4">
      <div className="w-full min-h-full max-w-full px-3 py-4 lg:w-7/12 flex-col border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative border-solid bg-clip-border rounded-2xl bg-white">
        <CardTitle title="Últimos produtos" />

        <div className="overflow-auto max-h-[360px]">
          <ProductsTable products={products} />
        </div>
      </div>

      <div className="w-full min-h-full max-w-full px-3 py-4 lg:w-5/12 flex-col border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative border-solid bg-clip-border rounded-2xl bg-white">
        <CardTitle title="Mais antigos" />

          <ul className="flex flex-row justify-between flex-wrap pl-0 mb-0 rounded-lg max-h-[360px] overflow-y-auto">
            {
              products?.length > 0 &&
                products.map((item, i) => (
                  <ProductDetailCard key={i} {...item} width="sm:w-1/2 w-full" />
                ))
            }
          </ul>
      </div>
    </div>
  );
};

export default ThirdRow;
