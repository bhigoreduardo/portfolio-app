import { products } from "../../utils/data";

const ThirdRow = () => {
  return (
    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
        <div className="relative flex flex-col min-w-0 break-words bg-white border-0 border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl dark:bg-gray-950 border-black-125 rounded-2xl bg-clip-border">
          <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <div className="flex flex-wrap -mx-3">
              <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                <h6 className="mb-0 dark:text-white">Últimos produtos</h6>
              </div>
              <div className="flex-none w-1/2 max-w-full px-3 text-right">
                <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">Vê todas</button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 dark:border-white/40">
              <tbody>
                {
                  products?.length > 0 &&
                    products.map((item, i) => (
                      <tr key={i}>
                        <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent w-3/10 whitespace-nowrap dark:border-white/40`}>
                          <div className="flex items-center gap-1 px-2 py-1">
                            <div className="w-1/4">
                              <img src={item.thumbnail} alt={item.title} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" />
                            </div>
                            <div className="w-3/4">
                              <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{item.sku}</p>
                              <h6 className="mb-0 text-sm leading-normal dark:text-white truncate">{item.title}</h6>
                            </div>
                          </div>
                        </td>
                        <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Quantidade:</p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">20 unids</h6>
                          </div>
                        </td>
                        <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                          <div className="text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Valor:</p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">R$230,90</h6>
                          </div>
                        </td>
                        <td className={`${i === products.length - 1 ? "border-0" : "border-b"} p-2 text-sm leading-normal align-middle bg-transparent whitespace-nowrap dark:border-white/40`}>
                          <div className="flex-1 text-center">
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">Preço:</p>
                            <h6 className="mb-0 text-sm leading-normal dark:text-white">R$143,90</h6>
                          </div>
                        </td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
        <div className="border-black/12.5 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
          <div className="p-4 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <div className="flex flex-wrap -mx-3">
              <div className="flex items-center flex-none w-1/2 max-w-full px-3">
                <h6 className="mb-0 dark:text-white">Mais antigos</h6>
              </div>
              <div className="flex-none w-1/2 max-w-full px-3 text-right">
                <button className="inline-block px-8 py-2 mb-0 text-xs font-bold leading-normal text-center text-blue-500 align-middle transition-all ease-in bg-transparent border border-blue-500 border-solid rounded-lg shadow-none cursor-pointer bg-150 active:opacity-85 hover:-translate-y-px tracking-tight-rem bg-x-25 hover:opacity-75">Vê todas</button>
              </div>
            </div>
          </div>
          <div className="flex-auto p-4">
            <ul className="flex flex-row justify-between flex-wrap pl-0 mb-0 rounded-lg">
              {
                products?.length > 0 &&
                  products.map((item, i) => (
                    <li key={i} className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit w-1/2">
                      <div className="flex items-center w-4/5">
                        <div className="w-1/4">
                          <img src={item.thumbnail} alt={item.title} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" />
                        </div>
                        <div className="flex flex-col w-3/4">
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-60">{item.sku}</p>
                          <h6 className="mb-1 text-sm leading-normal text-slate-700 dark:text-white truncate">{item.title}</h6>
                          <span className="text-xs leading-tight dark:text-white/80">250 unids, <span className="font-semibold">R$34,60</span></span>
                        </div>
                      </div>
                      <div className="flex w-1/5">
                        <button className="group ease-in leading-pro text-xs rounded-3.5xl p-1.2 h-6.5 w-6.5 mx-0 my-auto inline-block cursor-pointer border-0 bg-transparent text-center align-middle font-bold text-slate-700 shadow-none transition-all dark:text-white"><i className="ni ease-bounce text-2xs group-hover:translate-x-1.25 fa fa-arrow-right transition-all duration-200" aria-hidden="true"></i></button>
                      </div>
                    </li>
                  ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdRow;
