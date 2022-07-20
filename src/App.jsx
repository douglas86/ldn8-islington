import React from "react";
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import Profile from "./component/profile/Profile";
import LessonDetail from "./component/lessons/LessonDetail";
import Post from "./component/home/Post";
import { Route, BrowserRouter, Routes, useNavigate  } from 'react-router-dom';
import { Auth0Provider, withAuthenticationRequired  } from '@auth0/auth0-react';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <Routes>
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
        </Routes>
      </Auth0ProviderWithRedirectCallback>
      <div>
        <Navbar user="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/lessons"
            element={<ProtectedRoute component={Lessons} />}
          />
          <Route
            path="/lessons/:id"
            element={<LessonDetail />}
          />
          <Route path="/questions/lessons/:id" element={<Quiz />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
