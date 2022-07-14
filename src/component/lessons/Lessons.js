import React from "react";
import Cards from "./Cards";
import "./Lessons.css";
import { Link } from "react-router-dom";


const Lessons = ({ LessonsData }) => {
  return (
    <div className="lesson-section">
      <Link
        to={`/teacher`}
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        Teacher
      </Link>
      <h1>lesson</h1>

      <div>
        <Cards LessonsData={LessonsData} />
      </div>
    </div>
  );
};

export default Lessons;
