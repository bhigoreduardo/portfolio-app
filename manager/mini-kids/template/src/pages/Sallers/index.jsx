import { sallers } from "../../utils/data";
import Layout from "../../components/Layout";
import ListTitle from "../../components/Navigation/ListTitle";
import TableSearch from "../../components/Tables/Search";
import TableButton from "../../components/Tables/Button";

const Dashboard = () => {
  return <Layout>
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <ListTitle heading="Lista de vendedores" target="/vendedores/cadastro" title="Adicionar vendedor" icon="fas fa-user-friends" />
          
          <div className="flex-auto px-0 pt-0 pb-2">
            <TableSearch />

            {/* TABLE */}
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Identificação</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Documentos</th>
                    <th className="px-6 py-3 pl-2 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Contato</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    sallers?.length > 0 && (
                      sallers.map((item, i) => (
                      <tr key={i}>
                        <td className={`${i === sallers.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <div className="flex px-2 gap-1 py-1">
                            <div className="w-1/4">
                              <img src={item.image} className="inline-flex items-center justify-center mr-4 text-sm text-white transition-all duration-200 ease-in-out h-9 w-9 rounded-xl" alt="user1" />
                            </div>
                            <div className="flex flex-col w-3/4 justify-center">
                              <h6 className="mb-0 text-sm leading-normal dark:text-white">{item.name} {item.lastName}</h6>
                              <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className={`${i === sallers.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">Pessoa Física</p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{item.cpf}</p>
                        </td>
                        <td className={`${i === sallers.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <p className="mb-0 text-xs font-semibold leading-tight dark:text-white dark:opacity-80">{item.mobile}</p>
                          <p className="mb-0 text-xs leading-tight dark:text-white dark:opacity-80 text-slate-400">{`${item.address} ${item.number ? `N° ${item.number}` : "S/N"} ${item.neighborhood}`.substring(0, 30)}</p>
                        </td>
                        <td className={`${i === sallers.length -1 ? "border-b-0" : "border-b"} p-2 text-center align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <span className={`${item.status ? "from-emerald-500 to-teal-400" : "from-slate-600 to-slate-300"} bg-gradient-to-tl px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white`}>{item.status ? "Ativo" : "Inativo"}</span>
                        </td>
                        <td className={`${i === sallers.length -1 ? "border-b-0" : "border-b"} p-2 align-middle bg-transparent dark:border-white/40 whitespace-nowrap shadow-transparent`}>
                          <a title="Editar" href={`/fornecedores/${item.id}`} className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                          <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                        </td>
                      </tr>
                      ))
                    )
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
