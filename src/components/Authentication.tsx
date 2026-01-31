import { useSelector } from "react-redux";
import ForgotPasswordModal from "./ForgotPasswordModal";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import type { RootState } from "../app/store";

const AuthContainer = ({ activeModal, setActiveModal }: AuthContainerProps) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const isEditMode = activeModal === "edit";

  return (
    <>
      <LoginModal
        isOpen={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        onOpenSignUp={() => setActiveModal("signup")}
        onOpenForgotPassword={() => setActiveModal("forgot")}
      />

      <SignUpModal
        isOpen={activeModal === "signup" || activeModal === "edit"}
        mode={isEditMode ? "edit" : "signup"}
        user={isEditMode ? user : undefined}
        onClose={() => setActiveModal(null)}
        onOpenLogin={() => setActiveModal("login")}
      />

      <ForgotPasswordModal
        isOpen={activeModal === "forgot"}
        onClose={() => setActiveModal(null)}
        onOpenLogin={() => setActiveModal("login")}
      />
    </>
  );
};

export default AuthContainer;
