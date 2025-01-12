"use client";
import Question from "@/app/ui/question";
import { useState } from "react";
import SubmitButton from "@/app/ui/submitbutton";
import Image from "next/image";

const questions1 = [
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

const questions2 = [
  {
    id: 1,
    imageUrl: "/question/2.png",
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
    imageUrl: "/question/2.png",
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
  const [quiz1Answer, setquiz1Answer] = useState<(number | null)[]>(
    Array(questions1.length).fill(null)
  );
  const [quiz2Answer, setquiz2Answer] = useState<(number | null)[]>(
    Array(questions2.length).fill(null)
  );
  const [isSummited, setSummited] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState("quiz1");

  const handleSelectAnswer2 = (questionIndex: number, answerIndex: number) => {
    const newquiz2Answer = [...quiz2Answer];
    newquiz2Answer[questionIndex] = answerIndex;
    console.log(newquiz2Answer);
    setquiz2Answer(newquiz2Answer);
  };

  const handleSelectAnswer1 = (questionIndex: number, answerIndex: number) => {
    const newquiz1Answer = [...quiz1Answer];
    newquiz1Answer[questionIndex] = answerIndex;
    console.log(newquiz1Answer);
    setquiz1Answer(newquiz1Answer);
  };
  const handleSubmit = () => {
    if (isSummited) {
      alert(`You can only submit once`);
      return;
    }
    let score = 0;
    quiz1Answer.forEach((answerIndex, questionIndex) => {
      if (
        answerIndex !== null &&
        questions1[questionIndex].answer[answerIndex].isCorrect
      ) {
        score += 1;
      }
    });
    quiz2Answer.forEach((answerIndex, questionIndex) => {
      if (
        answerIndex !== null &&
        questions2[questionIndex].answer[answerIndex].isCorrect
      ) {
        score += 1;
      }
    });
    setSummited(true);
    alert(
      `Quiz finished! Your score: ${score}/${
        questions1.length + questions2.length
      }`
    );
  };

  return (
    <div className="px-20 pt-20 min-h-screen flex text-gray-700">
      <div className="w-[480px]">
        <div className="flex gap-5 items-center px-2 py-6">
          <div>Sat Test</div>
          <div className="w-0.5 h-8 bg-gray-300"></div>
          <div className="flex justify-center items-center gap-2">
            <Image src={"/clock.svg"} width={32} height={32} alt=""></Image>
            <div>1 hour</div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Image
              src={"/document-text.svg"}
              width={32}
              height={32}
              alt=""></Image>
            <div>2 sections</div>
          </div>
        </div>
        <hr />
        <div>
          <div className="text-gray-500 font-medium text-base my-3">
            Tip: Stay focused and manage your time wisely. You can review your
            answers before submitting.
          </div>
          <div>
            <div
              className={`py-4 px-6 flex flex-col gap-2 hover:cursor-pointer ${
                activeQuiz === "quiz1"
                  ? "border-l-4 border-indigo-500 bg-indigo-50"
                  : ""
              }`}
              onClick={() => {
                setActiveQuiz("quiz1");
              }}>
              <div className="text-gray-700 text-lg font-medium">
                Reading and writing
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    alt=""
                    src={"/clock.svg"}
                    width={32}
                    height={32}></Image>
                  <div>30min</div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/message-question.svg"}
                    width={32}
                    height={32}
                    alt=""></Image>
                  <div>23ques</div>
                </div>
              </div>
            </div>
            <div
              className={`py-4 px-6 flex flex-col gap-2 hover:cursor-pointer ${
                activeQuiz === "quiz2"
                  ? "border-l-4 border-indigo-500 bg-indigo-50"
                  : ""
              }`}
              onClick={() => {
                setActiveQuiz("quiz2");
              }}>
              <div className="text-gray-700 text-lg font-medium">Math</div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    alt=""
                    src={"/clock.svg"}
                    width={32}
                    height={32}></Image>
                  <div>30min</div>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/message-question.svg"}
                    width={32}
                    height={32}
                    alt=""></Image>
                  <div>23ques</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {activeQuiz === "quiz1" &&
          questions1.map((question, index) => {
            return (
              <Question
                key={question.id}
                imageUrl={question.imageUrl}
                answers={question.answer}
                onAnswerSelected={(answerIndex) =>
                  handleSelectAnswer1(index, answerIndex)
                }
                selectedAnswer={quiz1Answer[index]}
                questionIndex={index}></Question>
            );
          })}
        {activeQuiz === "quiz2" &&
          questions2.map((question, index) => {
            return (
              <Question
                key={question.id}
                imageUrl={question.imageUrl}
                answers={question.answer}
                onAnswerSelected={(answerIndex) =>
                  handleSelectAnswer2(index, answerIndex)
                }
                selectedAnswer={quiz2Answer[index]}
                questionIndex={index}></Question>
            );
          })}
        <SubmitButton
          onClick={handleSubmit}
          disabled={quiz1Answer.includes(null) || quiz2Answer.includes(null)}
        />
      </div>
    </div>
  );
}
