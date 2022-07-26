import { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import { forms } from "../molecule/forms";
import RichText from "./RichText";
import axios from "axios";

const Forms = () => {
  const [inputs, setInputs] = useState({
    title: "",
    img_url: "",
    intro: "",
    summary: "",
    video_url: "",
  });
  const [content, setContent] = useState(undefined);
  const initialValue = "";

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

  return (
    <Container>
      <Form
        style={{
          justifyContent: "center",
          margin: "auto",
        }}
        onSubmit={handleSubmit}
      >
        <>
          {Object.entries(inputs).map((items, index) => {
            return <div key={index}>{forms(items, handleChange)}</div>;
          })}
          <RichText
            content={content}
            setContent={setContent}
            initialValue={initialValue}
          />
        </>
        <Button variant="primary" type="submit" style={{ marginTop: "3rem" }}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Forms;
