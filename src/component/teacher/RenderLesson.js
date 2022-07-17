import React from "react";
import "./RenderLesson.css";
import { Link } from "react-router-dom";
const RenderLesson = ({ lesson, isTeacher, deleteLessons}) => {
  return (
    <section className="lesson-card">
      <h2>{lesson.title}</h2>
      <a href={lesson.img_url}>
        <img
          style={{ width: "190px", height: "70px" }}
          src={lesson.img_url}
          alt={""}
        />
      </a>
      <h5>{lesson.intro}</h5>
      <p>{lesson.summary}</p>
      <p>{lesson.content}</p>
      <iframe
        src={`https://www.youtube.com/embed/${lesson.video_url.split("v=")[1]}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        {isTeacher && (
          <button className="btn-1" onClick={() => deleteLessons(lesson)}>
            Delete
          </button>
        )}
        {isTeacher && (
          <button
            style={{ backgroundColor: "#1a8731" }}
            className="btn-2"
          >
            <Link to={`/edit-lesson/${lesson.id}?id=${lesson.id}`}>Edit</Link>
          </button>
        )}
      </div>
    </section>
  );
};
export default RenderLesson;
