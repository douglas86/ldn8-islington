import React from "react";
import Cards from "./Cards";

const Lessons = ({lessons}) => {
  return (
    <div className="lesson-section">
      <h1>lesson</h1>
      <div>
        <Cards lessons={lessons} />
      </div>
    </div>
  );
};

export default Lessons;
