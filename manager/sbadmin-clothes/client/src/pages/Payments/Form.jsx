import Layout from "src/components/Layout";

const Form = () => {
  return (
    <Layout>
      <div className="card shadow mb-4">
          <div className="card-header py-3">
              <a title="Voltar" href="/contas-pagar" className="btn btn-sm btn-success float-right">
                  <i className="fas fa-arrow-left"></i>&nbsp;Voltar
              </a>
          </div>
          <div className="card-body">
              <form>
                  <fieldset className="mb-4 p-2 border">
                      <legend className="font-small"><i className="fas fa-info-circle"></i>&nbsp;Informações da conta</legend>
                      <div className="form-group row">
                          {/* <!-- FIXME: conta_pagar_fornecedor_id --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="conta_pagar_fornecedor_id">Fornecedor</label>
                              <select className="form-control custom-select contas_pagar" id="conta_pagar_fornecedor_id" name="conta_pagar_fornecedor_id">
                                  <option>Jurandir</option>
                              </select>
                          </div>
                          {/* <!-- FIXME: conta_pagar_data_vencimento --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="conta_pagar_data_vencimento">Data vencimento</label>
                              <input type="date" className="form-control form-control-user-date" id="conta_pagar_data_vencimento" name="conta_pagar_data_vencimento" />
                          </div>
                          {/* <!-- FIXME: conta_pagar_valor --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="conta_pagar_valor">Valor</label>
                              <input type="text" className="form-control form-control-user money2" id="conta_pagar_valor" name="conta_pagar_valor" placeholder="Informe o valor" />
                          </div>
                      </div>
                  </fieldset>

                  <fieldset className="mb-4 p-2 border">
                      <legend className="font-small"><i className="fas fa-tools"></i>&nbsp;Alterações</legend>
                      <div className="form-group row">
                          {/* <!-- FIXME: conta_pagar_status --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="conta_pagar_status">Situação</label>
                              <select className="form-control custom-select" id="conta_pagar_status" name="conta_pagar_status">
                                  <option value="0">Pendente</option>
                                  <option value="1">Pago</option>
                              </select>
                          </div>
                      </div>
                  </fieldset>

                  <div className="form-group row">
                      {/* <!-- FIXME: conta_pagar_obs --> */}
                      <div className="col-12 mb-2">
                          <label htmlFor="conta_pagar_obs">Observação</label>
                          <textarea className="form-control" id="conta_pagar_obs" name="conta_pagar_obs" placeholder="Informe a abservação"></textarea>
                      </div>
                  </div>

                  <button title="Salvar dados" type="submit" className="btn btn-sm btn-primary">Salvar dados</button>
              </form>
          </div>
      </div>
    </Layout>
  );
};

export default Form;
