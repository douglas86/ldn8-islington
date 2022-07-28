import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
//import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

// import Profile from "../components/Profile";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <Link className="link" to="/">
            <h2>Islington Centre Learning Portal</h2>
          </Link>
        </div>

        <ul className="nav-menu">
          <Link className="link" to="/Profile">
            {isAuthenticated ? <li>Welcome {user.name}</li> : null}
          </Link>
          <Link className="link" to="/lessons">
            <li>Lessons</li>
          </Link>
          <Link className="link" to="/teacher">
            <li>Admin</li>
          </Link>
        </ul>

        <div className="nav-icon">
          {isAuthenticated ? (
            <button className="log-btn" onClick={() => logout()}>
              Log Out
            </button>
          ) : (
            <button className="log-btn" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </div>
        <span>
          <div className="hamburger" onClick={handleNav}>
            {!nav ? (
              <HiOutlineMenuAlt4 style={{ color: "#000" }} className="icon" />
            ) : (
              <AiOutlineClose style={{ color: "#000" }} className="icon" />
            )}
          </div>

          <div className={nav ? "mobile-menu active" : "mobile-menu"}>
            <ul className="mobile-nav">
              <Link
                to="/lessons"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>Lessons</li>
              </Link>
              <Link
                to="/teacher"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li>Admin</li>
              </Link>
            </ul>
          </div>
        </span>
        {/* <Link className="link" to="/Profile">
          {isAuthenticated ? <p>{user.name}</p> : null}
          My Profile
        </Link>

        {isAuthenticated ? (
          <button onClick={() => logout()}>Log Out</button>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
