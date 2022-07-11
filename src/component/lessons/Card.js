import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Card = ({ lessons }) => {
  return lessons.map((lesson, index) => (
    <div key={index} className="card">
      <div className="top">
        <h2 className="name">{lesson.title}</h2>
        <img className="circle-img" src={lesson.img_url} alt="avatar_img" />
      </div>
      <div className="bottom">
        {/* <p className="info">{lesson.intro}</p> */}
        <p className="info">{lesson.summary}</p>
      </div>
      <Button variant="contained" style={{ margin: "0 20px" }}>
        <Link to={`/lessons/${lesson.title}`}>View Lesson</Link>
      </Button>
    </div>
  ));
};

export default Card;
