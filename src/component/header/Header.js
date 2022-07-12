import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Islington Learning App</h1>
      <nav>
        <NavLink className="nav-link" to="/lessons">
          Lessons
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
