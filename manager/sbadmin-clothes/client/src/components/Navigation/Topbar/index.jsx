import Alerts from "./Alerts";
import Messages from "./Messages";
import Profile from "./Profile";

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) --> */}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
      </button>

      {/* <!-- Topbar Search --> */}
      <form
          className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Encontrar produto por nome, sku, descrição..." aria-label="Search" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                  </button>
              </div>
          </div>
      </form>

      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li className="nav-item dropdown no-arrow d-sm-none">
              <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-search fa-fw"></i>
              </a>
              {/* <!-- Dropdown - Messages --> */}
              <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small" placeholder="Encontrar produto por nome, sku, descrição..." aria-label="Search" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                              <button className="btn btn-primary" type="button">
                                  <i className="fas fa-search fa-sm"></i>
                              </button>
                          </div>
                      </div>
                  </form>
              </div>
          </li>

          {/* <!-- Nav Item - Alerts --> */}
          <Alerts />

          {/* <!-- Nav Item - Messages --> */}
          <Messages />

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <Profile />
      </ul>
  </nav>
  )
};

export default Topbar;
