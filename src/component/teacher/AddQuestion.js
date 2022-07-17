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
    setValues({ ...values, [names]: event.target.value });
  };

  const addQuestion = (event) => {
    // event.preventDefault();
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
          onChange={(event) => handleValueChange(event, "answer")}
        />
        <input
          placeholder="Option Two"
          type="text"
          value={values.answer_2}
          onChange={(event) => handleValueChange(event, "answer")}
        />
        <input
          placeholder="Option Three"
          type="text"
          value={values.answer_3}
          onChange={(event) => handleValueChange(event, "answer")}
        />
        <input
          placeholder="Option Four"
          type="text"
          value={values.answer_4}
          onChange={(event) => handleValueChange(event, "answer")}
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

