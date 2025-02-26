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
              window.location = "/teacher";
            });
          }
        });
      };

  const toTitles = (s) => {
  return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase().split(",")[0];
};

return (
  <form onSubmit={addContent}>
    <>
      {Object.entries(inputs).map((items, index) => (
        <div key={index}>
          <input
            placeholder={toTitles(items.toString())}
            type="text"
            onChange={(event) =>
              handleInputChange(event, items.toString().split(",")[0])
            }
          />
        </div>
      ))}
      <input
        onClick={addContent}
        className="submit-lesson"
        type="submit"
        value="Add Lesson"
      />
    </>
  </form>
);
          }
export default Form;
