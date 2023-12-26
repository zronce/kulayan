"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import questionsData from './s3q';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<{ questionId: number; userAnswer: string }>>([]);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [questions, setQuestions] = useState(questionsData.questions);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [totalQuestions, setTotalQuestions] = useState(questions.length);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);


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
    // Increment progress
    setCurrentProgress(currentProgress + 1);
  
    // Check if the quiz is completed
    if (currentQuestionIndex + 1 === totalQuestions) {
      setQuizCompleted(true);
    }
  
    // Clear the selected answer and hide the correct answer when moving to the next question
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
  };
  
  const handleRestartButtonClick = () => {
    // Reset quiz state
    setCurrentQuestionIndex(0);
    setCurrentProgress(0);
    setUserAnswers([]);
    setScore(0);
    setSelectedAnswer(null);
    setShowCorrectAnswer(false);
    setQuizCompleted(false);
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
            {/* Progress bar and numbering */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">Question {currentProgress + 1} of {totalQuestions}</div>
              <div className="flex items-center">
                <div className="w-full bg-gray-300 h-2 rounded-md overflow-hidden">
                  <div
                    className="bg-green-500 h-full"
                    style={{ width: `${(currentProgress / totalQuestions) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {showCorrectAnswer && (
              <p className="answerdp">
                Answer = {currentQuestion.correctAnswer}
              </p>
            )}

<br></br>
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
          <div className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      STAGE 3
    </div>
        </div>

        {currentQuestionIndex < questions.length ? (
          renderQuestion()
        ) : (
          <div className="flex justify-center items-center h-screen pb-20">
            <p className="text-2xl font-bold text-black">Quiz completed!</p>
            <p className="mt-4 text-black">Your score: {score}/{questions.length}</p>
            <button
          onClick={handleRestartButtonClick}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          style={{ color: 'white' }}
        >
        </button>
        <Link href="stage3">
              <button className="stage3btn">Stage 2</button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
