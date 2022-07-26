import { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";

function EditLesson() {

  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
   content: "",
    video_url: "",
  });

  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const lesson_id = Number(urlParams.get("id"));

  const handleInputChange = (event, names) => {
    setInputs({ ...inputs, [names]: event.target.value });
   // console.log(inputs);
  };

  useEffect(() => {
    axios
      .get(`https://ldn8-islington.herokuapp.com/lessons/${lesson_id}`)
      .then((res) => {
       
        const { title, img_url, intro, summary, content, video_url } = res.data[0]
      
        setInputs({
          title,
          img_url,
          intro,
          summary,
          content,
          video_url,
        });
       
      });
  }, [lesson_id]);

  const editContent = (event) => {
    event.preventDefault();
  
    alert("You have submitted the edited form.");

    axios
      .put(`https://ldn8-islington.herokuapp.com/lessons/${lesson_id}`, inputs)
      .then(() => (window.location = "/teacher"));
  };

   const toTitles = (s) => {
     return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase().split(",")[0];
   };

  return (
    <form onSubmit={editContent}>
      {Object.entries(inputs).map((items, index) => (
        <div key={index}>
          <textarea
            placeholder={toTitles(items.toString())}
            type="text"
            value={items.toString().split(",")[1]}
            onChange={(event) =>
              handleInputChange(event, items.toString().split(",")[0])
            }
          />
        </div>
      ))}
      <button className="submit" type="submit">
        Edit Lesson
      </button>
    </form>
  );
}

export default EditLesson;
/*

*/
