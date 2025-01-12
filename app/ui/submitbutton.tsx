// components/SubmitButton.tsx

import React from "react";

interface SubmitButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-4 bg-blue-500 text-white rounded-lg w-full text-center font-semibold mt-4 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"}`}>
      Submit
    </button>
  );
};

export default SubmitButton;
