import React from "react";
import Cards from "./Cards";

const Lessons = ({ LessonsData }) => {
  return (
    <div className="lesson-section">
      <h1>lesson</h1>
      <div>
        <Cards LessonsData={LessonsData} />
      </div>
    </div>
  );
};

export default Lessons;
