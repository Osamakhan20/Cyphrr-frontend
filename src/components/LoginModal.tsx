import React, { useState } from "react";
import Modal from "react-modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Text from "./UI/Text";
import AppTexts from "../Helper/TextConstant";
import { FaWindowClose } from "react-icons/fa";

Modal.setAppElement("#root");

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onOpenSignUp,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isDisabled = !email.trim() || !password.trim();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      className="bg-white w-full max-w-md rounded-xl p-6 outline-none"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{AppTexts.LOGIN_TEXT.TITLE}</h2>
        <button
          onClick={onClose}
          className="text-gray-500 text-lg cursor-pointer"
        >
          <FaWindowClose />
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Input
            label={AppTexts.LOGIN_TEXT.EMAIL_LABEL}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="relative">
          <Input
            label={AppTexts.LOGIN_TEXT.PASSWORD_LABEL}
            type="password"
            showPasswordToggle
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          text="Sign in"
          disabled={isDisabled}
          onClick={() => {
            console.log("Login clicked");
          }}
        />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            {AppTexts.LOGIN_TEXT.REMEMBER_ME}
          </label>
          <button className="hover:underline">
            {AppTexts.LOGIN_TEXT.NEED_HELP}
          </button>
        </div>

        <Text className="text-sm text-gray-600">
          {AppTexts.LOGIN_TEXT.NO_ACCOUNT}{" "}
          <span
            onClick={() => {
              onClose();
              onOpenSignUp();
            }}
            className="font-medium text-black cursor-pointer hover:underline"
          >
            {AppTexts.LOGIN_TEXT.SIGN_UP}
          </span>
        </Text>

        <Text className="text-xs text-gray-500">
          {AppTexts.LOGIN_TEXT.RECAPTCHA}
          <span className="underline cursor-pointer">
            {AppTexts.LOGIN_TEXT.LEARN_MORE}
          </span>
        </Text>
      </div>
    </Modal>
  );
};

export default LoginModal;
