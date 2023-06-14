import Layout from "src/components/Layout";

const Form = () => {
  return (
    <Layout>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <a title="Voltar" href="/produtos" className="btn btn-sm btn-success float-right">
                <i className="fas fa-arrow-left"></i>&nbsp;Voltar
            </a>
        </div>
        <div className="card-body">
            <form>
            <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-box"></i>&nbsp;Informações do produto</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: produto_codigo --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_codigo">Código</label>
                            <input type="text" className="form-control form-control-user" id="produto_codigo" name="produto_codigo" placeholder="Informe o código" />
                        </div>
                        {/* <!-- FIXME: produto_codigo_barras --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_codigo_barras">Código de barras</label>
                            <input type="text" className="form-control form-control-user" id="produto_codigo_barras" name="produto_codigo_barras" placeholder="Informe o código de barras" />
                        </div>
                        {/* <!-- FIXME: produto_ncm --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_ncm">NCM</label>
                            <input type="text" className="form-control form-control-user" id="produto_ncm" name="produto_ncm" placeholder="Informe o NCM" />
                        </div>
                        {/* <!-- FIXME: produto_descricao --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_descricao">Descrição</label>
                            <input type="text" className="form-control form-control-user" id="produto_descricao" name="produto_descricao" placeholder="Informe a descrição" />
                        </div>
                        {/* <!-- FIXME: produto_categoria_id --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_categoria_id">Categoria</label>
                            <select className="form-control custom-select categoria" id="produto_categoria_id" name="produto_categoria_id">
                              <option>Roupas</option>
                            </select>
                        </div>
                        {/* <!-- FIXME: produto_marca_id --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_marca_id">Marca</label>
                            <select className="form-control custom-select marca" id="produto_marca_id" name="produto_marca_id">
                                <option>Brandilli</option>
                            </select>
                        </div>
                        {/* <!-- FIXME: produto_fornecedor_id --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_fornecedor_id">Fornecedor</label>
                            <select className="form-control custom-select fornecedor" id="produto_fornecedor_id" name="produto_fornecedor_id">
                                <option>Jorjão</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-funnel-dollar"></i>&nbsp;Informações de custo e estoque</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: produto_preco_custo --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_preco_custo">Preço custo</label>
                            <input type="text" className="form-control form-control-user money" id="produto_preco_custo" name="produto_preco_custo" placeholder="Informe o preço de custo" />
                        </div>
                        {/* <!-- FIXME: produto_preco_venda --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_preco_venda">Preço venda</label>
                            <input type="text" className="form-control form-control-user money" id="produto_preco_venda" name="produto_preco_venda" placeholder="Informe o preço de venda" />
                        </div>
                        {/* <!-- FIXME: produto_estoque_minimo --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_estoque_minimo">Estoque mínimo</label>
                            <input type="text" className="form-control form-control-user" id="produto_estoque_minimo" name="produto_estoque_minimo" placeholder="Informe o preço de venda"  />
                        </div>
                        {/* <!-- FIXME: produto_quantidade_estoque --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_quantidade_estoque">Quantidade estoque</label>
                            <input type="text" className="form-control form-control-user" id="produto_quantidade_estoque" name="produto_quantidade_estoque"
                            placeholder="Informe o preço de venda" value="<?php echo set_value('produto_quantidade_estoque'); ?>" />
                        </div>
                        {/* <!-- FIXME: produto_unidade --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_unidade">Unidade medida</label>
                            <input type="text" className="form-control form-control-user" id="produto_unidade" name="produto_unidade" placeholder="Informe o preço de venda" />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="mb-4 p-2 border">
                    <legend className="font-small"><i className="fas fa-tools"></i>&nbsp;Alterações</legend>
                    <div className="form-group row">
                        {/* <!-- FIXME: produto_ativo --> */}
                        <div className="col-md-4 mb-2">
                            <label htmlFor="produto_ativo">Ativo</label>
                            <select className="form-control custom-select" id="produto_ativo" name="produto_ativo">
                                <option value="0">Não</option>
                                <option value="1">Sim</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <div className="form-group row">
                    {/* <!-- FIXME: produto_obs --> */}
                    <div className="col-12 mb-2">
                        <label htmlFor="produto_obs">Observação</label>
                        <textarea className="form-control" id="produto_obs" name="produto_obs" placeholder="Informe a abservação"></textarea>
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
