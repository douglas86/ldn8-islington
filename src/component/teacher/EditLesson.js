import { useState } from "react";
import axios from "axios";
import "./Form.css";

function EditLesson(props) {
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    content: "",
    video_url: "",
  });
  console.log(inputs);

  const handleInputChange = (event, names) => {
    setInputs({ ...inputs, [names]: event.target.value });
  };

  const editContent = (event) => {
    // event.preventDefault();
    const lesson_id = props.match.params.id;
    axios.get(`https://ldn8-islington.herokuapp.com/lessons${lesson_id}`)
    .then(
      (res) => {
        if (res.data.status === 200) {
          setInputs(res.data.lesson);
        }
      }, [props.match.params.id]);
  };

  return ( 
    <div>
      <form onSubmit={editContent}>
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
