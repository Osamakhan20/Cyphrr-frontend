/*import React, { useState } from "react";
import Modal from "react-modal";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Text from "./UI/Text";
import AppTexts from "../Helper/TextConstant";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../app/store";
import { loginThunk, clearError } from "../features/auth/authSlice";

Modal.setAppElement("#root");

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onOpenSignUp,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isDisabled = !email.trim() || !password.trim();

  const handleLogin = async () => {
    try {
      await dispatch(
        loginThunk({
          email,
          password,
        })
      ).unwrap();

      // Clear form on successful login
      setEmail("");
      setPassword("");
      onClose();
    } catch (err) {
      // Error is handled by Redux state
      console.error("Login error:", err);
    }
  };

  const handleClose = () => {
    dispatch(clearError());
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      className="bg-white w-full max-w-md rounded-xl p-6 outline-none"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{AppTexts.LOGIN_TEXT.TITLE}</h2>
        <button
          onClick={handleClose}
          className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 transition"
        >
          <FaWindowClose />
        </button>
      </div>

      <div className="space-y-4">
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-100 rounded-lg border border-red-300">
            {typeof error === "string" ? error : "Login failed. Please try again."}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {AppTexts.LOGIN_TEXT.EMAIL_LABEL}
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {AppTexts.LOGIN_TEXT.PASSWORD_LABEL}
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              disabled={loading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              disabled={loading}
            >
              {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
            </button>
          </div>
        </div>

        <Button
          text={loading ? "Signing in..." : "Sign in"}
          disabled={isDisabled || loading}
          onClick={handleLogin}
        />

        <Text className="text-sm text-gray-600">
          {AppTexts.LOGIN_TEXT.NO_ACCOUNT}{" "}
          <span
            onClick={() => {
              handleClose();
              onOpenSignUp();
            }}
            className="font-medium text-black cursor-pointer hover:underline"
          >
            {AppTexts.LOGIN_TEXT.SIGN_UP}
          </span>
        </Text>
      </div>
    </Modal>
  );
};

export default LoginModal;
*/


import { useState } from "react";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Input from "./UI/Input";
import Button from "./UI/Button";
import Text from "./UI/Text";
import AppTexts from "../Helper/TextConstant";

import { type AppDispatch, type RootState } from "../app/store";
import { loginThunk } from "../features/auth/authSlice";

Modal.setAppElement("#root");

const LoginModal = ({ isOpen, onClose, onOpenSignUp }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const isDisabled = !email.trim() || !password.trim();

  const handleLogin = async () => {
    setLoginError("");

    try {
      await dispatch(
        loginThunk({
          email,
          password,
        })
      ).unwrap();

      // success
      onClose();
      setEmail("");
      setPassword("");
    } catch (error) {
      setLoginError(error as string);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      className="bg-white w-full max-w-md rounded-xl p-6 outline-none"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {AppTexts.LOGIN_TEXT.TITLE}
        </h2>
        <button
          onClick={onClose}
          className="text-gray-500 text-lg cursor-pointer"
        >
          <FaWindowClose />
        </button>
      </div>

      <div className="space-y-4">
        {loginError && (
          <div className="p-2 text-sm text-red-600 bg-red-100 rounded">
            {loginError}
          </div>
        )}

        <Input
          label={AppTexts.LOGIN_TEXT.EMAIL_LABEL}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label={AppTexts.LOGIN_TEXT.PASSWORD_LABEL}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          text={loading ? "Signing in..." : "Sign in"}
          disabled={isDisabled || loading}
          onClick={handleLogin}
        />

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
      </div>
    </Modal>
  );
};

export default LoginModal;
