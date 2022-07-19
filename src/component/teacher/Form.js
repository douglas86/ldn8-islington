import { useState } from "react";
import axios from "axios";
import "./Form.css"

function Form({setLessons}) {
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    content: "",
    video_url: "",
  });
  
  const handleInputChange = (event, names) => {
    setInputs({ ...inputs, [names]: event.target.value });
  };

  const addContent = (event) => {
    event.preventDefault();
    axios
      .post("https://ldn8-islington.herokuapp.com/lessons", inputs)
      
      .then((res) => {
        if (res.status === 200) {
          axios
            .get("https://ldn8-islington.herokuapp.com/lessons")
            .then((res) => {
             setLessons(res.data);
             setInputs({
               title: "",
               img_url: "",
               intro: "",
               summary: "",
               content: "",
               video_url: "",
             });
            });
          }
        });
      };

  return (
    <div>
      <form onSubmit={addContent}>
        <input
          placeholder="Title"
          type="text"
          value={inputs.title}
          onChange={(event) => handleInputChange(event, "title")}
          required
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

        <input
          onClick={addContent}
          className="submit"
          type="submit"
          value="Add Lesson"
        />
      </form>

    </div>
  );
}

export default Form;
