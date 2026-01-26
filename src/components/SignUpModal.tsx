import { useState } from "react";
import { z } from "zod";
import Modal from "react-modal";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import Input from "./UI/Input";
import Button from "./UI/Button";
import Text from "./UI/Text";
import AppTexts from "../Helper/TextConstant";

import { type AppDispatch, type RootState } from "../app/store";
import { signUpThunk, clearError } from "../features/auth/authSlice";

Modal.setAppElement("#root");

const SignUpModal: React.FC<SignUpModalProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

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

  /**
   * Zod schema for validating signup form
   */
  const signupSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Za-z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
  });

  const handleSignup = async () => {
    setValidationError("");

    // Validate form
    const validation = signupSchema.safeParse(form);

    if (!validation.success) {
      setValidationError(validation.error.errors[0].message);
      return;
    }

    try {
      // Dispatch signup thunk
      await dispatch(
        signUpThunk({
          email: form.email,
          password: form.password,
          firstName: form.firstName,
          lastName: form.lastName,
        })
      ).unwrap();

      // Success → close modal & reset form
      onClose();
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      setValidationError("");
    } catch (err) {
      // Error is handled by Redux state
      console.error("Signup error:", err);
    }
  };

  const handleClose = () => {
    dispatch(clearError());
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
    setValidationError("");
    onClose();
  };

  const displayError = validationError || error;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      className="w-full max-w-lg rounded-xl bg-white p-6 outline-none"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">{AppTexts.SIGNUP_TEXT.TITLE}</h2>
        <button
          onClick={handleClose}
          className="text-gray-500 text-lg cursor-pointer hover:text-gray-700 transition"
        >
          <FaWindowClose />
        </button>
      </div>

      {displayError && (
        <div className="p-3 text-sm text-red-600 bg-red-100 rounded-lg border border-red-300 mb-4">
          {typeof displayError === "string"
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
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            placeholder="First name"
            disabled={loading}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {AppTexts.SIGNUP_TEXT.LAST_NAME}
          </label>
          <Input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            placeholder="Last name"
            disabled={loading}
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
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email address"
          disabled={loading}
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {AppTexts.SIGNUP_TEXT.PASSWORD}
        </label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="At least 8 characters with letters and numbers"
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

      <div className="mt-6 flex items-center gap-5">
        <Button
          text={loading ? "Signing up..." : "Sign up"}
          disabled={isDisabled || loading}
          onClick={handleSignup}
        />
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
      </div>
    </Modal>
  );
};

export default SignUpModal;
