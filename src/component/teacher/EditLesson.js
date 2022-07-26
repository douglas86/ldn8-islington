import { useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";
import RichText from "./RichText";

function EditLesson() {
  //const [id, setId] = useState("")
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    // content: "",
    video_url: "",
  });
  const [content, setContent] = useState("");
  const { title, img_url, intro, summary, video_url } = inputs;
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
        //console.log(res)
        const { title, img_url, intro, summary, content, video_url } = res.data[0]
       // setId(id)
        setInputs({
          title,
          img_url,
          intro,
          summary,
          video_url,
        });
        setContent(content)
      });
  }, [lesson_id]);

   //console.log("content", content);

  const editContent = (event) => {
    event.preventDefault();
    //add id,
    const body = { title, img_url, intro, summary, content, video_url };
    alert("You have submitted the edited form.");

    axios
      .put(`https://ldn8-islington.herokuapp.com/lessons/${lesson_id}`, body)
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
      <RichText content={content} setContent={setContent} />
      <button className="submit" type="submit">
        Edit Lesson
      </button>
    </form>
  );
}

export default EditLesson;
/*

*/
