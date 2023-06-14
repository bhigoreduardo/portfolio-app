import { useState } from "react";
import Layout from "src/components/Layout";

const Form = () => {
	const [personType, setPersonType] = useState(1);

  return (
    <Layout>
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<a title="Voltar" href="/clientes" className="btn btn-sm btn-success float-right">
							<i className="fas fa-arrow-left"></i>&nbsp;Voltar
					</a>
				</div>
				<div className="card-body">
					<form>
						{/* <!-- FIXME: cliente_tipo --> */}
						<div className="custom-control custom-radio custom-control-inline mb-4">
							<input type="radio" id="pessoa_fisica" name="cliente_tipo" className="custom-control-input" value="1" onChange={() => setPersonType(1)} />
							<label className="custom-control-label pt-1" htmlFor="pessoa_fisica">Pessoa Física</label>
						</div>
						<div className="custom-control custom-radio custom-control-inline">
							<input type="radio" id="pessoa_juridica" name="cliente_tipo" className="custom-control-input" value="2" onChange={() => setPersonType(2)} />
							<label className="custom-control-label pt-1" htmlFor="pessoa_juridica">Pessoa Jurídica</label>
						</div>

						{/* Dados Pessoais */}
						<fieldset className="mb-4 p-2 border">
							<legend className="font-small"><i className="fas fa-user-tie"></i>&nbsp;Dados pessoais</legend>
							<div className="form-group row">
								{/* <!-- FIXME: cliente_tipo --> */}
								<div className="col-md-4 mb-2">
									<label>Tipo pessoa</label>
									{
										personType === 1 ? (
											<div className="pessoa_fisica">
												<input type="text" className="form-control form-control-user" disabled value="Pessoa Física" />
											</div>
										) : (
											<div className="pessoa_juridica">
												<input type="text" className="form-control form-control-user" disabled value="Pessoa Jurídica" />
											</div>
										)
									}
								</div>
								{/* <!-- FIXME: cliente_nome_razao --> */}
								<div className="col-md-4 mb-2">
									{
										personType === 1 ? (
											<div className="pessoa_fisica">
												<label htmlFor="cliente_nome">Nome</label>
												<input type="text" className="form-control form-control-user" id="cliente_nome" name="cliente_nome" placeholder="Informe o nome" />
											</div>
										) : (
											<div className="pessoa_juridica">
												<label htmlFor="cliente_razao">Razão social</label>
												<input type="text" className="form-control form-control-user" id="cliente_razao" name="cliente_razao" placeholder="Informe a razão social" />
											</div>
										)
									}
								</div>
								{/* <!-- FIXME: cliente_sobrenome_fantasia --> */}
								<div className="col-md-4 mb-2">
									{
										personType === 1 ? (
											<div className="pessoa_fisica">
												<label htmlFor="cliente_sobrenome">Sobrenome</label>
												<input type="text" className="form-control form-control-user" id="cliente_sobrenome" name="cliente_sobrenome" placeholder="Informe o sobrenome" />
											</div>
										) : (
											<div className="pessoa_juridica">
												<label htmlFor="cliente_fantasia">Nome fantasia</label>
												<input type="text" className="form-control form-control-user" id="cliente_fantasia" name="cliente_fantasia" placeholder="Informe o nome fantasia" />
											</div>
										)
									}
								</div>
								{/* <!-- FIXME: cliente_email --> */}
								<div className="col-md-4 mb-2">
									<label htmlFor="cliente_email">Email</label>
									<input type="text" className="form-control form-control-user" id="cliente_email" name="cliente_email" placeholder="Informe o email" />
								</div>
								{/* <!-- FIXME: cliente_telefone --> */}
								<div className="col-md-4 mb-2">
									<label htmlFor="cliente_telefone">Telefone fixo</label>
									<input type="text" className="form-control form-control-user phone_with_ddd" id="cliente_telefone" name="cliente_telefone" placeholder="Informe o telefone fixo" />
								</div>
								{/* <!-- FIXME: cliente_celular --> */}
								<div className="col-md-4 mb-2">
									<label htmlFor="cliente_celular">Celular</label>
									<input type="text" className="form-control form-control-user sp_celphones" id="cliente_celular" name="cliente_celular" placeholder="Informe o celular" />
								</div>
								{/* <!-- FIXME: cliente_cpf_cnpj --> */}
								<div className="col-md-4 mb-2">
									{
										personType === 1 ? (
											<div className="pessoa_fisica">
												<label htmlFor="cliente_cpf">CPF</label>
												<input type="text" className="form-control form-control-user cpf" id="cliente_cpf" name="cliente_cpf" placeholder="Informe o CPF" />
											</div>
										) : (
											<div className="pessoa_juridica">
												<label htmlFor="cliente_cnpj">CNPJ</label>
												<input type="text" className="form-control form-control-user cnpj" id="cliente_cnpj" name="cliente_cnpj" placeholder="Informe o CNPJ" />
											</div>
										)
									}
								</div>
								{/* <!-- FIXME: cliente_rg_ie --> */}
								<div className="col-md-4 mb-2">
									{
										personType === 1 ? (
											<div className="pessoa_fisica">
												<label htmlFor="cliente_rg">RG</label>
												<input type="text" className="form-control form-control-user rg" id="cliente_rg" name="cliente_rg" placeholder="Informe o RG" />
											</div>
										) : (
											<div className="pessoa_juridica">
												<label htmlFor="cliente_ie">IE</label>
												<input type="text" className="form-control form-control-user ie" id="cliente_ie" name="cliente_ie" placeholder="Informe a IE" />
											</div>
										)
									}
								</div>
								{/* <!-- FIXME: cliente_data_nascimento --> */}
								{
									personType === 1 && (
										<div className="col-md-4 mb-2 pessoa_fisica">
											<label htmlFor="cliente_data_nascimento">Data nascimento</label>
											<input type="date" className="form-control form-control-user-date" id="cliente_data_nascimento" name="cliente_data_nascimento" />
										</div>
									)
								}
							</div>
						</fieldset>

						{/* Informação de endereço */}
						<fieldset className="mb-4 p-2 border">
							<legend className="font-small"><i className="fas fa-map-marked-alt"></i>&nbsp;Informação de endereço</legend>
								<div className="form-group row">
									{/* <!-- FIXME: cliente_cep --> */}
									<div className="col-md-4 mb-2">
										<label htmlFor="cliente_cep">CEP</label>
										<input type="text" className="form-control form-control-user cep" id="cliente_cep" name="cliente_cep" placeholder="Informe o CEP" />
									</div>
									{/* <!-- FIXME: cliente_endereco --> */}
									<div className="col-md-4 mb-2">
										<label htmlFor="cliente_endereco">Endereço</label>
										<input type="text" className="form-control form-control-user" id="cliente_endereco" name="cliente_endereco" placeholder="Informe o endereço" />
									</div>
									{/* <!-- FIXME: cliente_numero_endereco --> */}
									<div className="col-md-4 mb-2">
										<label htmlFor="cliente_numero_endereco">Número</label>
										<input type="text" className="form-control form-control-user" id="cliente_numero_endereco" name="cliente_numero_endereco" placeholder="Informe o número" />
									</div>
									{/* <!-- FIXME: cliente_bairro --> */}
									<div className="col-md-4 mb-2">
										<label htmlFor="cliente_bairro">Bairro</label>
										<input type="text" className="form-control form-control-user" id="cliente_bairro" name="cliente_bairro" placeholder="Informe o bairro" />
									</div>
									{/* <!-- FIXME: cliente_complemento --> */}
									<div className="col-md-4 mb-2">
										<label htmlFor="cliente_complemento">Complemento</label>
										<input type="text" className="form-control form-control-user" id="cliente_complemento" name="cliente_complemento" placeholder="Informe o complemento" />
									</div>
									{/* <!-- FIXME: cliente_cidade --> */}
									<div className="col-md-4 mb-2">
										<label htmlFor="cliente_cidade">Cidade</label>
										<input type="text" className="form-control form-control-user" id="cliente_cidade" name="cliente_cidade" placeholder="Informe a cidade" />
									</div>
									{/* <!-- FIXME: cliente_estado --> */}
									<div className="col-md-4 mb-2">
										<label htmlFor="cliente_estado">Estado</label>
										<input type="text" className="form-control form-control-user uf" id="cliente_estado" name="cliente_estado" placeholder="Informe o estado" />
									</div>
								</div>
						</fieldset>

						{/* Alterações */}
						<fieldset className="mb-4 p-2 border">
							<legend className="font-small"><i className="fas fa-tools"></i>&nbsp;Alterações</legend>
							<div className="form-group row">
								{/* <!-- FIXME: cliente_ativo --> */}
								<div className="col-md-4 mb-2">
									<label htmlFor="cliente_ativo">Ativo</label>
									<select className="form-control custom-select" id="cliente_ativo" name="cliente_ativo">
										<option value="0">Não</option>
										<option value="1">Sim</option>
									</select>
								</div>
							</div>
						</fieldset>

						{/* Observação */}
						<div className="form-group row">
							{/* <!-- FIXME: cliente_obs --> */}
							<div className="col-12 mb-2">
								<label htmlFor="cliente_obs">Observação</label>
								<textarea className="form-control" id="cliente_obs" name="cliente_obs" placeholder="Informe a abservação"></textarea>
							</div>
						</div>

						<button title="Salvar" type="submit" className="btn btn-sm btn-primary">Salvar</button>
					</form>
				</div>
			</div>
    </Layout>
  );
};

export default Form;
