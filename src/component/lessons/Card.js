import React from "react";
import "./Card.css";

import { Link } from "react-router-dom";

const Card = ({ LessonsData}) => {
    
  return LessonsData.map((lesson, index) => (
    <div key={index} className="card">
<<<<<<< HEAD
   
      <div className="img-container">
        <img className="circle-img" src={lesson?.img_url} alt="avatar_img" />
      </div>
      <div className="text-container">
        <h2 className="name">{lesson?.title}</h2>
        {/* <p className="info">{lesson.intro}</p> */}
        <div className="inner-text-container">
          <div className="lesson-summary">{lesson?.summary}</div>
          <Button variant="contained" style={{ margin: "0 20px" }}>
            <Link
              to={`/lessons/${lesson.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              View Lesson
            </Link>
          </Button>
        </div>
      </div>

      <div></div>
=======
      <span className="title">{lesson?.title}</span>

      <img className="image-card" src={lesson?.img_url} alt="avatar_img" />

      <p className="desc">{lesson?.summary}</p>
      <button className="cardButton">
        <Link className="link" to={`/lessons/${lesson.id}`}>
          View Lesson
        </Link>
      </button>
>>>>>>> 7e4d17aea0fc9a792f6154eeaee06d42da53b3b2
    </div>
  ));
};

export default Card;
