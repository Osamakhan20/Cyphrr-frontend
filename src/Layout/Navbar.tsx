import { useState } from "react";
import { Logo, PersonIcon } from "../Helper/Icons";
import { NavLink } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import AppConstants from "../Helper/AppConstant";
import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "../app/store";
import { logoutThunk } from "../features/auth/authSlice";

const { navLinks } = AppConstants;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user, loading } = useSelector(
    (state: RootState) => state.auth
  );

  /**
   * Handle logout - dispatch logoutThunk to clear auth state
   */
  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      setIsOpen(false);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const closeMenu = () => setIsOpen(false);

  /**
   * Get firstName from user metadata
   */
  const userFirstName = user?.user_metadata?.firstName || "User";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold transition hover:opacity-80 ${
      isActive ? "text-primary" : "text-textGray"
    }`;

  return (
    <nav className="absolute top-9 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Logo className="h-10 w-auto" />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-xl font-bold">
            {navLinks.map(({ label, path }: NavItem) => (
              <NavLink key={path} to={path} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="flex items-center gap-2 text-textGray font-semibold cursor-pointer hover:text-primary transition"
                >
                  <PersonIcon className="size-5" />
                  Login
                </button>

                <button
                  onClick={() => setIsSignUpOpen(true)}
                  className="bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-textGray font-semibold">
                  <PersonIcon className="size-5" />
                  <span>Hi, {userFirstName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging out..." : "Logout"}
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-primary text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary px-6 py-6 space-y-4 flex flex-col">
          {navLinks &&
            navLinks.length > 0 &&
            navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={closeMenu}
                className={navLinkClass}
              >
                {label}
              </NavLink>
            ))}

          <div className="border-t border-gray-200/20 pt-4 flex flex-col gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    closeMenu();
                  }}
                  className="flex items-center gap-2 text-textGray font-semibold cursor-pointer hover:text-primary transition"
                >
                  <PersonIcon className="size-5" />
                  Login
                </button>

                <button
                  onClick={() => {
                    setIsSignUpOpen(true);
                    closeMenu();
                  }}
                  className="bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer w-full"
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-textGray font-semibold">
                  <PersonIcon className="size-5" />
                  <span>Hi, {userFirstName}</span>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    closeMenu();
                  }}
                  disabled={loading}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging out..." : "Logout"}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Login & Sign Up Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onOpenSignUp={() => setIsSignUpOpen(true)}
      />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
        onOpenLogin={() => setIsLoginOpen(true)}
      />
    </nav>
  );
};
