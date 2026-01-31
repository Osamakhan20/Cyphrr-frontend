/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Input from "./UI/Input";
import Button from "./UI/Button";
import Text from "./UI/Text";
import AppTexts from "../Helper/TextConstant";
import { type AppDispatch, type RootState } from "../app/store";
import { signUpThunk, clearError, setUser } from "../features/auth/authSlice";
import { signupSchema } from "../schemas/Signup.schems";
import AppConstants from "../Helper/AppConstant";
import { supabase } from "../supabaseClient";
import { AppLogger } from "../Helper/AppLogger";

Modal.setAppElement("#root");

const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
  mode = "signup",
  user,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const [form, setForm] = useState(AppConstants.SignUpForm);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (mode === "edit" && user) {
      AppLogger.info("filled profile form here", {
        userId: user.id,
      });
      setForm(AppConstants.getEditUserForm(user));
    }
  }, [mode, user]);

  const isDisabled = AppConstants.isAuthFormDisabled(form, mode);

  const handleSubmit = async () => {
    setValidationError("");
    AppLogger.info("Auth form submitted", { mode });

    if (mode === "signup") {
      AppLogger.info("Signup started");
      const validation = signupSchema.safeParse(form);
      if (!validation.success) {
        AppLogger.warn("Signup validation failed", validation.error);

        setValidationError(validation.error.message);
        return;
      }

      dispatch(signUpThunk(form))
        .unwrap()
        .then(() => {
          AppLogger.info("Sign up successfull");
          setForm(AppConstants.SignUpForm);
          onClose();
        })
        .catch((err) => {
          AppLogger.error("Signup failed", err);
        });
    }

    if (mode === "edit" && user) {
      AppLogger.info("Prefilling edit profile form", {
        userId: user.id,
      });
      const payload = AppConstants.buildUpdateUserPayload(form);
      const { data, error } = await supabase.auth.updateUser(payload);
      if (error || !data?.user) {
            AppLogger.error("Profile update failed", error);

        setValidationError("Failed to update profile");
        return;
      }
      AppLogger.info("Profile updated successfully", {
    userId: data.user.id,
  });

      dispatch(setUser(data.user));
      onClose();
    }
  };

  const handleClose = () => {
      AppLogger.info("Signup modal closed", { mode });

    dispatch(clearError());
    setForm(AppConstants.SignUpForm);
    setValidationError("");
    onClose();
  };

  const displayError: string | null = (validationError || error) as
    | string
    | null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      className="w-full max-w-lg rounded-xl bg-white p-6 outline-none"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          {mode === "edit" ? "Update Profile" : AppTexts.SIGNUP_TEXT.TITLE}
        </h2>

        <button
          onClick={handleClose}
          className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 transition"
        >
          <FaWindowClose />
        </button>
      </div>

      {displayError && (
        <div className="p-3 text-sm text-red-600 bg-red-100 rounded-lg border border-red-300 mb-4">
          {displayError === "string"
            ? displayError
            : "Signup failed. Please try again."}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {AppTexts.SIGNUP_TEXT.FIRST_NAME}
          </label>
          <Input
            type="text"
            value={form.firstName}
            name="firstName"
            onChange={handleOnChange}
            placeholder="First name"
            disabled={loading}
            label={""}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {AppTexts.SIGNUP_TEXT.LAST_NAME}
          </label>
          <Input
            type="text"
            value={form?.lastName}
            name="lastName"
            onChange={handleOnChange}
            placeholder="Last name"
            disabled={loading}
            label={""}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {AppTexts.SIGNUP_TEXT.EMAIL}
        </label>
        <Input
          type="email"
          value={form.email}
          name="email"
          onChange={handleOnChange}
          placeholder="Email address"
          disabled={loading}
          label={""}
        />
      </div>

      {mode === "signup" && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {AppTexts.SIGNUP_TEXT.PASSWORD}
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={form.password}
              name="password"
              onChange={handleOnChange}
              placeholder="At least 8 characters with letters and numbers"
              disabled={loading}
              label={""}
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
      )}

      <div className="mt-6 flex items-center gap-5">
        <Button
          text={
            loading
              ? mode === "edit"
                ? "Updating..."
                : "Signing up..."
              : mode === "edit"
                ? "Update"
                : "Sign up"
          }
          disabled={isDisabled || loading}
          onClick={handleSubmit}
        />
        {mode === "signup" && (
          <Text className="text-sm flex gap-2">
            Already have an account?
            <span
              onClick={() => {
                handleClose();
                onOpenLogin();
              }}
              className="cursor-pointer font-medium text-black hover:underline"
            >
              Login
            </span>
          </Text>
        )}
      </div>
    </Modal>
  );
};

export default SignUpModal;
