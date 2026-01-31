import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import AppConstants from "../Helper/AppConstant";

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<ResetPasswordForm>(
    AppConstants.ForgetPasswordForm,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (form.password.length < 8) {
      return "Password must be at least 8 characters";
    }

    if (form.password !== form.confirmPassword) {
      return "Passwords do not match";
    }

    return "";
  };

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate("/");
      }
    };

    checkSession();
  }, [navigate]);

  const handleResetPassword = async () => {
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);

      const response = await supabase.auth.updateUser({
        password: form.password,
      });
      const error = response.error;

      if (error) {
        throw error;
      }

      setSuccess(true);
      setForm(AppConstants.ForgetPasswordForm);

      await supabase.auth.signOut();

      setTimeout(() => navigate("/"), 2000);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Reset Password
        </h2>

        {error && (
          <div className="mb-3 p-2 text-sm text-red-600 bg-red-100 rounded">
            {error}
          </div>
        )}

        {success ? (
          <p className="text-green-600 text-center">
            Password updated successfully, Redirecting to login...
          </p>
        ) : (
          <div className="space-y-4">
            <Input
              label="New Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleOnChange}
            />

            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleOnChange}
            />

            <Button
              text={loading ? "Updating..." : "Update Password"}
              disabled={loading}
              onClick={handleResetPassword}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordPage;
