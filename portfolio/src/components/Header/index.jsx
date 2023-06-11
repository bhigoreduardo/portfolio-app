import { useState } from "react";
import { FaBars, FaTimes, FaInfo } from "react-icons/fa";

import Sidebar from "src/components/Sidebar";
import "./Header.style.scss";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="header">
        <a href="#inicio" className="header--logo">
          Portfólio <span>.</span>
        </a>

        <nav className={`header--navbar ${showMobileMenu && "active"}`}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header--icons">
          <i
            className="header--icons-menu"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </i>
          <i
            className="header--icons-info"
            onClick={() => setShowSidebar(true)}
          >
            <FaInfo />
          </i>
        </div>
      </header>

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
}

export default Header;
