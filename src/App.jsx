import React from "react";
import Navbar from "./components/Navbar";

import "./app.css";
import Home from "./pages/Home";
import LessonsData from "./LessonsData.json";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import LessonDetail from "./component/lessons/LessonDetail";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar user="" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/lessons"
            element={<Lessons LessonsData={LessonsData} />}
          />
          <Route
            path="/lessons/:id"
            element={<LessonDetail LessonsData={LessonsData} />}
          />
          <Route path="/questions/lessons/:id" element={<Quiz />} />

          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
