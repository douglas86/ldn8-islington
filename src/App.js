import React, { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import LessonsData from "./LessonsData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [lessons, setLessons] = useState(LessonsData);
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
          path="/quiz"
          element={<Quiz name={name} difficulty={difficulty} />}
        />
        <Route path="/lessons" element={<Lessons lessons={lessons} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
