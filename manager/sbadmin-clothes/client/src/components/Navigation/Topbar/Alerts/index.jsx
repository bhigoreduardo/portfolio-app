const Alerts = () => {
  return (
    <li className="nav-item dropdown no-arrow mx-1">
      <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-bell fa-fw"></i>
          {/* <!-- Counter - Alerts --> */}
          <span className="badge badge-danger badge-counter">3+</span>
      </a>
      {/* <!-- Dropdown - Alerts --> */}
      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="alertsDropdown">
          <h6 className="dropdown-header">
              Alertas
          </h6>
          <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                  <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white"></i>
                  </div>
              </div>
              <div>
                  <div className="small text-gray-500">Dezembro 12, 2019</div>
                  <span className="font-weight-bold">R$49,99 à receber da Creidi!</span>
              </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                  <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white"></i>
                  </div>
              </div>
              <div>
                  <div className="small text-gray-500">Dezembro 7, 2019</div>
                  R$290,29 pagamento pendente para o Jorjão!
              </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                  <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
              </div>
              <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  R$190,00 venceu a 2 dias pendente para o Jurandir.
              </div>
          </a>
          <a className="dropdown-item text-center small text-gray-500" href="#">Marcar todos como visualizados</a>
      </div>
  </li>
  )
}

export default Alerts