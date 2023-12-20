"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import questionsData from './hardquestions';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<{ questionId: number; userAnswer: string }>>([]);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questions, setQuestions] = useState(questionsData.questions);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);


  useEffect(() => {
    // Shuffle the questions when the component mounts
    const shuffledQuestions = shuffleArray(questionsData.questions);
    setQuestions(shuffledQuestions);
  }, []);

  const shuffleArray = (array: Array<any>) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerClick = (selectedAnswer: string) => {
    const currentQuestion = questions[currentQuestionIndex];

    // Check if the question has already been answered
    if (userAnswers.some(answer => answer.questionId === currentQuestion.id)) {
      return;
    }

    // Update the selected answer
    setSelectedAnswer(selectedAnswer);

    // Check if the selected answer is correct
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    // Show the correct answer
    setShowCorrectAnswer(true);

    // Update the score and store the user's answer
    if (isCorrect) {
      setScore(score + 1);
    }

    // Store the user's answer
    setUserAnswers(prevUserAnswers => [
      ...prevUserAnswers,
      { questionId: currentQuestion.id, userAnswer: selectedAnswer },
    ]);
  };

  const handleNextButtonClick = () => {
    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // Clear the selected answer and hide the correct answer when moving to the next question
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className="">
        <div className="qcss">
          <h2 className="font-kulitan text-black">{currentQuestion.question}</h2>
        </div>
        <br></br>

        <div className="qcont">
          <div className="mt-4">
          {showCorrectAnswer && (
              <p className="text-green-500 font-bold">
                Correct Answer: {currentQuestion.correctAnswer}
              </p>
            )}
            <div className="grid grid-cols-2 gap-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={`button-choice ${selectedAnswer === option ? 'clicked' : ''} ${userAnswers.some(answer => answer.questionId === currentQuestion.id) ? 'disabled' : ''}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNextButtonClick}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
            style={{ color: 'white' }}
            disabled={!userAnswers.some(answer => answer.questionId === currentQuestion.id)}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex justify-center items-center relative h-[49px]">
          <div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
          <Link href="levels" className="absolute left-5 z-10">
            <BackArrow />
          </Link>
          <p className="font-kulitan text-[20px] z-10 text-white">pa g su la t</p>
        </div>
<div>
  <h1 className="titleqz">NANU YA INI?</h1>
  <h3 className="subtitleqz">What is this?</h3>
</div>
        {currentQuestionIndex < questions.length ? (
          renderQuestion()
        ) : (
          <div className="flex justify-center items-center h-screen pb-20">
            <p className="text-2xl font-bold text-black">Quiz completed!</p>
            <p className="mt-4 text-black">Your score: {score}/{questions.length}</p>
          </div>
        )}
      </div>
    </main>
  );
}
