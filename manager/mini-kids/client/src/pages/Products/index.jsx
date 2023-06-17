import { products, variates } from "../../utils/data";
import { currencyPrice, priceVariateAvg, stockAmount } from "../../utils/calculate";
import Layout from "../../components/Layout";
import TableSearch from "../../components/Tables/Search";
import TableButton from "../../components/Tables/Button";

const Dashboard = () => {
  return <Layout>
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex items-center justify-between p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6 className="dark:text-white">Lista de produtos</h6>
            <a href="/produtos/cadastro" title="Adicionar cliente" type="button" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white uppercase align-middle transition-all ease-in rounded-lg shadow-xs cursor-pointer bg-gradient-to-tl from-blue-500 to-violet-500 text-xs tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md">
              <i className="fas fa-boxes text-white-50"></i>&nbsp;Adicionar
            </a>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <TableSearch />

            {/* TABLE */}
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Identificação</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Gênero</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Classificação</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Fornecedor</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Estoques</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                </thead>
                <tbody>
                  {products?.length > 0 && (
                    products.map((item, i) => (
                      <tr key={i}>
                        <td className={`${i === products.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <div className="flex px-2 gap-1 py-1">
                            <div className="w-1/4">
                              <img src={item.thumbnail} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                            </div>
                            <div className="flex flex-col justify-center w-3/4">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.sku}</h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.title}</p>
                            </div>
                          </div>
                        </td>
                        <td className={`${i === products.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.brand}</p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.category}</p>
                        </td>
                        <td className={`${i === products.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.age} anos</p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.weight / 1000} (kg)</p>
                        </td>
                        <td className={`${i === products.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.supply?.name}</p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.supply?.mobile}</p>
                        </td>
                        <td className={`${i === products.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{stockAmount(item.id, variates)} unids</p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{currencyPrice.format(priceVariateAvg(item.id, variates))}</p>
                        </td>
                        <td className={`${i === products.length -1 ? "border-b-0" : "border-b"} p-2 text-center align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">{item.status ? "Ativo" : "Inativo"}</span>
                        </td>
                        <td className={`${i === products.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <a title="Editar" href={`/produtos/${item.id}`} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                          <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <TableButton />
          </div>
        </div>
      </div>
    </div>
  </Layout>;
};

export default Dashboard;
