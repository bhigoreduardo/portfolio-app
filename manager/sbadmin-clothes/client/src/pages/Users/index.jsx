import React from "react";
import "src/assets/vendor/datatables/dataTables.bootstrap4.min.css";
import "src/assets/vendor/datatables/jquery.dataTables.min.js"
import "src/assets/vendor/datatables/dataTables.bootstrap4.min.js";
import "src/assets/js/demo/datatables-demo.js";

import Layout from "src/components/Layout";

const Users = () => {
  return (
    <Layout>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Usuários</h1>
        <a title="Cadastrar usuário" href="usuarios/cadastro" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-user-plus text-white-50"></i>&nbsp;Adicionar
        </a>
      </div>

      {/* <!-- DataTales Example --> */}
      <div className="card shadow mb-4">
          <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Lista de usuários</h6>
          </div>
          <div className="card-body">
              <div className="table-responsive">
                  <table className="table table-bordered dataTable" id="dataTable" width="100%">
                      <thead>
                        <tr>
                          <th>Usuário</th>
                          <th>Login</th>
                          <th>Perfil</th>
                          <th className="text-center pr-2" width="5%">Ativo</th>
                          <th className="text-center no-sort" width="15%">Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Array.from({length: 5}).map((_, i) => (
                            <React.Fragment key={i}>
                            <tr>
                              <td>Jorjão do Anabol</td>
                              <td>jorjao@durateston.com</td>
                              <td>Vendedor</td>
                              <td className="text-center"><span className="badge badge-success btn-sm">Sim</span></td>
                              <td className="text-center no-sort">
                                <a title="Editar" className="btn btn-sm btn-primary mr-2" href="/usuarios/1"><i className="fas fa-user-edit"></i></a>
                                <a title="Excluir" className="btn btn-sm btn-danger" href="javascript(void)" data-toggle="modal" data-target="#produto"><i className="fas fa-user-times"></i></a>
                              </td>
                            </tr>
                            <tr>
                              <td>Tadala Fella</td>
                              <td>russo@louco.com</td>
                              <td>Administrador</td>
                              <td className="text-center"><span className="badge badge-warning">Não</span></td>
                              <td className="text-center">
                                <a title="Editar" className="btn btn-sm btn-primary mr-2" href="/usuarios/1"><i className="fas fa-user-edit"></i></a>
                                <a title="Excluir" className="btn btn-sm btn-danger" href="javascript(void)" data-toggle="modal"><i className="fas fa-user-times"></i></a>
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

export default Users;
