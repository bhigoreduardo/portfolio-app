/* eslint-disable react/prop-types */
import { currencyPrice } from "../../utils/calculate";

const ProductsTable = ({ products }) => {
  return (
    <>
    {
      !products?.length > 0
        ? (
          <h6 className="dark:text-white text-center mb-6">Nenhum produto encontrado</h6>
        ) : (
          <table className="items-center w-full align-top border-collapse border-gray-200 dark:border-white/40">
            <tbody>
              {
                products.map((item, i) => (
                  <tr key={i}>
                    <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent w-3/10 whitespace-nowrap dark:border-white/40`}>
                      <div className="flex items-center gap-1 px-2 py-1">
                        <div className="w-1/4">
                          <img src={item.cover ? `${import.meta.env.VITE_SERVER_URL}/images/${item.cover}` : "/img/noproduct.png"} alt={item.name} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" />
                        </div>
                        <div className="w-3/4">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{item.sku}</p>
                          <h6 className="mb-0 text-sm leading-normal dark:text-white truncate">{item.name}</h6>
                        </div>
                      </div>
                    </td>
                    <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                      <div className="text-center">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Quantidade estoque:</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.quantity} unids</h6>
                      </div>
                    </td>
                    <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                      <div className="text-center">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Estoque parado:</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">{currencyPrice.format(item.coastAmount)}</h6>
                      </div>
                    </td>
                    <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 text-sm leading-normal align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                      <div className="flex-1 text-center">
                        <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Estoque vendido:</p>
                        <h6 className="mb-0 text-sm leading-normal dark:text-white">{currencyPrice.format(item.salesAmount)}</h6>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )}
    </>
  );
};

export default ProductsTable;
