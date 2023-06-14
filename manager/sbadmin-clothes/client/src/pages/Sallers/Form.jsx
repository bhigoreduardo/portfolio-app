import Layout from "src/components/Layout";

const Form = () => {
  return (
    <Layout>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <a title="Voltar" href="/vendedores" className="btn btn-sm btn-success float-right">
              <i className="fas fa-arrow-left"></i>&nbsp;Voltar
            </a>
        </div>
        <div className="card-body">
            <form>
            <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-user-friends"></i>&nbsp;Dados pessoais</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: vendedor_nome_completo --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_nome_completo">Nome completo</label>
                            <input type="text" className="form-control form-control-user" id="vendedor_nome_completo" name="vendedor_nome_completo" placeholder="Informe o nome completo" />
                        </div>
                        {/* <!-- FIXME: vendedor_cpf --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_cpf">CPF</label>
                            <input type="text" className="form-control form-control-user cpf" id="vendedor_cpf" name="vendedor_cpf" placeholder="Informe o CPF" />                                
                        </div>
                        {/* <!-- FIXME: vendedor_rg --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_rg">RG</label>
                            <input type="text" className="form-control form-control-user rg" id="vendedor_rg" name="vendedor_rg" placeholder="Informe o RG" />
                        </div>
                        {/* <!-- FIXME: vendedor_telefone --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_telefone">Telefone</label>
                            <input type="text" className="form-control form-control-user phone_with_ddd" id="vendedor_telefone" name="vendedor_telefone" />
                        </div>
                        {/* <!-- FIXME: vendedor_celular --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_celular">Celular</label>
                            <input type="text" className="form-control form-control-user sp_celphones" id="vendedor_celular" name="vendedor_celular" />
                        </div>
                        {/* <!-- FIXME: vendedor_email --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_email">Email</label>
                            <input type="text" className="form-control form-control-user" id="vendedor_email" name="vendedor_email" />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-map-marked-alt"></i>&nbsp;Informação de endereço</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: vendedor_cep --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_cep">CEP</label>
                            <input type="text" className="form-control form-control-user cep" id="vendedor_cep" name="vendedor_cep" placeholder="Informe o CEP" />
                        </div>
                        {/* <!-- FIXME: vendedor_endereco --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_endereco">Endereço</label>
                            <input type="text" className="form-control form-control-user" id="vendedor_endereco" name="vendedor_endereco" placeholder="Informe o endereço" />
                        </div>
                        {/* <!-- FIXME: vendedor_numero_endereco --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_numero_endereco">Número</label>
                            <input type="text" className="form-control form-control-user" id="vendedor_numero_endereco" name="vendedor_numero_endereco" placeholder="Informe o número" />
                        </div>
                        {/* <!-- FIXME: vendedor_bairro --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_bairro">Bairro</label>
                            <input type="text" className="form-control form-control-user" id="vendedor_bairro" name="vendedor_bairro" placeholder="Informe o bairro" />
                        </div>
                        {/* <!-- FIXME: vendedor_complemento --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_complemento">Complemento</label>
                            <input type="text" className="form-control form-control-user" id="vendedor_complemento" name="vendedor_complemento" placeholder="Informe o complemento" />
                        </div>
                        {/* <!-- FIXME: vendedor_cidade --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_cidade">Cidade</label>
                            <input type="text" className="form-control form-control-user" id="vendedor_cidade" name="vendedor_cidade" placeholder="Informe a cidade" />
                        </div>
                        {/* <!-- FIXME: vendedor_estado --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_estado">Estado</label>
                            <input type="text" className="form-control form-control-user uf" id="vendedor_estado" name="vendedor_estado" placeholder="Informe o estado" />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-tools"></i>&nbsp;Alterações</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: vendedor_ativo --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="vendedor_ativo">Ativo</label>
                            <select className="form-control custom-select" id="vendedor_ativo" name="vendedor_ativo">
                                <option value="0">Não</option>
                                <option value="1">Sim</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <div className="form-group row">
                    {/* <!-- FIXME: vendedor_obs --> */}
                    <div className="col-12 mb-2">
                        <label htmlFor="vendedor_obs">Observação</label>
                        <textarea className="form-control" id="vendedor_obs" name="vendedor_obs"
                        placeholder="Informe a abservação"></textarea>
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
