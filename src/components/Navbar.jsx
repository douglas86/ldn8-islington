import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Islington Centre Learning Portal
        </Link>
      </span>
      {isAuthenticated ? <p>{user.name}</p> : null}
      {isAuthenticated ? (
        <button onClick={() => logout()}>Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
};

export default Navbar;
