// pages/login.tsx
"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Textinput from "../ui/textInput";
import Mainbutton from "../ui/mainButton";

const alterlativeLogins = [
  { imgSrc: "/apple.png" },
  { imgSrc: "/Google Logo.png" },
  { imgSrc: "/facebook logo.png" },
];

export default function LoginPage() {
  const [buttonState, setButtonState] = useState<"active" | "default" | "off">(
    "off"
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!(buttonState === "active")) {
      alert("You need to agree with the terms and conditions"); 
      return;
    }
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const { token } = await res.json();
      //   localStorage.setItem("token", token);
      document.cookie = `token=${token}; path=/`;
      router.push("/welcome");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleCheckboxChange = () => {
    setButtonState((prevState) => (prevState === "off" ? "default" : "off"));
  };

  return (
    <div className="p-20 ">
      <div className="flex items-center justify-center p-4 ">
        <Image src={"/SATHub.png"} width={188} height={58} alt="logo"></Image>
      </div>

      <div className="flex justify-between flex-col sm:flex-row">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Log in</h1>
          <Textinput type="md" label="Email">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </Textinput>
          <Textinput type="md" label="Password">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entern your password"
            />
          </Textinput>
          <div className="flex justify-center gap-2">
            <input
              type="checkbox"
              id="isAgreed"
              onChange={handleCheckboxChange}
              checked={buttonState !== "off"}
            />
            <label htmlFor="isAgreed">
              I agree to the terms and conditions.{" "}
              <span className="underline text-blue-600 hover:cursor-pointer">
                Read more
              </span>
            </label>
          </div>
          <Mainbutton
            onClick={handleSubmit}
            state={buttonState}
            setState={setButtonState}
            content="Log in"></Mainbutton>
          <div className="flex justify-center items-center gap-1">
            <hr className="flex-1" />
            <span className="text-gray-500 text-sm">Or continue with</span>
            <hr className="flex-1" />
          </div>
          <div className="flex justify-center gap-8">
            {alterlativeLogins.map((logo) => {
              return (
                <Image
                  key={logo.imgSrc}
                  src={logo.imgSrc}
                  width={40}
                  height={40}
                  alt={logo.imgSrc}
                  className="transition-all hover:scale-110 hover:cursor-pointer"
                />
              );
            })}
          </div>
        </form>
        <div>
          <Image
            src={"/loginimg.png"}
            width={795}
            height={410}
            alt="img"></Image>
        </div>
      </div>
    </div>
  );
}
