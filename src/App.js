import React, { useState } from "react";
import "./App.css";
import LessonsData from "./LessonsData.json";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import LessonDetail from "./component/lessons/LessonDetail";

import Teacher from "./component/teacher/Teacher";
import Footer from "./component/footer/Footer";
import EditLesson from "./component/teacher/EditLesson";



import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              name={name}
              setName={setName}
              setDifficulty={setDifficulty}
              difficulty={difficulty}
            />
          }
        />
        <Route
          path="/questions/lessons/:id"
          element={<Quiz name={name} difficulty={difficulty} />}
        />
        <Route
          path="/lessons"
          element={<Lessons LessonsData={LessonsData} />}
        />
        <Route
          path="/lessons/:id"
          element={<LessonDetail LessonsData={LessonsData} />}
        />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/edit-lesson/:id" element={<EditLesson />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
