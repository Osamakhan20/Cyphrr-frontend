import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  type = "button",
  loading = false,

}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`w-2/5 rounded-full py-3 text-sm font-medium text-white transition cursor-pointer
        ${
          isDisabled
            ? "cursor-not-allowed bg-gray-300"
            : "bg-blue-800 hover:bg-blue-900"
        }`}
    >
      {loading ? "Please wait..." : text  }
    </button>
  );
};

export default Button;
