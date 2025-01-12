"use client";
import Question from "@/app/ui/question";
import { useState } from "react";
import SubmitButton from "@/app/ui/submitbutton";

const questions = [
  {
    id: 1,
    imageUrl: "/question/1.png",
    answer: [
      {
        text: "A",
        isCorrect: false,
      },
      {
        text: "B",
        isCorrect: true,
      },
      {
        text: "C",
        isCorrect: false,
      },
      {
        text: "D",
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    imageUrl: "/question/1.png",
    answer: [
      {
        text: "A",
        isCorrect: true,
      },
      {
        text: "B",
        isCorrect: false,
      },
      {
        text: "C",
        isCorrect: false,
      },
      {
        text: "D",
        isCorrect: false,
      },
    ],
  },
];

export default function Test() {
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [isSummited, setSummited] = useState(false);

  const handleSelectAnswer = (questionIndex: number, answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = answerIndex;
    console.log(newSelectedAnswers);
    setSelectedAnswers(newSelectedAnswers);
  };
  const handleSubmit = () => {
    if (isSummited) {
      alert(`You can only submit once`);
      return;
    }
    let score = 0;
    selectedAnswers.forEach((answerIndex, questionIndex) => {
      if (
        answerIndex !== null &&
        questions[questionIndex].answer[answerIndex].isCorrect
      ) {
        score += 1;
      }
    });
    setSummited(true);
    alert(`Quiz finished! Your score: ${score}/${questions.length}`);
  };

  return (
    <div className="px-20 pt-20 min-h-screen flex flex-col gap-10 text-gray-700">
      {questions.map((question, index) => {
        return (
          <Question
            key={question.id}
            imageUrl={question.imageUrl}
            answers={question.answer}
            onAnswerSelected={(answerIndex) =>
              handleSelectAnswer(index, answerIndex)
            }
            selectedAnswer={selectedAnswers[index]}
            questionIndex={index}></Question>
        );
      })}
      <SubmitButton
        onClick={handleSubmit}
        disabled={selectedAnswers.includes(null)}
      />
    </div>
  );
}
