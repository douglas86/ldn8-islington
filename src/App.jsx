import React from "react";
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import LessonDetail from "./component/lessons/LessonDetail";
import Teacher from "./component/teacher/Teacher";
// import Footer from "./component/footer/Footer";
import EditLesson from "./component/teacher/EditLesson";




import Post from "./component/home/Post";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions/lessons/:id" element={<Quiz />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonDetail />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/edit-lesson/:id" element={<EditLesson />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
