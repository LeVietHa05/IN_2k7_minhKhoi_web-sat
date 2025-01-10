// pages/welcome.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const WelcomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    //   Redirect to the home page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className=" h-screen">
      <div className="flex items-center justify-center p-4">
        <Image src={"/SATBuddy.png"} width={188} height={58} alt="logo"></Image>
      </div>
      <div className="flex flex-col justify-center items-center p-4 h-1/2 mb-10 bg-[url('/welcomeBG.png')] bg-contain bg-no-repeat bg-center">
        <div className="flex items-center justify-center p-4 ">
          <Image
            src={"/user1_big.svg"}
            width={230}
            height={230}
            alt="big user logo"></Image>
        </div>
        <h1 className="text-[64px] text-center text-indigo-500 font-semibold">
          Welcome <span className="text-indigo-700">Minh Khoi!</span>
        </h1>
      </div>
    </div>
  );
};

export default WelcomePage;
