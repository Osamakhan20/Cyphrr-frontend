/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import Modal from "react-modal";
import { z } from "zod";

import Input from "./UI/Input";
import Button from "./UI/Button";
import { supabase } from "../supabaseClient";

Modal.setAppElement("#root");

const emailSchema = z
  .string()
  .min(1, "Email is required")
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format");

const ForgotPasswordModal = ({
  isOpen,
  onClose,
  onOpenLogin,
}: ForgetPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setError(null);
      setSuccess(false);
      setLoading(false);
    }
  }, [isOpen]);

  const handleReset = async () => {
    setError(null);

    const result = emailSchema.safeParse(email);

    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    setLoading(false);

    if (!error) {
      setSuccess(true);
    } else {
      setError(error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center"
      className="bg-white w-full max-w-md rounded-xl p-6 outline-none"
    >
      {success ? (
        <p className="text-center">Check your email for the reset link 📧</p>
      ) : (
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            text={loading ? "Sending..." : "Send reset link"}
            onClick={handleReset}
            disabled={loading}
          />
        </div>
      )}

      <p
        onClick={() => {
          onClose();
          onOpenLogin();
        }}
        className="text-sm text-center cursor-pointer mt-4"
      >
        Back to login
      </p>
    </Modal>
  );
};

export default ForgotPasswordModal;
