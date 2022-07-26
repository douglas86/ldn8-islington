import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import { forms } from "../molecule/forms";
import RichText from "./RichText";
import axios from "axios";

const Forms = ({ value }) => {
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    video_url: "",
  });
  const [content, setContent] = useState(undefined);

  const { title, img_url, intro, summary, video_url } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title, img_url, intro, summary, content, video_url };
    axios
      .post(`https://ldn8-islington.herokuapp.com/lessons`, body)
      .then((items) => {
        console.log("items", items);
      });
  };

  const handleChange = (name, e) => {
    setInputs({ ...inputs, [name]: e });
  };

  useEffect(() => {
    if (Object.keys(value).length !== 0) {
      setInputs({
        title: value.title,
        img_url: value.img_url,
        intro: value.intro,
        summary: value.summary,
        video_url: value.video_url,
      });
      setContent(value.content);
    }
  }, [value]);

  return (
    <Container>
      <Form style={{ margin: "10px" }} onSubmit={handleSubmit}>
        <>
          {Object.entries(inputs).map((items, index) => {
            return <div key={index}>{forms(items, handleChange)}</div>;
          })}
          <RichText content={content} setContent={setContent} />
        </>
        <Button varaint="primary" type="submit" style={{ marginTop: "3rem" }}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Forms;
