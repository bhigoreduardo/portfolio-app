/* eslint-disable react/prop-types */
import Sidebar from "src/components/Navigation/Sidebar";
import Topbar from "src/components/Navigation/Topbar";
import Footer from "src/components/Navigation/Footer";
import Dropdown from "src/components/Cards/Dropdown";

const Layout = ({ children }) => {
  return (
    <main id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">{children}</div>
          </div>

          <Footer />
        </div>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>

      {/* <!-- Logout Modal--> */}
      <Dropdown />
    </main>
  )
}

export default Layout