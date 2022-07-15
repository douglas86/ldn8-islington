import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LessonDetail.css";

const LessonDetail = ({ LessonsData }) => {
  const { id } = useParams();


  return (
    <div className="lessonContent">
      {LessonsData.filter((lesson) => lesson.title === title).map(
        (lesson, index) => (
          <div key={index} className="lessonContent">
            <h1>{lesson?.title}</h1>
            <img
              className="circle-img"
              src={lesson?.img_url}
              alt="avatar_img"
            />
            <p>{lesson?.summary}</p>
            <div>
              <h3>quiz goes here</h3>
              <Link to={`/lessons/${lesson.id}/quiz`}>Take Quiz</Link>
            </div>
          </div>
        )
      )}
     
    </div>

  return LessonsData.filter((lesson) => lesson.id === parseInt(id)).map(
    (lesson, index) => (
      <div key={index} className="lessonContent">
        <h1>{lesson?.title}</h1>
        <div className="image-container">
          <img className="image" src={lesson?.img_url} alt="avatar_img" />
        </div>
        <div className="lesson-content-container">
          <p>{lesson?.summary}</p>
        </div>

        <div>
          <h3>Quiz</h3>
          <Link to={`/questions/lessons/${lesson.id}`}>Take Quiz</Link>
        </div>
      </div>
    )

  );
};

export default LessonDetail;
