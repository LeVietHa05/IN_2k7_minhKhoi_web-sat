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
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 2,
    imageUrl: "/question/2.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 3,
    imageUrl: "/question/3.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 4,
    imageUrl: "/question/4.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 5,
    imageUrl: "/question/5.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 6,
    imageUrl: "/question/6.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 7,
    imageUrl: "/question/7.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 8,
    imageUrl: "/question/8.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 9,
    imageUrl: "/question/9.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 10,
    imageUrl: "/question/10.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 11,
    imageUrl: "/question/11.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 12,
    imageUrl: "/question/12.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 13,
    imageUrl: "/question/13.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 14,
    imageUrl: "/question/14.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 15,
    imageUrl: "/question/15.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 16,
    imageUrl: "/question/16.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 17,
    imageUrl: "/question/17.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 18,
    imageUrl: "/question/18.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 19,
    imageUrl: "/question/19.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 20,
    imageUrl: "/question/20.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 21,
    imageUrl: "/question/21.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 22,
    imageUrl: "/question/22.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 23,
    imageUrl: "/question/23.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 24,
    imageUrl: "/question/24.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 25,
    imageUrl: "/question/25.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 26,
    imageUrl: "/question/26.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 27,
    imageUrl: "/question/27.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
];

const questions2 = [
  {
    id: 1,
    imageUrl: "/question2/1.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 2,
    imageUrl: "/question2/2.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 3,
    imageUrl: "/question2/3.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 4,
    imageUrl: "/question2/4.png",
    answer: [
      { text: "20", isCorrect: false },
      { text: "14", isCorrect: false },
      { text: "2", isCorrect: false },
      { text: "11", isCorrect: true },
    ],
  },
  {
    id: 5,
    imageUrl: "/question2/5.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: true },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 6,
    imageUrl: "/question2/6.png",
    answer: [
      { text: "9", isCorrect: false },
      { text: "10", isCorrect: true },
      { text: "11", isCorrect: false },
      { text: "12", isCorrect: false },
    ],
  },
  {
    id: 7,
    imageUrl: "/question2/7.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 8,
    imageUrl: "/question2/8.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 9,
    imageUrl: "/question2/9.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 10,
    imageUrl: "/question2/10.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 11,
    imageUrl: "/question2/11.png",
    answer: [
      { text: "10 & -10", isCorrect: false },
      { text: "20 & -20", isCorrect: false },
      { text: "30 & -30", isCorrect: true },
      { text: "40 & -40", isCorrect: false },
    ],
  },
  {
    id: 12,
    imageUrl: "/question2/12.png",
    answer: [
      { text: "54.1", isCorrect: false },
      { text: "1.54", isCorrect: false },
      { text: "5.41", isCorrect: false },
      { text: "4.51", isCorrect: true },
    ],
  },
  {
    id: 13,
    imageUrl: "/question2/13.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 14,
    imageUrl: "/question2/14.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 15,
    imageUrl: "/question2/15.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 16,
    imageUrl: "/question2/16.png",
    answer: [
      { text: "4052", isCorrect: false },
      { text: "4025", isCorrect: false },
      { text: "4502", isCorrect: false },
      { text: "4205", isCorrect: true },
    ],
  },
  {
    id: 17,
    imageUrl: "/question2/17.png",
    answer: [
      { text: "18", isCorrect: true },
      { text: "19", isCorrect: false },
      { text: "20", isCorrect: false },
      { text: "21", isCorrect: false },
    ],
  },
  {
    id: 18,
    imageUrl: "/question2/18.png",
    answer: [
      { text: "A", isCorrect: true },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 19,
    imageUrl: "/question2/19.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
    ],
  },
  {
    id: 20,
    imageUrl: "/question2/20.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: true },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: false },
    ],
  },
  {
    id: 21,
    imageUrl: "/question2/21.png",
    answer: [
      { text: "A", isCorrect: false },
      { text: "B", isCorrect: false },
      { text: "C", isCorrect: false },
      { text: "D", isCorrect: true },
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
  const [thube, setThube] = useState(false);

  const handleThube = () => {
    setThube(!thube);
  };

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
      <div
        className={` ${
          thube ? "w-1/5" : "w-[420px]"
        } transition-all duration-300`}>
        <div className=" flex gap-5 items-center px-2 py-6">
          <div>Sat Test</div>
          <div
            className={`w-0.5 h-8 bg-gray-300 ${
              thube ? "hidden" : "block"
            }`}></div>
          <div
            className={`flex justify-center items-center gap-2 ${
              thube ? "hidden" : "block"
            }`}>
            <Image src={"/clock.svg"} width={32} height={32} alt=""></Image>
            <div>1 hour</div>
          </div>
          <div
            className={`flex justify-center items-center gap-2 ${
              thube ? "hidden" : "block"
            }`}>
            <Image
              src={"/document-text.svg"}
              width={32}
              height={32}
              alt=""></Image>
            <div>2 sections</div>
          </div>
          <div onClick={handleThube}>
            <div>
              <Image
                src={`${thube ? "/expand.svg" : "/collapse.svg"}`}
                width={24}
                height={24}
                alt="icon collapse"
                className="stroke-gray-700 text-black hover:cursor-pointer"></Image>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-[420px] overflow-x-auto">
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
                  <div>27ques</div>
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
                  <div>21ques</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${thube ? "w-4/5" : "w-auto"} shadow-lg`}>
        <div className="overflow-y-auto max-h-[70vh]">
          {activeQuiz === "quiz1" &&
            questions1.map((question, index) => {
              return (
                <div key={question.id} className="relative">
                  <div
                    className={`flex gap-2 justify-center items-center absolute p-2 pt-5 text-green-500 text-2xl font-semibold inset-x-0 top-0 ${
                      quiz1Answer[index] !== null &&
                      question.answer[quiz1Answer[index]].isCorrect &&
                      isSummited
                        ? ""
                        : "hidden"
                    }`}>
                    <div>Correct</div>
                    <div>
                      <Image
                        src={"/tick-circle.png"}
                        width={40}
                        height={40}
                        alt=""></Image>
                    </div>
                  </div>
                  <div
                    className={`flex gap-2 justify-center items-center absolute p-2 pt-5 text-red-500 text-2xl font-semibold inset-x-0 top-0 ${
                      quiz1Answer[index] !== null &&
                      !question.answer[quiz1Answer[index]].isCorrect &&
                      isSummited
                        ? ""
                        : "hidden"
                    }`}>
                    <div>Wrong</div>
                    <div>
                      <Image
                        src={"/close-circle.png"}
                        width={40}
                        height={40}
                        alt=""></Image>
                    </div>
                  </div>
                  <Question
                    imageUrl={question.imageUrl}
                    answers={question.answer}
                    onAnswerSelected={(answerIndex) =>
                      handleSelectAnswer1(index, answerIndex)
                    }
                    selectedAnswer={quiz1Answer[index]}
                    questionIndex={index}></Question>
                </div>
              );
            })}
          {activeQuiz === "quiz2" &&
            questions2.map((question, index) => {
              return (
                <div key={question.id} className="relative">
                  <div
                    className={`flex gap-2 justify-center items-center absolute p-2 pt-5 text-green-500 text-2xl font-semibold inset-x-0 top-0 ${
                      quiz1Answer[index] !== null &&
                      question.answer[quiz1Answer[index]].isCorrect &&
                      isSummited
                        ? ""
                        : "hidden"
                    }`}>
                    <div>Correct</div>
                    <div>
                      <Image
                        src={"/tick-circle.png"}
                        width={40}
                        height={40}
                        alt=""></Image>
                    </div>
                  </div>
                  <div
                    className={`flex gap-2 justify-center items-center absolute p-2 pt-5 text-red-500 text-2xl font-semibold inset-x-0 top-0 ${
                      quiz1Answer[index] !== null &&
                      !question.answer[quiz1Answer[index]].isCorrect &&
                      isSummited
                        ? ""
                        : "hidden"
                    }`}>
                    <div>Wrong</div>
                    <div>
                      <Image
                        src={"/close-circle.png"}
                        width={40}
                        height={40}
                        alt=""></Image>
                    </div>
                  </div>
                  <Question
                    imageUrl={question.imageUrl}
                    answers={question.answer}
                    onAnswerSelected={(answerIndex) =>
                      handleSelectAnswer2(index, answerIndex)
                    }
                    selectedAnswer={quiz2Answer[index]}
                    questionIndex={index}></Question>
                </div>
              );
            })}
        </div>
        <SubmitButton
          onClick={handleSubmit}
          disabled={quiz1Answer.includes(null) || quiz2Answer.includes(null)}
        />
      </div>
    </div>
  );
}
