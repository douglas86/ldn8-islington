//import { appBarClasses } from "@mui/material";
import axios from "axios";
import { useState } from "react";

import "./Form.css";

function AddQuestion() {
  const [values, setValues] = useState({
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
  });

  const handleValueChange = (event, names) => {
    console.log("event", event.target.value);
    setValues({ ...values, [names]: event.target.value });
  };

  const addQuestion = (event) => {
    event.preventDefault();

    const { question, answer_1, answer_2, answer_3, answer_4 } = values;
    console.log("answers", {
      question,
      answers: [
        { answer: answer_1, is_correct: false },
        { answer: answer_2, is_correct: false },
        { answer: answer_3, is_correct: true },
        { answer: answer_4, is_correct: false },
      ],
    });
    axios
      .post("http://localhost:6714/questions", {
        question,
        answers: [
          { answer: answer_1, is_correct: false },
          { answer: answer_2, is_correct: false },
          { answer: answer_3, is_correct: true },
          { answer: answer_4, is_correct: false },
        ],
      })
      .then((res) => console.log("res", res));
  
  };

  return (
    <div>
      <form onSubmit={addQuestion}>
        <input
          placeholder="Question"
          type="text"
          value={values.question}
          onChange={(event) => handleValueChange(event, "question")}
          required
        />

        <input
          placeholder="Option One"
          type="text"
          value={values.answer_1}
          onChange={(event) => handleValueChange(event, "answer_1")}
        />
        <input
          placeholder="Option Two"
          type="text"
          value={values.answer_2}
          onChange={(event) => handleValueChange(event, "answer_2")}
        />
        <input
          placeholder="Option Three"
          type="text"
          value={values.answer_3}
          onChange={(event) => handleValueChange(event, "answer_3")}
        />
        <input
          placeholder="Option Four"
          type="text"
          value={values.answer_4}
          onChange={(event) => handleValueChange(event, "answer_4")}
        />

        <input
          onClick={addQuestion}
          className="submit"
          type="submit"
          value="Add question"
        />
      </form>
    </div>
  );
}

export default AddQuestion;
