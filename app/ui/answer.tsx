import classNames from "classnames";
import React from "react";
// import { useState, useEffect } from "react";
interface AnswerProps {
  content: string;
  //   initialState: "hover" | "default" | "selected" | "true";
  onSelect: () => void;
  name: string;
  isSelected: boolean;
}

const classes = {
  hover: `bg-indigo-200  shadow-md`,
  default: `bg-[#FCFCFC] text-gray-500`,
  selected: `bg-indigo-700 text-gray-50`,
  true: "",
};

export default function Answer({
  //   initialState = "default",
  content,
  isSelected,
  onSelect,
  name,
}: AnswerProps) {
  //   const [isChecked, setChecked] = useState(false);
  //   const [states, setStates] = useState<keyof typeof classes>("default");

  //   useEffect(() => {
  //     if (isChecked) {
  //       setStates("selected");
  //     } else {
  //       setStates("default");
  //     }
  //   }, [isChecked]);
  const bigDivClasses = classNames(
    `px-4 py-2 w-32 h-12 text-base rounded-xl flex justify-center items-center 
      hover:bg-indigo-200 hover:shadow-md
    `,
    isSelected ? classes["selected"] : classes["default"]
  );

  return (
    <label className={bigDivClasses}>
      <input
        name={name}
        className="hidden"
        type="checkbox"
        checked={isSelected}
        onChange={onSelect}
      />
          { content.length <= 2 ? 'Answer' : ""}
      <div
        className={`ml-2 ${content.length > 2 ? 'w-full' : 'w-8'} h-8 border border-gray-200 bg-gray-100 text-gray-700 text-xl font-medium rounded-full flex justify-center items-center`}>
        {content}
      </div>
    </label>
  );
}
