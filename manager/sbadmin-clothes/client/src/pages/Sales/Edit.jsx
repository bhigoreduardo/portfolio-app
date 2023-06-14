import Layout from "src/components/Layout";

const Edit = () => {
  return (
    <Layout>
      {/* <!-- Form data --> */}
      <div className="card shadow mb-4">
          <div className="card-header py-3">
              <div className="float-left">
                  <p className="float-left mr-2">
                      <strong><i className="fas fa-clock"></i>&nbsp;Última atualização:</strong>&nbsp;
                  </p>
                  <p className="float-left">
                      <strong><i className="fas fa-clock"></i>&nbsp;Data do cadastro:</strong>&nbsp;
                  </p>
              </div>
              <a title="Voltar" href="/vendas" className="btn btn-sm btn-success float-right">
                  <i className="fas fa-arrow-left"></i>&nbsp;Voltar
              </a>
          </div>
          <div className="card-body">
              <form>
                <fieldset className="mb-4 p-2 border">
                      <legend className="font-small"><i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Escolha os produtos</legend>

                      {/* <!-- FIXME: venda_produto_id_produto  --> */}
                      <div className="form-group row">
                          <div className="ui-widget col-lg-12 mb-1 mt-1">
                              <input id="buscar_produtos" className="form-control form-control-user" placeholder="Que produto você está buscando?" />
                          </div>
                      </div>

                      <div className="table-responsive">
                          <table id="table_produtos" className="table">
                              <thead>
                                  <tr>
                                      <th>Código/SKU</th>
                                      <th className="" style={{width: "55%"}}>Produto</th>
                                      <th className="text-right pr-2" style={{width: "12%"}}>Valor unitário</th>
                                      <th className="text-center" style={{width: "8%"}}>Qtd</th>
                                      <th className="" style={{width: "8%"}}>% Desc</th>
                                      <th className="text-right pr-2" style={{width: "15%"}}>Total</th>
                                      <th className="" style={{width: "25%"}}></th>
                                      <th className="" style={{width: "25%"}}></th>
                                  </tr>
                              </thead>
                              <tbody id="lista_produtos" className="item">
                                <tr>
                                  <td>SLD795</td>
                                  <td>Caderneta da barbie</td>
                                  <td className="text-right">R$65,99</td>
                                  <td className="text-center">5</td>
                                  <td className="text-center">5%</td>
                                  <td className="text-right">R$78,99</td>
                                </tr>
                              </tbody>
                              <tfoot>
                                  <tr className="">
                                      <td colSpan="5" className="text-right border-0">
                                          <label className="font-weight-bold pt-1" htmlFor="total">Valor de desconto:</label>
                                      </td>

                                      <td className="text-right border-0">
                                          <input type="text" name="venda_valor_desconto" className="form-control form-control-user text-right pr-1" data-format="$ 0,0.00" data-cell="L1" data-formula="SUM(H1:H5)" value="12,99" />
                                      </td>
                                      <td className="border-0">&nbsp;</td>
                                  </tr>

                                  <tr className="">
                                      <td colSpan="5" className="text-right border-0">
                                          <label className="font-weight-bold pt-1" htmlFor="total">Total a pagar:</label>
                                      </td>

                                      <td className="text-right border-0">
                                          <input type="text" name="venda_valor_total" className="form-control form-control-user text-right pr-1" data-format="$ 0,0.00" data-cell="G2" data-formula="SUM(F1:F5)" value="23,99" />
                                      </td>
                                      <td className="border-0">&nbsp;</td>
                                  </tr>
                              </tfoot>
                          </table>
                      </div>
                  </fieldset>

                  <fieldset className="mb-4 p-2 border">
                      <legend className="font-small"><i className="far fa-money-bill-alt"></i>&nbsp;&nbsp;Informações da venda</legend>

                      <div className="form-group row">
                          {/* <!-- FIXME: venda_cliente_id --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="venda_cliente_id">Cliente</label>
                              <select className="form-control custom-select contas_receber" id="venda_cliente_id" name="venda_cliente_id">
                                  <option>Jurandir</option>
                              </select>
                          </div>
                          {/* <!-- FIXME: venda_forma_pagamento_id --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="venda_forma_pagamento_id">Forma pagamento</label>
                              <select className="form-control custom-select forma_pagamento" id="venda_forma_pagamento_id" name="venda_forma_pagamento_id">
                                  <option>PIX</option>
                              </select>
                          </div>
                          {/* <!-- FIXME: venda_vendedor_id --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="venda_vendedor_id">Vendedor</label>
                              <select className="form-control custom-select vendedor" id="venda_vendedor_id" name="venda_vendedor_id">
                                  <option>Jorjão</option>
                              </select>
                          </div>
                          {/* <!-- FIXME: venda_tipo --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="venda_tipo">Tipo</label>
                              <select className="form-control custom-select" id="venda_tipo" name="venda_tipo">
                                      <option value="0" selected>à vista</option>
                                      <option value="1">à prazo</option>
                              </select>
                          </div>
                          {/* <!-- FIXME: venda_status --> */}
                          <div className="col-md-4 mb-2">
                              <label htmlFor="venda_status">Situação</label>
                              <select className="form-control custom-select" id="venda_status" name="venda_status">
                                  <option value="0" selected>Pendente</option>
                                  <option value="1">Pago</option>
                              </select>
                          </div>

                          <input type="hidden" name="venda_id" value="<?php echo $venda->venda_id; ?>" />
                      </div>
                  </fieldset>

                  <button title="<?php echo ($venda->venda_status == 0 ? 'Atualizar dados' : 'Pago'); ?>" type="submit" className="btn btn-sm btn-primary" disabled>
                      Atualizar
                  </button>
              </form>
          </div>
      </div>
    </Layout>
  );
};

export default Edit;
