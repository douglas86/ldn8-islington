import React from "react";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";

const LessonDetail = ({ LessonsData }) => {
  const { title } = useParams();

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
              {/* <Link to={`/lessons/${lesson.id}/quiz`}>Take Quiz</Link> */}
              {/* <Routes>
                <Route path="quiz" element={<Quiz />} />
              </Routes> */}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LessonDetail;
