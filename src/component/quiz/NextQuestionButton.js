import React from "react";

function NextQuestionButton({
  currentQuestion,
  setCurrentQuestion,
  LessonsData,
  setShowTotalScore,
  disabled,
}) {
  const nextQuestion = () => {
    if (currentQuestion + 1 < LessonsData[0].questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowTotalScore(true);
    }
  };
  return (
    <button
      className="next-question"
      onClick={() => nextQuestion()}
      disabled={disabled}
    >
      Next Question
    </button>
  );
}

export default NextQuestionButton;
