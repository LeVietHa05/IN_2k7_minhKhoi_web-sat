//home
"use client";

// import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Image from "next/image";
interface Session {
  email: string;
  iat: number;
  exp: number;
}
export default function Home() {
  const [session, setSession] = useState<Session | null>(null);

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
  return (
    <div className="p-20">
      <div className="flex ">
        <div className="flex justify-center items-center flex-col gap-10">
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
          <div className="w-[433px] h-[351px] absolute left-[230px] top-[81px] rounded-[433px] border-[50px] border-purple-100 blur-[50px]"></div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div>
            Here, we provide tools and personalized study plans based on an
            initial diagnostic test to help you maximize your time and achieve
            your dream score.
          </div>
          <div>
            Start your <span>SAT</span> journey with us today!
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
