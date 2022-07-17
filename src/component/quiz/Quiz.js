import React, { useState } from "react";
//import { useParams } from "react-router-dom";
import "./Quiz.css";
import NextQuestionButton from "./NextQuestionButton";
import LessonsData from "../../LessonsData.json";
//import axios from "axios";

const Quiz = () => {

  // const { id } = useParams();


  //const { id } = useParams();

  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);
  //const [questions, setQuestions] = useState([]);


  // Handling netlify error where _correct_ variable never used

  // console.log(correct);

  // useEffect(() => {
  //   loadData();
  // }, [id]); // resolved infinite rerender

  // const loadData = (id) => {
  //   axios
  //     .get(`https://ldn8-islington.herokuapp.com/questions/lessons/${id}`)
  //     .then((res) => setQuestions(res.data))
  //     .catch((error) => console.log(error.message));
  // };

  function calculatedScore() {
    let correctAnswers = selectedAnswers.filter((selectedAnswer, index) => {
      return selectedAnswer.is_correct;
    });
    return correctAnswers.length;
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setShowTotalScore(false);
  }

  function choiceClicked(ans) {
    console.log("ans", selectedAnswers);
    let newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = ans;
    setSelectedAnswers(newSelectedAnswers);
  }

  return (
    <div style={{ margin: "40px" }}>
      <h2 className="question-number">
        Question: {currentQuestion + 1}/{LessonsData[0].questions.length}
        <span className="score" style={{ color: "tomato" }}>
          Score: {calculatedScore()}
        </span>
      </h2>

      {showTotalScore ? (
        <div className="total-score">
          <h1 style={{ color: "tomato", textAlign: "center" }}>
            Quiz Ended! You Scored {calculatedScore()} Out Of{" "}
            {LessonsData[0].questions.length}
          </h1>
          <button onClick={() => restartQuiz()} className="restart-button">
            Restart the game
          </button>
        </div>
      ) : (
        <div className="question-card">
          <h3>{LessonsData[0].questions[currentQuestion].question}</h3>
          <img src={LessonsData[0].questions[currentQuestion].image} alt="" />
          <ul className="choices">
            {LessonsData[0].questions[currentQuestion].answers.map((ans) => {
              return (
                <li
                  className="choice"
                  key={ans.id}
                  onClick={() => choiceClicked(ans)}
                >
                  {ans.answer}
                </li>
              );
            })}
          </ul>

          <NextQuestionButton
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            LessonsData={LessonsData}
            setShowTotalScore={setShowTotalScore}
            disabled={selectedAnswers[currentQuestion] === undefined}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
