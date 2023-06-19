import Layout from "../../components/Layout";
import ListTitle from "../../components/Navigation/ListTitle";
import TableSearch from "../../components/Tables/Search";
import TableButton from "../../components/Tables/Button";
import { sales } from "../../utils/data";

const Dashboard = () => {
  return <Layout>
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <ListTitle heading="Lista de vendas" target="/vendas/cadastro" title="Adicionar venda" icon="fas fa-shopping-cart" />

          <div className="flex-auto px-0 pt-0 pb-2">
            <TableSearch />

            {/* TABLE */}
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Cliente</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Vendedor</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Total</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Situação</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    sales?.length > 0 &&
                      sales.map((item, i) => (
                        <tr key={i}>
                          <td className={`${i === sales.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                            <div className="flex px-2 py-1">
                              <div>
                                <img src={item.customer?.image} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                              </div>
                              <div className="flex flex-col justify-center">
                                <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.customer?.name}</h6>
                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.customer?.email}</p>
                              </div>
                            </div>
                          </td>
                          <td className={`${i === sales.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.saller?.name}</p>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.deadlineAt}</p>
                          </td>
                          <td className={`${i === sales.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">R${item.amount}</p>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.paymentMethod}</p>
                          </td>
                          <td className={`${i === sales.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                            <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">Sem atraso</p>
                            <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.paymentAt ?? "-"}</p>
                          </td>
                          <td className={`${i === sales.length - 1 ? "border-b-0" : "border-b"} p-2 text-sm leading-normal text-center align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                            <span className={`${item.paymentAt ? "from-emerald-500 to-teal-400" : "from-slate-600 to-slate-300"} bg-gradient-to-tl px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{item.paymentAt ? "Pago" : "Pendente"}</span>
                          </td>
                          <td className={`${i === sales.length - 1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                            <a title="Imprimir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-file-pdf dark:text-white text-slate-700"></i></a>
                            <a title="Editar" href="/vendas/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                            <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                          </td>
                        </tr>
                      ))
                  }
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
