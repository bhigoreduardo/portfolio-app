/* eslint-disable react/prop-types */
import { FaTimes } from "react-icons/fa";

import Social from "src/components/Social";
import "./Sidebar.style.scss";

function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <section className={`sidebar ${showSidebar && "active"}`}>
      <span className="sidebar--close" onClick={() => setShowSidebar(false)}>
        <FaTimes />
      </span>
      <Social />
    </section>
  );
}

export default Sidebar;
