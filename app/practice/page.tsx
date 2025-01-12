//home
"use client";

// import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Mainbutton from "../ui/mainButton";
import Cookies from "js-cookie";
import Books from "../ui/books";
interface Session {
  email: string;
  iat: number;
  exp: number;
}

const bookData = [
  {
    type: "Study materials",
    list: [
      {
        imgLink: "/book1.svg",
        width: 300,
        height: 406,
      },
      {
        imgLink: "/book2.svg",
        width: 300,
        height: 406,
      },
      {
        imgLink: "/book3.svg",
        width: 300,
        height: 406,
      },
    ],
  },
  {
    type: "Practice Questions",
    list: [
      {
        imgLink: "/book4.svg",
        width: 300,
        height: 406,
      },
      {
        imgLink: "/book5.svg",
        width: 300,
        height: 406,
      },
    ],
  },
];

export default function Pratice() {
  const [session, setSession] = useState<Session | null>(null);
  const [buttonState, setButtonState] = useState<"active" | "default" | "off">(
    "default"
  );

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    // const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }

    if (token) {
      fetch("/api/session", {
        headers: {
          token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.session) {
            setSession(data.session);
          } else {
            router.push("/login");
          }
        });
    }
  }, [router]);

  if (!session) {
    return <p>Loading...</p>;
  }
  const handleButton = () => {
    router.push("/practice/tests");
  };

  return (
    <div className="px-20 pt-20 min-h-screen flex flex-col gap-10 text-gray-700">
      <div className="px-20 flex justify-between">
        <div className="w-[768px]">
          <div className="text-3xl text-indigo-500 font-semibold mb-4">
            Discover Your Starting Point!
          </div>
          <div className="text-medium text-gray-700 mb-10">
            Ready to conquer the SAT? Start with our diagnostic test to identify
            your strengths and areas for improvement. In just{" "}
            <span className="text-indigo-500">60 minutes</span>, you&#39;ll
            receive a personalized study plan tailored to your goals!
          </div>
          <div className="w-96">
            <Mainbutton
              onClick={handleButton}
              content="Take the Test Now"
              state={buttonState}
              setState={setButtonState}
            />
          </div>
        </div>
        <div className="shink-0">
          <Image
            src={"/pratice-1.svg"}
            width={235}
            height={262}
            alt="pratice"></Image>
        </div>
      </div>
      {bookData.map((books) => {
        return <Books key={books.type} title={books.type} list={books.list} />;
      })}
    </div>
  );
}
