import React from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <span>
            <img src="/assets/logo.png" alt="Logo" />
          </span>
        </div>
        <div className="left-side">
          <div className="nav-menu">
          <ul>
            <li>
              <Link to="">About</Link>
            </li>
            <li>
              <Link to="">Experience</Link>
            </li>
            <li>
              <Link to="">Work</Link>
            </li>
            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
          <MenuOutlined className="menu-icon" />
          </div>

          <button>Resume</button>
        </div>
      </nav>
      <div className="main-section">tahira</div>
    </header>
  );
}

export default Header;
