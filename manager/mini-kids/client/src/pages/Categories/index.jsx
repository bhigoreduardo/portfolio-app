import Layout from "../../components/Layout";

const Dashboard = () => {
  return <Layout>
    <div className="flex flex-wrap -mx-3">
      <div className="flex-none w-full max-w-full px-3">
        <div className="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 border-transparent border-solid shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex items-center justify-between p-6 pb-0 mb-0 border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
            <h6 className="dark:text-white">Lista de categorias</h6>
            <a href="/categorias/cadastro" title="Adicionar marca" type="button" className="inline-block px-8 py-2 mb-4 font-bold leading-normal text-center text-white uppercase align-middle transition-all ease-in rounded-lg shadow-xs cursor-pointer bg-gradient-to-tl from-blue-500 to-violet-500 text-xs tracking-tight-rem bg-150 bg-x-25 hover:-translate-y-px active:opacity-85 hover:shadow-md">
              <i className="fab fa-buffer text-white-50"></i>&nbsp;Adicionar
            </a>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2 w-auto">
                  <select  className="focus:shadow-primary-outline dark:bg-slate-850 dark:text-white text-sm leading-5.6 ease appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none">
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                  </select>
                  <span>exibir por página</span>
                </div>

                <div className="flex items-center">
                  <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                    <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                      <i className="fas fa-search"></i>
                    </span>
                    <input type="text" className="pl-9 text-sm focus:shadow-primary-outline ease w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-white bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow" placeholder="Pesquisar..." />
                  </div>
                </div>
              </div>

              <table className="items-center w-full mb-0 align-top border-collapse dark:border-white/40 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Nome</th>
                    <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-collapse shadow-none dark:border-white/40 dark:text-white text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-collapse border-solid shadow-none dark:border-white/40 dark:text-white tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Hering</h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Ativo</span>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a title="Editar" href="/categorias/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                      <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Masculino</h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Ativo</span>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a title="Editar" href="/categorias/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                      <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Feminino</h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="bg-gradient-to-tl from-emerald-500 to-teal-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Ativo</span>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a title="Editar" href="/categorias/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                      <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Infantil</h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Inativo</span>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a title="Editar" href="/categorias/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                      <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Adulto</h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Inativo</span>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b dark:border-white/40 whitespace-nowrap shadow-transparent">
                      <a title="Editar" href="/categorias/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                      <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal dark:text-white">Criança</h6>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-sm leading-normal text-center align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                      <span className="bg-gradient-to-tl from-slate-600 to-slate-300 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white">Inativo</span>
                    </td>
                    <td className="p-2 align-middle bg-transparent border-b-0 whitespace-nowrap shadow-transparent">
                      <a title="Editar" href="/categorias/1" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80 mr-2"><i className="fas fa-user-edit text-sky-400"></i></a>
                      <a title="Excluir" href="/" className="text-xs font-semibold leading-tight dark:text-white dark:opacity-80"><i className="fas fa-user-times text-red-400"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex items-center justify-between p-3">
                <span>Exibindo 1 até 6 de 57 totais</span>
                <div className="flex items-center gap-1">
                  <button type="button" className="bg-gradient-to-tl text-white from-blue-500 to-violet-500 inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">1</button>
                  <button type="button" className="bg-white text-blue-500 bg-none inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">2</button>
                  <button type="button" className="bg-white text-blue-500 bg-none inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">3</button>
                  <button type="button" className="bg-white text-blue-500 bg-none inline-block px-4 py-2 text-center leading-normal font-bold tracking-tight-rem shadow-xs bg-150 bg-x-25 hover:-translate-y-px rounded-circle transition-all ease-in cursor-pointer active:opacity-85 hover:shadow-md">4</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>;
};

export default Dashboard;
