import { useState } from "react";
import Modal from "react-modal";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Text from "./UI/Text";
import AppTexts from "../Helper/TextConstant";

import { FaWindowClose } from "react-icons/fa";

Modal.setAppElement("#root");

const SignUpModal = ({ isOpen, onClose, onOpenLogin }: SignUpModalProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const isDisabled =
    !form.firstName.trim() ||
    !form.lastName.trim() ||
    !form.email.trim() ||
    !form.password.trim();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      className="w-full max-w-lg rounded-xl bg-white p-6 outline-none"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="mb-6 text-xl font-semibold">
          {AppTexts.SIGNUP_TEXT.TITLE}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 text-lg cursor-pointer"
        >
          <FaWindowClose />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label={AppTexts.SIGNUP_TEXT.FIRST_NAME}
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <Input
          label={AppTexts.SIGNUP_TEXT.LAST_NAME}
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
      </div>

      <div className="mt-4">
        <Input
          label={AppTexts.SIGNUP_TEXT.EMAIL}
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div className="relative mt-4">
        <Input
          label={AppTexts.SIGNUP_TEXT.PASSWORD}
          type={showPassword ? "text" : "password"}
          showPasswordToggle
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-500 cursor-pointer"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>

        <Text className="mt-1 text-xs text-gray-500">
          {AppTexts.SIGNUP_TEXT.PASSWORD_HINT}
        </Text>
      </div>

      <div className="mt-4 space-y-3 text-sm text-gray-600">
        <label className="flex gap-2">
          <input type="checkbox" />
          <span>
            <span className="cursor-pointer underline">
              {AppTexts.SIGNUP_TEXT.TERMS}
            </span>{" "}
            <span className="cursor-pointer underline">
              {AppTexts.SIGNUP_TEXT.PRIVACY}
            </span>
          </span>
        </label>

        <label className="flex gap-2">
          <input type="checkbox" />
          <span>{AppTexts.SIGNUP_TEXT.MARKETING}</span>
        </label>
      </div>

      <div className="mt-6 flex items-center gap-5 ">
        <Button
          text="Sign up"
          disabled={isDisabled}
          onClick={() => {
            console.log("Signup clicked");
          }}
        />
        <Text className="text-sm flex gap-2 ">
          {AppTexts.SIGNUP_TEXT.ALREADY_HAVE_ACCOUNT}
          <span
            onClick={() => {
              onClose();
              onOpenLogin();
            }}
            className="cursor-pointer font-medium underline "
          >
            {AppTexts.SIGNUP_TEXT.LOGIN}
          </span>
        </Text>
      </div>
    </Modal>
  );
};

export default SignUpModal;
