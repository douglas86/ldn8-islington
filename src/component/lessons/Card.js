import React, {useEffect, useState} from "react";
import "./Card.css";

import { Link } from "react-router-dom";
import axios from "axios";

const Card = () => {
const [lessons, setLessons] = useState([]);

      useEffect(() => {
        axios
          .get(`https://ldn8-islington.herokuapp.com/lessons`)
          .then((res) => {
            setLessons(res.data);
          })
          .catch((error) => console.log(error.message));
      }, []);
      
  return lessons.map((lesson, index) => (
    <div key={index} className="card">

   
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

      <span className="title">{lesson?.title}</span>

      <img className="image-card" src={lesson?.img_url} alt="avatar_img" />

      <p className="desc">{lesson?.summary}</p>
      <button className="cardButton">
        <Link className="link" to={`/lessons/${lesson.id}`}>
          View Lesson
        </Link>
      </button>

    </div>
  ));
};

export default Card;
