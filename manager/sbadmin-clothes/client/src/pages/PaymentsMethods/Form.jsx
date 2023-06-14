import Layout from "src/components/Layout";

const Form = () => {
  return (
    <Layout>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <a title="Voltar" href="/formas-pagamento" className="btn btn-sm btn-success float-right">
                <i className="fas fa-arrow-left"></i>&nbsp;Voltar
            </a>
        </div>
        <div className="card-body">
            <form>
                <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-info-circle"></i>&nbsp;Informações da forma de pagamento</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: forma_pagamento_nome --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="forma_pagamento_nome">Método</label>
                            <input type="text" className="form-control form-control-user" id="forma_pagamento_nome" name="forma_pagamento_nome" placeholder="Informe o valor" />
                        </div>
                        {/* <!-- FIXME: forma_pagamento_aceita_parcela --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="forma_pagamento_aceita_parcela">Parcela</label>
                            <select className="form-control custom-select" id="forma_pagamento_aceita_parcela" name="forma_pagamento_aceita_parcela">
                                <option value="0">Não</option>
                                <option value="1">Sim</option>
                            </select>
                        </div>                                        
                    </div>
                </fieldset>

                <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-tools"></i>&nbsp;Alterações</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: forma_pagamento_ativo --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="forma_pagamento_ativo">Ativo</label>
                            <select className="form-control custom-select" id="forma_pagamento_ativo" name="forma_pagamento_ativo">
                                <option value="0">Não</option>
                                <option value="1">Sim</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <button title="Salvar dados" type="submit" className="btn btn-sm btn-primary">Salvar dados</button>
            </form>
        </div>
    </div>
    </Layout>
  );
};

export default Form;
