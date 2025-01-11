import Image from "next/image";

export default function About() {
  return (
    <div className="px-20 pt-20 min-h-screen flex flex-col gap-10 text-gray-700">
      <div className="text-2xl text-gray-700 ">
        The SAT (Scholastic Assessment Test) is a standardized test widely used
        in the United States to assess the academic abilities of high school
        students when applying to colleges and universities. Below are detailed
        insights about the SAT
      </div>
      <div className="text-3xl font-semibold">
        <div className="mb-4">Purpose</div>
        <hr />
      </div>
      <div className="px-20 flex justify-between items-center">
        <div className="w-[768px] text-lg ">
          The SAT is designed to evaluate students&#39 analytical thinking,
          mathematical skills, and reading comprehension. It is often a key
          requirement for admission to colleges and universities in the U.S. and
          many other countries.
        </div>
        <div className="shink-0 pr-10">
          <Image
            src={"/home3.svg"}
            width={404}
            height={404}
            alt="home img 3"></Image>
        </div>
      </div>
      <div className="text-3xl font-semibold">
        <div className="mb-4">Structure of the SAT</div>
        <hr />
      </div>
      <div className="flex flex-col gap-10 px-20 text-gray-500 text-2xl font-medium">
        <div>
          <div>
            Total duration:{" "}
            <span className="text-indigo-700">2 hours and 14 minutes</span>{" "}
            (shorter than the traditional SAT)
          </div>
          <div>
            The test consists of{" "}
            <span className="text-indigo-700">2 main sections</span>
          </div>
        </div>
        <div className="flex gap-20 items-center justify-evenly">
          <div className="w-[480px] h-[442px] group bg-indigo-50 rounded-3xl p-8 flex flex-col justify-center hover:justify-between items-center hover:shadow-lg">
            <Image
              src={"./ebrw-main.svg"}
              width={259}
              height={259}
              alt="info sat ebrw"
              className="transition-all group-hover:w-[162px] group-hover:h-[162px]"></Image>
            <div className="text-indigo-700 font-semibold text-[44px] group-hover:text-[38px]">
              EBRW
            </div>
            <div className="text-lg text-gray-500 hidden group-hover:block transition-all">
              <span className="text-indigo-500 font-medium">Reading Test:</span>{" "}
              Read and understand the passages and answer related questions.{" "}
              <br />
              <br />{" "}
              <span className="text-indigo-500 font-medium">
                Writing and Language Test:
              </span>{" "}
              Edit text to improve grammar, sentence structure, and meaning.
            </div>
          </div>
          <div className="w-[480px] h-[442px] group bg-indigo-50 rounded-3xl p-8 flex flex-col justify-center hover:justify-between items-center hover:shadow-lg">
            <Image
              src={"./math-main.svg"}
              width={259}
              height={259}
              alt="info sat ebrw"
              className="transition-all group-hover:w-[162px] group-hover:h-[162px]"></Image>
            <div className="text-indigo-700 font-semibold text-[44px] group-hover:text-[38px]">
              Math
            </div>
            <div className="text-lg text-gray-500 hidden group-hover:block transition-all">
              <span className="text-indigo-500 font-medium">
                There are two sections:
              </span>{" "}
              one where computers are not allowed and one where computers are
              allowed.
              <br /> <br />
              Content includes algebra, data analysis, and some advanced math
              concepts.
            </div>
          </div>
        </div>
        <div className="text-gray-700 text-lg ">
          <h2 className="text-2xl font-medium text-gray-500 mb-5">
            Section Breakdown
          </h2>
          <div className="flex gap-10">
            <ul className="list-disc  ml-4 w-[540px]">
              <li>
                <span className="font-semibold text-indigo-500">
                  Number of questions:{" "}
                </span>
                Approximately 54.
              </li>
              <li>
                <span className="font-semibold text-indigo-500">Duration:</span>{" "}
                64 minutes.
              </li>
              <li>
                <span className="font-semibold text-indigo-500">
                  Key features:
                </span>
                <ol className="list-decimal  ml-5">
                  <li>No long passages like in the old version.</li>
                  <li>
                    Questions are based on short passages, usually with one
                    question per passage.
                  </li>
                  <li>
                    Focuses on reading comprehension, grammar, sentence logic,
                    and vocabulary in context.
                  </li>
                </ol>
              </li>
            </ul>
            <ul className="list-disc ml-4 w-[540px]">
              <li>
                <span className="font-semibold text-indigo-500">
                  Number of questions:{" "}
                </span>
                44.
              </li>
              <li>
                <span className="font-semibold text-indigo-500">Duration:</span>{" "}
                70 minutes.
              </li>
              <li>
                <span className="font-semibold text-indigo-500">
                  Key features:
                </span>
                <ol className="list-decimal  ml-5">
                  <li>Algebra</li>
                  <li>Solving inequalities</li>
                  <li>Applied math (basic trigonometry, data analysis)</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-3xl font-semibold">
        <div className="mb-4">SAT Test Dates for 2025</div>
        <hr />
      </div>
      <div className="px-20 flex justify-between">
        <div className="text-lg text-gray-500 flex flex-col gap-6">
          <div>
            <div className="text-indigo-500 font-semibold">
              Test Date: March 8, 2025
            </div>
            <div className="list-disc ml-5">
              Registration Deadline:{" "}
              <span className="font-medium text-gray-700">
                February 21, 2025
              </span>
            </div>
            <div className="list-disc ml-5">
              Change/Cancellation Deadline:{" "}
              <span className="font-medium text-gray-700">
                February 25, 2025
              </span>
            </div>
          </div>
          <div>
            <div className="text-indigo-500 font-semibold">
              Test Date: May 3, 2025
            </div>
            <div className="list-disc ml-5">
              Registration Deadline:{" "}
              <span className="font-medium text-gray-700">April 18, 2025</span>{" "}
            </div>
            <div className="list-disc ml-5">
              Change/Cancellation Deadline:{" "}
              <span className="font-medium text-gray-700">April 22, 2025</span>{" "}
            </div>
          </div>
          <div className="pb-4">
            <div className="text-indigo-500 font-semibold">
              Test Date: June 7, 2025
            </div>
            <div className="list-disc ml-5">
              Registration Deadline:{" "}
              <span className="font-medium text-gray-700">May 22, 2025</span>
            </div>
            <div className="list-disc ml-5">
              Change/Cancellation Deadline:{" "}
              <span className="font-medium text-gray-700">May 27, 2025</span>
            </div>
          </div>
          <hr />
          <div className="text-gray-500 text-lg">
            <div className="text-green-600 font-bold">Registration fee</div>
            <div className="list-disc ml-5">
              Regular SAT exam fee:{" "}
              <span className="text-green-600 font-semibold">60 USD</span>{" "}
              <span className="text-gray-700 font-semibold">
                (excluding international fees)
              </span>
              .
            </div>
            <div className="list-disc ml-5">
              International fees in Vietnam:{" "}
              <span className="text-gray-700 font-semibold">
                about{" "}
                <span className="text-green-600 font-semibold">43 USD</span>.
                Total about{" "}
                <span className="text-green-600 font-semibold">103 USD</span>.
              </span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"./sat-test-date.svg"}
            width={416}
            height={320}
            alt="sat test date"></Image>
        </div>
      </div>
      <div className="text-3xl font-semibold">
        <div className="mb-4">Exam location</div>
        <hr />
      </div>
      <div className="flex px-20 text-lg leading-7">
        <div className="text-gray-500 w-[768px]">
          <div className="text-xl font-medium mb-3">
            In Vietnam, the SAT exam is held at test centers in Hanoi and City.
            Ho Chi Minh. You can refer to some of the following test locations
          </div>
          <div className="text-indigo-500 font-semibold">Hanoi</div>
          <div className="mb-3">
            <div>
              IIG Vietnam Office:{" "}
              <span className="text-gray-700 font-semibold">
                75 Giang Van Minh, Ba Dinh District.
              </span>
            </div>
            <div>
              Hanoi International School:{" "}
              <span className="text-gray-700 font-semibold">
                48 Lieu Giai, Cong Vi, Ba Dinh.
              </span>
            </div>
            <div>
              International School of Vietnam (ISV):{" "}
              <span className="text-gray-700 font-semibold">
                6-7 Nguyen Cong Thai, Dinh Cong, Hoang Mai.
              </span>
            </div>
          </div>
          <div className="text-indigo-500 font-semibold">City. Ho Chi Minh</div>
          <div>
            <div>
              Saigon South International School (SSIS):{" "}
              <span className="text-gray-700 font-semibold">
                78 Nguyen Duc Canh, Tan Phong, District 7.
              </span>
            </div>
            <div>
              American International School (TAS):{" "}
              <span className="text-gray-700 font-semibold">
                172-180 Nguyen Van Huong, Thao Dien, District 2.
              </span>
            </div>
          </div>
        </div>
        <div className="shink-0">
          <Image
            src={"./exam-location.svg"}
            width={312}
            height={320}
            alt="exam location"></Image>
        </div>
      </div>
    </div>
  );
}
