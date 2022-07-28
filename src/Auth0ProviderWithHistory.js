import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const onRedirectCallback = (state) => {
    navigate(state?.returnTo || window.location.pathname);
  };

  const url = `https://62e2649b8691ce771aeda5b4--cosmic-tapioca-d01a03.netlify.app`;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={`https://62e2649b8691ce771aeda5b4--cosmic-tapioca-d01a03.netlify.app/teacher`}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
