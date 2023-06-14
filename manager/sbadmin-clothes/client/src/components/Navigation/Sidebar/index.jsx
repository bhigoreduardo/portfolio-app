import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <ul  className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${open && "toggled"}`} id="accordionSidebar">
      {/* <!-- Sidebar - Brand --> */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon"><i className="fas fa-user"></i></div>
        <div className="sidebar-brand-text mx-3">Mini <sup>Kids</sup></div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Início --> */}
      <li className="nav-item active">
        <a className="nav-link" href="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>&nbsp;<span>Início</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading - Seções --> */}
      <div className="sidebar-heading">
          Seções
      </div>

      {/* <!-- Nav Item - Cadastros --> */}
      <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCadastros"
              aria-expanded="true" aria-controls="collapseCadastros">
              <i className="fas fa-database"></i>&nbsp;<span>Cadastros</span>
          </a>
          <div id="collapseCadastros" className="collapse" aria-labelledby="headingCadastros"
              data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Opções:</h6>
                  <a title="Gerenciar clientes" className="collapse-item" href="/clientes">
                    <i className="fas fa-user-tie"></i>&nbsp;Clientes
                  </a>
                  <a title="Gerenciar fornecedores" className="collapse-item" href="/fornecedores">
                    <i className="fas fa-user-tag"></i>&nbsp;Fornecedores
                  </a>
                  <a title="Gerenciar vendedores" className="collapse-item" href="/vendedores">
                    <i className="fas fa-user-friends"></i>&nbsp;Vendedores
                  </a>
              </div>
          </div>
      </li>

      {/* <!-- Nav Item - Estoques --> */}
      <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEstoques"
              aria-expanded="true" aria-controls="collapseEstoques">
              <i className="fas fa-box-open"></i>&nbsp;<span>Estoques</span>
          </a>
          <div id="collapseEstoques" className="collapse" aria-labelledby="headingEstoques"
              data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Opções:</h6>
                  <a title="Gerenciar marcas" className="collapse-item" href="/marcas">
                    <i className="fas fa-cubes"></i>&nbsp;Marcas
                  </a>
                  <a title="Gerenciar categories" className="collapse-item" href="/categorias">
                    <i className="fab fa-buffer"></i>&nbsp;Categorias
                  </a>
                  <a title="Gerenciar produtos" className="collapse-item" href="/produtos">
                    <i className="fas fa-boxes"></i>&nbsp;Produtos
                  </a>
              </div>
          </div>
      </li>

      {/* <!-- Nav Item - Financeiro --> */}
      <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFinanceiro"
              aria-expanded="true" aria-controls="collapseFinanceiro">
              <i className="fas fa-wallet"></i>&nbsp;<span>Financeiro</span>
          </a>
          <div id="collapseFinanceiro" className="collapse" aria-labelledby="headingFinanceiro"
              data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Opções:</h6>
                  <a title="Gerenciar contas à pagar" className="collapse-item" href="/contas-pagar">
                    <i className="fas fa-book"></i>&nbsp;Contas à pagar
                  </a>
                  <a title="Gerenciar contas à receber" className="collapse-item" href="/contas-receber">
                    <i className="fas fa-hand-holding-usd"></i>&nbsp;Contas à receber
                  </a>
                  <a title="Gerenciar formas de pagamento" className="collapse-item" href="/formas-pagamento">
                    <i className="fas fa-credit-card"></i>&nbsp;Formas de pagamento
                  </a>
              </div>
          </div>
      </li>

      {/* <!-- Nav Item - Relatórios --> */}
      <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseRelatorios"
              aria-expanded="true" aria-controls="collapseRelatorios">
              <i className="fas fa-search-dollar"></i>&nbsp;<span>Relatórios</span>
          </a>
          <div id="collapseRelatorios" className="collapse" aria-labelledby="headingRelatorios"
              data-parent="#accordionSidebar">
              <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Opções:</h6>
                  <a title="Gerenciar relatório de contas à pagar" className="collapse-item" href="/relatorios-contas-pagar">
                    <i className="fas fa-book"></i>&nbsp;Contas à pagar
                  </a>
                  <a title="Gerenciar relatório de contas à receber" className="collapse-item" href="/relatorios-contas-receber">
                    <i className="fas fa-hand-holding-usd"></i>&nbsp;Contas à receber
                  </a>
                  <a title="Gerenciar relatório de vendas" className="collapse-item" href="/relatorios-vendas">
                    <i className="fas fa-shopping-cart"></i>&nbsp;Vendas
                  </a>
              </div>
          </div>
      </li>

      {/* <!-- Nav Item - Vendas --> */}
      <li className="nav-item">
        <a title="Gerenciar vendas" className="nav-link" href="/vendas">
          <i className="fas fa-shopping-cart"></i>&nbsp;<span>Vendas</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading - Sistema --> */}
      <div className="sidebar-heading">
        Sistema
      </div>

      {/* <!-- Nav Item - Usuários --> */}
      <li className="nav-item">
        <a title="Gerenciar usuários" className="nav-link" href="/usuarios">
          <i className="fas fa-users"></i>&nbsp;<span>Usuários</span>
        </a>
      </li>

      {/* <!-- Nav Item - Sistema --> */}
      <li className="nav-item">
          <a title="Gerenciar Sistema" className="nav-link" href="/sistema">
            <i className="fas fa-cogs"></i><span>Sistema</span>
          </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block"/>

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" onClick={() => setOpen(!open)} id="sidebarToggle"></button>
      </div>

      {/* <!-- Sidebar Message --> */}
      <div className="sidebar-card d-none d-lg-flex">
          <img className="sidebar-card-illustration mb-2" src="/img/undraw_rocket.svg" alt="..." />
          <p className="text-center mb-2">Mini Kids <strong>Admin</strong> Kids!</p>
      </div>
    </ul>
  );
}

export default Sidebar;
