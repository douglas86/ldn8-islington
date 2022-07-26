import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import Profile from "./component/profile/Profile";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Islington Centre Learning Portal
        </Link>
      </span>
      <Link className="link" to="/Profile">
        {isAuthenticated ? <p>{user.name}</p> : null}
        My Profile
      </Link>

      {isAuthenticated ? (
        <button onClick={() => logout()}>Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
