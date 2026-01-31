/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaWindowClose } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Text from "./UI/Text";
import AppTexts from "../Helper/TextConstant";
import { type AppDispatch, type RootState } from "../app/store";
import { loginThunk } from "../features/auth/authSlice";
import AppConstants from "../Helper/AppConstant";
import { AppLogger } from "../Helper/AppLogger";

Modal.setAppElement("#root");

const LoginModal = ({
  isOpen,
  onClose,
  onOpenSignUp,
  onOpenForgotPassword,
}: LoginModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState(AppConstants.SignInForm);
  const [loginError, setLoginError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setForm(AppConstants.SignInForm);
      setLoginError("");
      setShowPassword(false);
    }
  }, [isOpen]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isDisabled = !form.email.trim() || !form.password.trim();

  const handleLogin = async () => {
    setLoginError("");

    dispatch(loginThunk(form))
      .unwrap()
      .then(() => {
        AppLogger.info("Sign In successfull")
        setForm(AppConstants.SignInForm);
        setLoginError("");
        setShowPassword(false);
        onClose();
      })
      .catch((err) => {
        AppLogger.error("Sign in failed", err)
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    AppLogger.info("Sign in modal close")
    setForm(AppConstants.SignInForm);
    setLoginError("");
    setShowPassword(false);
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
          value={form.email}
          name="email"
          onChange={handleOnChange}
        />

        <div className="relative">
          <Input
            label={AppTexts.LOGIN_TEXT.PASSWORD_LABEL}
            type={showPassword ? "text" : "password"}
            value={form.password}
            name="password"
            onChange={handleOnChange}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
          </button>
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

        <Text className="text-sm text-gray-600 text-center">
          <span
            onClick={() => {
              handleClose();
              onOpenForgotPassword();
            }}
            className="font-medium text-black cursor-pointer hover:underline"
          >
            {AppTexts.LOGIN_TEXT.FORGOT_PASSWORD}
          </span>
        </Text>
      </div>
    </Modal>
  );
};

export default LoginModal;
