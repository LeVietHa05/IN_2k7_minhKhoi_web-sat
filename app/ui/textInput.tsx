import classNames from "classnames";
import React from "react";

interface TextInputsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "md" | "lg";
  label: string;
  children: React.ReactNode;
}

const sizeClasses = {
  md: "text-base -top-0.5 left-3",
  lg: "text-lg -top-1 left-4",
};

const inputSizeClasses = {
  md: "text-base px-3 py-3.5",
  lg: "text-lg p-4 ",
};

export default function Textinput({
  type = "md",
  label,
  children,
}: TextInputsProps) {
  const inputClass = classNames(
    `flex-grow border outline-none border-gray-200  
          rounded-[12px] text-base text-gray-400
          focus:border-indigo-400 transition-all
          focus:text-black`,
    inputSizeClasses[type]
  );
  const spanClass = classNames(
    `text-sm font-bold text-gray-800
         absolute bg-gray-50 block transition-all
        group-focus-within:text-indigo-400
         group-focus-within:-top-2.5`,
    sizeClasses[type]
  );
  return (
    <div className="bg-white p-2 w-full max-w-md">
      <div className="flex items-center relative group pt-2.5">
        <span className={spanClass}>{label}</span>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<HTMLInputElement>(child)) {
            return React.cloneElement<HTMLInputElement>(child, {
              className: inputClass,
            });
          }
        })}
      </div>
    </div>
  );
}
