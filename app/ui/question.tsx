// components/Question.tsx

import React from "react";
import Answer from "./answer";
import Image from "next/image";

interface QuestionProps {
  imageUrl: string;
  answers: { text: string; isCorrect: boolean }[];
  onAnswerSelected: (index: number) => void;
  selectedAnswer: number | null;
  questionIndex: number;
}

const Question: React.FC<QuestionProps> = ({
  imageUrl,
  answers,
  onAnswerSelected,
  selectedAnswer,
  questionIndex,
}) => {
  return (
    <div className="border rounded  bg-gray-50 flex">
      <div className="ml-4 mr-8 mt-4 shadow-md w-[38px] h-[38px] rounded-full flex justify-center items-center bg-white">
        {questionIndex + 1}
      </div>
      <Image
        src={imageUrl}
        alt="Question"
        className="mb-4 mr-[26px]"
        width={510}
        height={350}
      />
      <div className="border-l-2 border-dashed bg-indigo-50 flex flex-col justify-center items-center gap-5 p-6">
        {answers.map((answer, index) => (
          <Answer
            key={index}
            content={answer.text}
            isSelected={selectedAnswer === index}
            onSelect={() => onAnswerSelected(index)}
            name={`question-${questionIndex}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
