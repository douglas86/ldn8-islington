import React from "react";
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import LessonDetail from "./component/lessons/LessonDetail";
import Post from "./component/home/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  // const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
  //   useAuth0();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  // if (error) {
  //   return <div>Oops... {error.message}</div>;
  // }

  // if (isAuthenticated) {
  //   return (
  //     <div>
  //       Hello {user.name}{" "}
  //       <button onClick={() => logout({ returnTo: window.location.origin })}>
  //         Log out
  //       </button>
  //     </div>

  //   );
  // } else {
  //   return <button onClick={loginWithRedirect}>Log in</button>;
  // }
  return (
    <BrowserRouter>
      <div>
        <Navbar user="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:id" element={<LessonDetail />} />
          <Route path="/questions/lessons/:id" element={<Quiz />} />

          <Route path="/post/:id" element={<Post />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
