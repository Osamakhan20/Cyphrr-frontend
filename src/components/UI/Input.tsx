import React from "react";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  showPasswordToggle = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const dynamicSpace = isPassword && showPasswordToggle;

  return (
    <div className="flex flex-col gap-1 relative">
      <label className="text-sm text-gray-600">{label}</label>

      <input
        {...props}
        type={
          isPassword && showPasswordToggle
            ? showPassword
              ? "text"
              : "password"
            : type
        }
        className={`
    w-full
    rounded-md
    border
    border-gray-300
    px-3
    py-2
    text-sm
    outline-none
    focus:border-gray-500
    ${dynamicSpace ? "pr-10" : ""}
  `}
      />

      {isPassword && showPasswordToggle && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </div>
  );
};

export default Input;
