import React from "react";

const Card = ({ LessonsData }) => {
  return LessonsData.map((lesson) => (
    <div className="card">
      <div className="top">
        <h2 className="name">{lesson.title}</h2>
      </div>
    </div>
  ));
};

export default Card;
