import React from "react";
import Navbar from "./component/header/Navbar";
import Home from "./component/home/Home";
import LessonsData from "./LessonsData.json";
import Quiz from "./component/quiz/Quiz";
import Lessons from "./component/lessons/Lessons";
import LessonDetail from "./component/lessons/LessonDetail";
<<<<<<< HEAD

import Teacher from "./component/teacher/Teacher";
import Footer from "./component/footer/Footer";
import EditLesson from "./component/teacher/EditLesson";



=======
import Post from "./component/home/Post";
>>>>>>> 7e4d17aea0fc9a792f6154eeaee06d42da53b3b2
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
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
=======
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
>>>>>>> 7e4d17aea0fc9a792f6154eeaee06d42da53b3b2
    </BrowserRouter>
  );
};

export default App;
