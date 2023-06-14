const Messages = () => {
  return (
    <li className="nav-item dropdown no-arrow mx-1">
      <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-envelope fa-fw"></i>
          {/* <!-- Counter - Messages --> */}
          <span className="badge badge-danger badge-counter">7</span>
      </a>
      {/* <!-- Dropdown - Messages --> */}
      <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="messagesDropdown">
          <h6 className="dropdown-header">
              Mensagens
          </h6>
          <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="/img/undraw_profile_1.svg"
                      alt="..." />
                  <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                  <div className="text-truncate">Olá gostei muito do tênis da barbie.</div>
                  <div className="small text-gray-500">Jorjão do Anabol · 58m</div>
              </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="/img/undraw_profile_2.svg"
                      alt="..." />
                  <div className="status-indicator"></div>
              </div>
              <div>
                  <div className="text-truncate">Vocês tem ainda o mascote da Lilica?</div>
                  <div className="small text-gray-500">Jurandir · 1d</div>
              </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="/img/undraw_profile_3.svg"
                      alt="..." />
                  <div className="status-indicator bg-warning"></div>
              </div>
              <div>
                  <div className="text-truncate">Meu amigo adorou o tênis!</div>
                  <div className="small text-gray-500">Jucenir · 2d</div>
              </div>
          </a>
          <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt="..." />
                  <div className="status-indicator bg-success"></div>
              </div>
              <div>
                  <div className="text-truncate">Olá, você estão aberto hoje?</div>
                  <div className="small text-gray-500">The Dog · 2s</div>
              </div>
          </a>
          <a className="dropdown-item text-center small text-gray-500" href="#">Marcar todos como visualizados</a>
      </div>
  </li>
  )
}

export default Messages