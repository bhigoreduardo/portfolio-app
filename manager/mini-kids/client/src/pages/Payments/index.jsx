import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// import { payments } from "../../utils/data";
import api from "../../libs/api";
import { currencyPrice } from "../../utils/calculate";
import Layout from "../../components/Layout";
import ListTitle from "../../components/Navigation/ListTitle";
import TableSearch from "../../components/Tables/Search";
import TableButton from "../../components/Tables/Button";
import Modal from "../../components/Cards/Modal";

const Dashboard = () => {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [itemSelected, setItemSelected] = useState("");
  const [showModal, setShowModal] = useState(false);

  const removePayment = async () => {
    api.get(`/payments/removeById?id=${itemSelected}`).then((res) => {
      if (res.status === 500) return toast.error(res.data.message);
      toast.success(res.data.message);

      setItemSelected("");
      setShowModal(false);
      getPayments();
    });
  }
  const getPayments = async () => {
    const { data } = await api.get(`/payments/search?search=${search}&page=${page}&limit=${limit}`);
    setPayments(data);
  }
  useEffect(() => {
    getPayments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPayments();
  }, [limit, page, search]); // eslint-disable-line react-hooks/exhaustive-deps

  return <Layout>
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <ListTitle heading="Lista de contas pagar" target="/contas-pagar/cadastro" title="Adicionar conta" icon="fas fa-book" />
          
          <div className="flex-auto px-0 pt-0 pb-2">
            <TableSearch setLimit={setLimit} setSearch={setSearch} />
            {
              !payments?.records?.length > 0
                ? (
                  <h6 className="dark:text-white text-center mb-6">Nenhuma conta encontrada</h6>
                ) : (
                  <>
                  {/* TABLE */}
                  <div className="p-0 overflow-x-auto">
                    <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                      <thead className="align-bottom">
                        <tr>
                          <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Fornecedor</th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Total</th>
                          <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Situação</th>
                          <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                          <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          payments.records.map((item, i) => (
                            <tr key={i}>
                              <td className={`${i === payments.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                <div className="flex px-2 gap-1 py-1">
                                  <div className="w-1/4">
                                    <img src={item.supplyImage ? `${import.meta.env.VITE_SERVER_URL}/images/${item.supplyImage}` : "/img/noavatar.png"} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                                  </div>
                                  <div className="flex flex-col justify-center w-3/4">
                                    <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.supplyName} {item.supplyLastName}</h6>
                                    <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.supplyEmail}</p>
                                  </div>
                                </div>
                              </td>
                              <td className={`${i === payments.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{currencyPrice.format(item.amount)}</p>
                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{new Date(item.deadlineAt).toLocaleDateString()}</p>
                              </td>
                              <td className={`${i === payments.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.status ? "Pago" : "Aguardando pagamento"}</p>
                                <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{new Date(item.paymentAt).toLocaleDateString() ?? "Processando"}</p>
                              </td>
                              <td className={`${i === payments.length -1 ? "border-b-0" : "border-b"} p-2 text-center align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                <span className={`${item.status ? "from-emerald-500 to-teal-400" : new Date(item.deadlineAt) < new Date() ? "from-red-600 to-red-300" : "from-slate-600 to-slate-300"} bg-gradient-to-tl px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>
                                  {
                                    item.status ? "Pago" : new Date(item.deadlineAt) < new Date() ? "Atrasado" : "Pendente"
                                  }
                                </span>
                              </td>
                              <td className={`${i === payments.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                                <a title="Editar" href={`/contas-pagar/${item.id}`} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                                <button type="button" title="Excluir" onClick={() => { setItemSelected(item.id); setShowModal(true); }} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></button>
                              </td>
                            </tr> 
                          ))
                        }
                      </tbody>
                    </table>
                  </div>

                  <TableButton page={page} setPage={setPage} limit={limit} count={payments.count} />
                </>
                )
            }
          </div>
        </div>
      </div>
    </div>
    {showModal && <Modal title="Deseja realmente excluir esta conta?" setShowModal={setShowModal} callback={removePayment} />}
  </Layout>;
};

export default Dashboard;
