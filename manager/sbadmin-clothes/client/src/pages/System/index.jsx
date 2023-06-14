import Layout from "src/components/Layout";

const System = () => {
  return (
    <Layout>
      {/* <!-- Page Heading --> */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Sistema</h1>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <a title="Voltar" href="/" className="btn btn-sm btn-success float-right">
              <i className="fas fa-arrow-left"></i>&nbsp;Voltar
            </a>
        </div>
        <div className="card-body">
            <form>
                <div className="form-group row">
                    {/* <!-- FIXME: sistema_razao_social --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_razao_social">Razão Social</label>
                        <input type="text" className="form-control form-control-user" id="sistema_razao_social" name="sistema_razao_social" placeholder="Informe a razão social" />
                    </div>
                    {/* <!-- FIXME: sistema_nome_fantasia --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_nome_fantasia">Nome fantasia</label>
                        <input type="text" className="form-control form-control-user" id="sistema_nome_fantasia" name="sistema_nome_fantasia" placeholder="Informe o nome fantasia" />
                    </div>
                    {/* <!-- FIXME: sistema_cnpj --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_cnpj">CNPJ</label>
                        <input type="text" className="form-control form-control-user cnpj" id="sistema_cnpj" name="sistema_cnpj" placeholder="Informe o CNPJ" />
                    </div>
                    {/* <!-- FIXME: sistema_ie --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_ie">IE</label>
                        <input type="text" className="form-control form-control-user ie" id="sistema_ie" name="sistema_ie" placeholder="Informe a IE" />
                    </div>
                    {/* <!-- FIXME: sistema_telefone --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_telefone">Telefone</label>
                        <input type="text" className="form-control form-control-user phone_with_ddd" id="sistema_telefone" name="sistema_telefone" placeholder="Informe o telefone" />
                    </div>
                    {/* <!-- FIXME: sistema_celular --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_celular">Celular</label>
                        <input type="text" className="form-control form-control-user sp_celphones" id="sistema_celular" name="sistema_celular" placeholder="Informe o celular" />
                    </div>
                    {/* <!-- FIXME: sistema_email --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_email">Email</label>
                        <input type="text" className="form-control form-control-user" id="sistema_email" name="sistema_email" placeholder="Informe o email" />
                    </div>
                    {/* <!-- FIXME: sistema_site_url --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_site_url">Site</label>
                        <input type="text" className="form-control form-control-user" id="sistema_site_url" name="sistema_site_url" placeholder="Informe o site" />
                    </div>
                    {/* <!-- FIXME: sistema_cep --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_cep">CEP</label>
                        <input type="text" className="form-control form-control-user cep" id="sistema_cep" name="sistema_cep" placeholder="Informe o CEP" />
                    </div>
                    {/* <!-- FIXME: sistema_endereco --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_endereco">Endereço</label>
                        <input type="text" className="form-control form-control-user" id="sistema_endereco" name="sistema_endereco" placeholder="Informe o endereço" />
                    </div>
                    {/* <!-- FIXME: sistema_cidade --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="sistema_cidade">Cidade</label>
                        <input type="text" className="form-control form-control-user" id="sistema_cidade" name="sistema_cidade" placeholder="Informe a cidade" />
                    </div>
                    {/* <!-- FIXME: sistema_estado --> */}
                    <div className="col-md-2 mb-2">
                        <label htmlFor="sistema_estado">Estado</label>
                        <input type="text" className="form-control form-control-user uf" id="sistema_estado" name="sistema_estado" placeholder="Informe o estado" />
                    </div>
                    {/* <!-- FIXME: sistema_numero --> */}
                    <div className="col-md-2 mb-2">
                        <label htmlFor="sistema_numero">Número</label>
                        <input type="text" className="form-control form-control-user" id="sistema_numero" name="sistema_numero" placeholder="Informe o número" />
                    </div>
                    {/* <!-- FIXME: sistema_txt_ordem_servico --> */}
                    <div className="col-md-12 mb-2">
                        <label htmlFor="sistema_txt_ordem_servico">Descrição ordem de serviço</label>
                        <textarea className="form-control" id="sistema_txt_ordem_servico" cols="30" rows="10" name="sistema_txt_ordem_servico" placeholder="Informe a descrição do sistema"></textarea>
                    </div>

                    <input type="hidden" name="id" />
                </div>

                <button title="Salvar alterações" type="submit" className="btn btn-sm btn-primary">Salvar alterações</button>
            </form>
        </div>
    </div>
    </Layout>
  );
};

export default System;
