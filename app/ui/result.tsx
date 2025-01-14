import Image from "next/image";

interface ResultProps {
  score1: number;
  score2: number;
  length1: number;
  length2: number;
}

const danhgia = {
  bad: "oohh. Too bad. You fucked up. Better luck next time. You should learning from these two books below",
  good: `Congratulations on your performance! With more than 15 correct answers each test,
        you’ve demonstrated strong foundational skills. We recommend you
        continue your preparation with Level 2 practice materials, including
        advanced exercises from these two books`,
};

const books = {
  bad: ["/book1.png", "/book2.png", "/book3.png"],
  good: ["/book4.png", "/book5.png"],
};

export default function Result({
  score1,
  score2,
  length1,
  length2,
}: ResultProps) {
  return (
    <div className="overflow-y-auto max-h-[70vh] p-5 bg-gray-50">
      <div className="flex gap-5">
        <div>
          <div className="text-lg text-gray-500 font-semibold">Your Score</div>
          <div className="bg-indigo-100 px-4 py-2 mt-2 rounded-lg">
            <span className="text-indigo-700 text-4xl font-semibold">
              {score1 + score2}
            </span>
            <span className="text-indigo-500 text-2xl">
              /{length1 + length2}
            </span>
          </div>
        </div>
        <div className="w-0.5 h-20 bg-[#D9D9D9]"></div>
        <div className="text-gray-700 text-xl flex flex-col items-start justify-center">
          <div>
            Reading and writing:
            <span className="text-indigo-700 text-2xl font-medium">
              {score1}
            </span>
            <span className="text-gray-400 text-2xl font-medium">
              /{length1}
            </span>
          </div>
          <div>
            Math:
            <span className="text-indigo-700 text-2xl font-medium">
              {score2}
            </span>
            <span className="text-gray-400 text-2xl font-medium">
              /{length2}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-base text-black mb-4">
        {score1 > 15 && score2 > 15 ? danhgia["good"] : danhgia["bad"]}
      </div>
      <div className="flex gap-10">
        {score1 > 15 && score2 > 15
          ? books["good"].map((booklink) => {
              return (
                <div
                  className="relative group rounded-lg w-fit "
                  key={booklink}>
                  <Image src={booklink} alt="" width={300} height={406} />
                  <div className="group-hover:flex hidden transition-all rounded-lg absolute inset-0 backdrop-blur-sm bg-transparent bg-transparent-dark-30 flex justify-center items-center text-2xl text-gray-50">
                    View
                  </div>
                </div>
              );
            })
          : books["bad"].map((booklink) => {
              return (
                <div
                  className="relative group rounded-lg w-fit "
                  key={booklink}>
                  <Image src={booklink} alt="" width={300} height={406} />
                  <div className="group-hover:flex hidden transition-all rounded-lg absolute inset-0 backdrop-blur-sm bg-transparent bg-transparent-dark-30 flex justify-center items-center text-2xl text-gray-50">
                    View
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}
