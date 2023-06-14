import React from "react";
import "src/assets/vendor/datatables/dataTables.bootstrap4.min.css";
import "src/assets/vendor/datatables/jquery.dataTables.min.js"
import "src/assets/vendor/datatables/dataTables.bootstrap4.min.js";
import "src/assets/js/demo/datatables-demo.js";

import Layout from "src/components/Layout";

const Receipts = () => {
  return (
    <Layout>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Contas à receber</h1>
        <a title="Cadastrar conta" href="/contas-receber/cadastro" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-hand-holding-usd"></i>&nbsp;Adicionar
        </a>
      </div>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Lista de contas</h6>
          </div>
          <div className="card-body">
              <div className="table-responsive">
                  <table className="table table-bordered dataTable" id="dataTable" width="100%">
                      <thead>
                        <tr>
                          <th>Cliente</th>
                          <th>Valor</th>
                          <th>Data de vencimento</th>
                          <th>Data de pagamento</th>
                          <th className="text-center pr-2" width="5%">Situação</th>
                          <th className="text-center no-sort" width="15%">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Array.from({length: 20}).map((_, i) => (
                            <React.Fragment key={i}>
                              <tr>
                                <td>Jurandir Gomes</td>
                                <td>R$250,00</td>
                                <td>25/05/2020</td>
                                <td>Aguardando pagamento</td>
                                <td><span className="badge badge-danger btn-sm">Venceu</span></td>
                                <td className="text-center no-sort">
                                  <a title="Editar" className="btn btn-sm btn-primary mr-2" href="/contas-receber/1"><i className="fas fa-user-edit"></i></a>
                                  <a title="Excluir" className="btn btn-sm btn-danger" href="javascript(void)" data-toggle="modal" data-target="#produto"><i className="fas fa-user-times"></i></a>
                                </td>
                              </tr>
                              <tr>
                                <td>Jurandir Gomes</td>
                                <td>R$250,00</td>
                                <td>25/05/2020</td>
                                <td>25/05/2020</td>
                                <td><span className="badge badge-success btn-sm">Pago</span></td>
                                <td className="text-center no-sort">
                                  <a title="Editar" className="btn btn-sm btn-primary mr-2" href="/contas-receber/1"><i className="fas fa-user-edit"></i></a>
                                  <a title="Excluir" className="btn btn-sm btn-danger" href="javascript(void)" data-toggle="modal" data-target="#produto"><i className="fas fa-user-times"></i></a>
                                </td>
                              </tr>
                              <tr>
                                <td>Jurandir Gomes</td>
                                <td>R$250,00</td>
                                <td>25/05/2020</td>
                                <td>Aguardando pagamento</td>
                                <td><span className="badge badge-warning btn-sm">2 dias para vencer</span></td>
                                <td className="text-center no-sort">
                                  <a title="Editar" className="btn btn-sm btn-primary mr-2" href="/contas-receber/1"><i className="fas fa-user-edit"></i></a>
                                  <a title="Excluir" className="btn btn-sm btn-danger" href="javascript(void)" data-toggle="modal" data-target="#produto"><i className="fas fa-user-times"></i></a>
                                </td>
                              </tr>
                              <tr>
                                <td>Jurandir Gomes</td>
                                <td>R$250,00</td>
                                <td>25/05/2020</td>
                                <td>Aguardando pagamento</td>
                                <td><span className="badge badge-secondary btn-sm">À receber</span></td>
                                <td className="text-center no-sort">
                                  <a title="Editar" className="btn btn-sm btn-primary mr-2" href="/contas-receber/1"><i className="fas fa-user-edit"></i></a>
                                  <a title="Excluir" className="btn btn-sm btn-danger" href="javascript(void)" data-toggle="modal" data-target="#produto"><i className="fas fa-user-times"></i></a>
                                </td>
                              </tr>
                            {/* <!-- Delete Modal--> */}
                          </React.Fragment>
                          ))
                        }
                      </tbody>
                  </table>
                  <div className="modal fade" id="produto" role="dialog"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Realmente deseja excluir este registro?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Selecione <strong>Sim</strong> para confirmar sua ação.</div>
                            <div className="modal-footer">
                                <button className="btn btn-sm btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                                <a className="btn btn-sm btn-danger">Sim</a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </Layout>
  );
};

export default Receipts;
