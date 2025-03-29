import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

// import QuestionTimer from "./QuestionTimer";
// import Answers from "./Answers";

export default function Quiz() {
  // const [activeQuestion, setActiveQuestion] = useState(0)

  // const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  // const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const activeQuestionIdex = userAnswers.length;
  // answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIdex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      // setAnswerState("answered");
      setUserAnswers((previousUserAnswers) => {
        return [...previousUserAnswers, selectedAnswer];
      });
      // setTimeout(() => {
      //   if (selectedAnswer === QUESTIONS[activeQuestionIdex].answers[0]) {
      //     setAnswerState("correct");
      //   } else {
      //     setAnswerState("wrong");
      //   }
      //   setTimeout(() => {
      //     setAnswerState("");
      //   }, 2000);
      // }, 1000);
    },
    []
    // [activeQuestionIdex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      // <div id="summary">
      //   <img src={quizCompleteImg} alt="" />
      //   <h2>Quiz Complete</h2>
      // </div>
    
    <Summary userAnswers={userAnswers}/>)
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIdex}
        index={activeQuestionIdex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
