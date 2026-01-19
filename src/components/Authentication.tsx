import { useState } from "react";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";

const AuthContainer = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setSignupOpen(true)}
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Open SignUp
      </button>

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onOpenSignUp={() => setSignupOpen(true)}
      />

      <SignUpModal
        isOpen={signupOpen}
        onClose={() => setSignupOpen(false)}
        onOpenLogin={() => setLoginOpen(true)}
      />
    </>
  );
};

export default AuthContainer;
