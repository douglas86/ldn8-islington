import { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";
import { Link } from "react-router-dom";

function EditLesson() {
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    content: "",
    video_url: "",
  });

  // const handleSubmit = (event) => {
  //   
  // };
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);

  const lesson_id = Number(urlParams.get("id"));

  const handleInputChange = (event, names) => {
    setInputs({ ...inputs, [names]: event.target.value });
    console.log(inputs);
  };

  useEffect(() => {
    axios.get(`https://ldn8-islington.herokuapp.com/lessons/${lesson_id}`).then(
      (res) => {
        setInputs(res.data[0]);
      },
      [lesson_id]
    );
  }, []);

  const editContent = (event) => {
    event.preventDefault();
    alert("You have submitted the edited form.");
    axios
      .put(`https://ldn8-islington.herokuapp.com/lessons/${lesson_id}`, inputs)
      .then(() => window.location="/teacher");
  };

  return (
    <div>
      <form onSubmit={(editContent)}>
        <input
          placeholder="Title"
          type="text"
          value={inputs.title}
          onChange={(event) => handleInputChange(event, "title")}
        />
        <input
          placeholder="Image Url"
          type="text"
          value={inputs.img_url}
          onChange={(event) => handleInputChange(event, "img_url")}
        />
        <input
          placeholder="Intro"
          type="text"
          value={inputs.intro}
          onChange={(event) => handleInputChange(event, "intro")}
        />
        <input
          placeholder="Summary"
          type="text"
          value={inputs.summary}
          onChange={(event) => handleInputChange(event, "summary")}
        />
        <input
          placeholder="Content"
          type="text"
          value={inputs.content}
          onChange={(event) => handleInputChange(event, "content")}
        />
        <input
          placeholder="Video URL"
          type="text"
          value={inputs.video_url}
          onChange={(event) => handleInputChange(event, "video_url")}
        />
        
        <input className="submit" type="submit" value="Edit Lesson" />
      </form>
    </div>
  );
}

export default EditLesson;
