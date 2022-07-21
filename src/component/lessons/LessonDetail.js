import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LessonDetail.css";

const LessonDetail = ({ LessonsData }) => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
 const base_url = "https://www.youtube.com/embed/";
 
  useEffect(() => {
    axios
      .get(`https://ldn8-islington.herokuapp.com/lessons/${id}`)
      .then((res) => setLessons(res.data));
  }, [id]);

  return lessons
    .filter((lesson) => lesson.id === parseInt(id))
    .map((lesson, index) => (
      <div key={index} className="lessonContent">
        <h1>{lesson?.title}</h1>
        <div className="image-container">
          <img className="image" src={lesson?.img_url} alt="avatar_img" />
        </div>
        <div className="frame">
          <iframe
            src={base_url + lesson?.video_url.slice(-11)}
            title="YouTube video player"
          ></iframe>
        </div>
        <div className="lesson-content-container">
          <p>{lesson?.summary}</p>
        </div>
        <div>
          <h3>Quiz</h3>
          <Link to={`/questions/lessons/${lesson.id}`}>Take Quiz</Link>
        </div>
      </div>
    ));
};

export default LessonDetail;
