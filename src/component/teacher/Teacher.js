import { useState, useEffect } from "react";
// import Card from "../lessons/Card";
import RenderLesson from "./RenderLesson";
import Form from "./Form";
import axios from "axios";


function Teacher() {
  const [visible, setVisible] = useState(false);
  const [lessons, setLessons] = useState([]);
 

  useEffect(() => {
    axios.get("https://ldn8-islington.herokuapp.com/lessons/").then((res) => {
      setLessons(res.data);
    });
  }, []);

  const deleteLessons = (arrLesson) => {
    //To delete from front end
    //  setAllVideos((videos) => {
    //    return videos.filter((v) => {
    //      return v.id !== arrVideo.id;
    //    });
    //  });

    // To delete from the server
    axios
      .delete(`https://ldn8-islington.herokuapp.com/lessons/${arrLesson.id}`)
      .then((res) => {
        if (res.status === 200) {
          axios
            .get("https://ldn8-islington.herokuapp.com/lessons/")
            .then((res) => {
              setLessons(res.data);
            });
        }
      });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Our Expert Teachers</h1>
      <p className="lesson-plan">
        Here you can find a wide range of full lesson plans to use in your
        secondary classroom. All of our lessons are designed around themes
        engaging and relevant to secondary learners and can be used to
        complement your school curriculum, giving students an opportunity to
        develop their English language and skills in motivating and enjoyable
        ways. Written by young learner experts from around the world, our lesson
        plans are easy to use and aim to give your students the skills and
        confidence they need to enjoy learning English.
      </p>
      <div>
        <div className="add-content">
          <p onClick={() => setVisible(true)}>Add Content</p>
          <p type="submit" onClick={() => setVisible(false)}>
            Cancel
          </p>
        </div>
        {visible && <Form />}

        <div className="wrapper">
          {lessons.map((lesson, i) => (
            <div className="lesson-card" key={i}>
              <RenderLesson
                lesson={lesson}
                isTeacher={true}
                deleteLessons={deleteLessons}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teacher;
