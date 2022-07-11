import React, { useEffect, useState } from "react";
// import questions from "../data.json";
import "./Quiz.css";
import NextQuestionButton from "./NextQuestionButton";
import axios from "axios";

const Quiz = ({ name }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(false);
  const [correct, setCorrect] = useState();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  // Handling netlify error where _correct_ variable never used
  console.log(correct);

  const loadData = () => {
    axios.get("https://ldn8-islington.herokuapp.com/questions").then((res) => {
      setQuestions(res.data);
    });
    axios.get("https://ldn8-islington.herokuapp.com/answers").then((res) => {
      setAnswers(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

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

  function choiceClicked(choice) {
    let newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = choice;
    setSelectedAnswers(newSelectedAnswers);
    if (choice.is_correct) {
      setCorrect(choice.id);
    }
  }

  return (
    <div>
      <h3>Hello {name} </h3>
      <h2 className="question-number">
        Question: {currentQuestion + 1}/{questions.length}
        <span className="score" style={{ color: "#3A5BA0" }}>
          Score: {calculatedScore()}
        </span>
      </h2>

      {showTotalScore ? (
        <div className="total-score">
          <h1 style={{ color: "#635666", textAlign: "center" }}>
            Quiz Ended! You Scored {calculatedScore()} Out Of {questions.length}
          </h1>
          <button onClick={() => restartQuiz()} className="restart-button">
            Restart the game
          </button>
         
        </div>
      ) : (
        <div className="question-card">
          {questions.length > 0 && (
            <h3>{questions[currentQuestion].question}</h3>
          )}
          {questions.length > 0 && questions[currentQuestion].image ? (
            <img src={questions[currentQuestion].image} alt={""} />
          ) : null}
          {questions.length > 0 && (
            <ul className="choices">
              {answers
                .filter(
                  (answer) =>
                    answer.question_id === questions[currentQuestion].id
                )
                .map((choice) => {
                  return (
                    <li
                      className="choice"
                      key={choice.id}
                      onClick={() => choiceClicked(choice)}
                      style={{
                        background:
                          selectedAnswers[currentQuestion]?.id === choice.id
                            ? "skyblue"
                            : "white",
                      }}
                    >
                      {choice.answer}
                    </li>
                  );
                })}
            </ul>
          )}
          <NextQuestionButton
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            setCorrect={setCorrect}
            questions={questions}
            setShowTotalScore={setShowTotalScore}
            disabled={selectedAnswers[currentQuestion] === undefined}
          />
        </div>
      )}
    </div>
  );
};

export default Quiz;
