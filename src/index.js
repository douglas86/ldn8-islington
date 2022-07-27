import React from "react";
import ReactDOM from "react-dom";
import { Auth0ProviderWithHistory } from "./Auth0ProviderWithHistory";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
