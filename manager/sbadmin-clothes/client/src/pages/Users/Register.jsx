import Layout from "src/components/Layout";

const Register = () => {
  return (
    <Layout>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
            <a title="Voltar" href="/usuarios" className="btn btn-sm btn-success float-right">
                <i className="fas fa-arrow-left"></i>&nbsp;Voltar
            </a>
        </div>
        <div className="card-body">
            <form>
                <div className="form-group row">
                    {/* <!-- FIXME: fist_name --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="first_name">Nome</label>
                        <input type="text" className="form-control form-control-user" id="first_name" name="first_name"
                        placeholder="Informe o nome" />
                    </div>
                    {/* <!-- FIXME: last_name --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="last_name">Sobrenome</label>
                        <input type="text" className="form-control form-control-user" id="last_name" name="last_name"
                        placeholder="Informe o sobrenome" />
                    </div>
                    {/* <!-- FIXME: email --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control form-control-user" id="email" name="email"
                        placeholder="Informe o e-mail (login)" />
                    </div>
                    {/* <!-- FIXME: username --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="username">Usuário</label>
                        <input type="username" className="form-control form-control-user" id="username" name="username"
                        placeholder="Informe o nome de usuário" />
                    </div>
                    {/* <!-- FIXME: active --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="active">Ativo</label>
                        <select className="form-control custom-select" id="active" name="active">
                            <option value="0">Inativo</option>
                            <option value="1">Ativo</option>
                        </select>
                    </div>
                    {/* <!-- FIXME: group --> */}
                    <div className="col-md-4 mb-2">
                        <label htmlFor="group">Perfil</label>
                        <select className="form-control custom-select" id="group" name="group">
                            <option value="2">Vendedor</option>
                            <option value="1">Administrador</option>
                        </select>
                    </div>
                    {/* <!-- FIXME: password --> */}
                    <div className="col-md-6 mb-2">
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control form-control-user" id="password" name="password"
                        placeholder="Informe a senha" />
                    </div>
                    {/* <!-- FIXME: repeat_password --> */}
                    <div className="col-md-6 mb-2">
                        <label htmlFor="repeat_password">Repetir Senha</label>
                        <input type="password" className="form-control form-control-user" id="repeat_password" name="repeat_password"
                        placeholder="Repita a senha" />
                    </div>
                </div>

                <button title="Salvar dados" type="submit" className="btn btn-sm btn-primary">Salvar dados</button>
            </form>
        </div>
    </div>
    </Layout>
  )
}

export default Register