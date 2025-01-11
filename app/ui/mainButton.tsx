import classNames from "classnames";
import React from "react";
interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: "active" | "default" | "off";
  setState: (state: "active" | "default" | "off") => void;
  content: string;
}

const classes = {
  active: `bg-indigo-600 text-gray-50 border border-indigo-600`,
  default: `bg-gray-50 text-indigo-600 border border-indigo-600`,
  off: `bg-indigo-200 text-gray-50`,
};

export default function Mainbutton({
  state,
  setState,
  content,
  ...props 
}: MainButtonProps) {
  const handleMouseEnter = () => {
    if (state === "default") {
      setState("active");
    }
  };

  const handleMouseLeave = () => {
    if (state === "active") {
      setState("default");
    }
  };

  const bigDivClasses = classNames(
    `px-4 py-3.5 w-full text-lg font-semibold  rounded-lg flex justify-center items-center`,
    classes[state]
  );
  return (
    <button
      className={bigDivClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      {content}
    </button>
  );
}
