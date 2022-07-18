import React from "react";
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import LessonDetail from "./component/lessons/LessonDetail";
import Post from "./component/home/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar user="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/lessons"
            element={<Lessons />}
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
