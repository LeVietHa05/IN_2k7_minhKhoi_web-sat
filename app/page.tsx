//home
"use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
import Image from "next/image";
// interface Session {
//   email: string;
//   iat: number;
//   exp: number;
// }

const QualityCommitment = [
  {
    iconLink: "/setting-icon.svg",
    header: "Diagnostic Test",
    text: "Assess your current skills to build an optimized study plan",
  },
  {
    iconLink: "/setting-icon-2.svg",
    header: "Extensive Question Bank",
    text: "Practice with thousands of questions that mirror real SAT exams",
  },
  {
    iconLink: "/switch-icon.svg",
    header: "Personalized Study Plan",
    text: "Monitor your progress with detailed charts and daily improvements.",
  },
];

const someonelikeyou = [
  {
    imgLink: "/someone1.png",
    name: "Jane N.",
    tag: "@Jane N.",
    title: "Greate App!!",
    content:
      "This website really boosted my confidence while preparing for the SAT. The diagnostic test was so helpful in identifying my weaknesses, and the personalized study plan improved my Math score from 600 to 750 in just two months!",
  },
  {
    imgLink: "/someone3.png",
    name: "David K.",
    tag: "@David K.",
    title: "Like it !!",
    content:
      "As a parent, I’m really impressed with how this website supports my child in preparing for the SAT. The practice questions closely resemble real test questions, and the progress chart makes it easy for me to track my child’s improvement.",
  },
  {
    imgLink: "/someone2.png",
    name: "Emily R.",
    tag: "@Emily R.",
    title: "Highly rcm",
    content:
      "As an international student, the SAT felt like a huge challenge. But thanks to this platform, I can practice anytime, anywhere. The rich study materials and realistic exercises made me feel more prepared than ever.",
  },
];
export default function Home() {
//   const [session, setSession] = useState<Session | null>(null);
// 
//   const router = useRouter();
// 
//   useEffect(() => {
//     const token = Cookies.get("token");
//     // const token = localStorage.getItem("token");
// 
//     if (!token) {
//       router.push("/login");
//     }
// 
//     if (token) {
//       fetch("/api/session", {
//         headers: {
//           token,
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.session) {
//             setSession(data.session);
//           } else {
//             router.push("/login");
//           }
//         });
//     }
//   }, [router]);
// 
//   if (!session) {
//     return <p>Loading...</p>;
//   }
  return (
    <div className="p-20">
      <div className="flex ">
        <div className="flex justify-center items-start flex-col gap-10">
          <h1 className="text-[44px] font-medium text-indigo-500">
            Welcome to the{" "}
            <span className="text-6xl font-bold text-indigo-700">
              Ultimate SAT
            </span>{" "}
            preparation platform!
          </h1>
          <div className="px-[60px] py-5 rounded-[100px] bg-indigo-700 text-gray-50 text-2xl font-semibold">
            Detail
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src={"/loginimg.png"}
            width={795}
            height={410}
            alt="img"></Image>
        </div>
      </div>
      <hr />
      <div className="flex justify-between px-10 py-5 ">
        <div className="shrink-0 relative">
          <Image
            src={"/home2.svg"}
            width={474}
            height={473}
            alt="home img 2"
            className="z-10 relative"></Image>
          <div className="w-[433px] h-[351px] absolute left-[200px] top-[81px] rounded-[433px] border-[50px] border-purple-100 blur-[50px]"></div>
        </div>
        <div className="flex flex-col justify-center items-center w-[560px]">
          <div className="text-xl text-gray-500 leading-[30px] text-justify">
            Here, we provide tools and personalized study plans based on an
            initial diagnostic test to help you maximize your time and achieve
            your dream score.
          </div>
          <div className="text-[52px] text-indigo-500 font-medium">
            Start your <span className="text-indigo-700 font-bold">SAT</span>{" "}
            journey with us today!
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div className="flex justify-between pt-8">
          <div className="w-[768px] flex flex-col justify-center items-start">
            <h1 className="text-indigo-500 text-[52px] font-semibold">
              Quality Commitment
            </h1>
            <div className="text-gray-500 text-xl leading-[30px] ">
              Designed by Minh Khoi, we are committed to providing an engaging,
              effective, and tailored learning experience. Make SAT preparation
              an opportunity, not a challenge!
            </div>
          </div>
          <div className="shink-0 pr-10">
            <Image
              src={"/home3.svg"}
              width={404}
              height={404}
              alt="home img 3"></Image>
          </div>
        </div>
        <div className="flex gap-10 mb-8">
          {QualityCommitment.map((each) => {
            return (
              <div key={each.iconLink} className="flex flex-col gap-5 ">
                <Image
                  src={each.iconLink}
                  width={50}
                  height={50}
                  alt="icon"></Image>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-700">
                    {each.header}
                  </h2>
                  <p className="tet-lg text-gray-500">{each.text}</p>
                </div>
                <div className="flex gap-2 text-lg text-indigo-700 font-semibold">
                  <span>Learn more</span>
                  <Image
                    src={"/arrow-right.svg"}
                    width={28}
                    height={28}
                    alt="arrow right"></Image>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
      <div className="mt-10 hidden">
        <h1 className="text-indigo-500 text-[40px] font-semibold">
          People love SAT<span className="text-indigo-700">Hub</span> like you
        </h1>
        <div className="flex gap-10 py-5 pb-8">
          {someonelikeyou.map((someone) => {
            return (
              <div
                key={someone.imgLink}
                className="py-6 px-4 w-[420px] bg-gray-100 rounded-[20px]">
                <div className="flex px-2 gap-4 mb-5">
                  <div>
                    <Image
                      src={someone.imgLink}
                      width={64}
                      height={64}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium text-gray-700">
                      {someone.name}
                    </h2>
                    <p className="text-lg text-gray-500"> {someone.tag}</p>
                  </div>
                </div>
                <div className="text-xl font-medium text-gray-800 mb-2">
                  {someone.title}
                </div>
                <div className="line-clamp-4 text-base leading-6 text-gray-600">
                  {someone.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
}
