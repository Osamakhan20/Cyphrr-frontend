import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Logo, PersonIcon } from "../Helper/Icons";
import AppConstants from "../Helper/AppConstant";
import { logoutThunk } from "../features/auth/authSlice";
import { type RootState, type AppDispatch } from "../app/store";

const { navLinks } = AppConstants;

export const Navbar = ({ openAuth }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, user, loading } = useSelector(
    (state: RootState) => state.auth,
  );

  const userFirstName = user?.user_metadata?.firstName || "User";
  const userInitials = AppConstants.getUserInitials(user);

  const closeMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      closeMenu();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold transition hover:opacity-80 ${
      isActive ? "text-primary" : "text-textGray"
    }`;

  return (
    <nav className="absolute top-9 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Logo className="h-10 w-auto" />

          <div className="hidden md:flex items-center gap-10 text-xl font-bold">
            {navLinks.map(({ label, path }: NavItem) => (
              <NavLink key={path} to={path} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => openAuth("login")}
                  className="flex items-center gap-2 text-textGray font-semibold hover:text-primary transition"
                >
                  <PersonIcon className="size-5" />
                  Login
                </button>

                <button
                  onClick={() => openAuth("signup")}
                  className="bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Create Account
                </button>
              </>
            ) : (
              <>
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen((prev) => !prev)}
                    className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center cursor-pointer "
                  >
                    {userInitials}
                  </button>

                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48  rounded-lg shadow-lg border z-50 bg-bgCard">
                      <button
                        onClick={() => {
                          openAuth("edit");
                          setIsProfileOpen(false);
                        }}
                        className="w-full text-left px-4 py-2  font-medium cursor-pointer hover:text-lime-400
                         text-primary"
                      >
                        Update Profile
                      </button>

                      <button
                        onClick={async () => {
                          await handleLogout();
                          setIsProfileOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 hover:text-red-800 text-red-600 font-medium cursor-pointer"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-primary text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary px-6 py-6 space-y-4 flex flex-col">
          {navLinks.map(({ label, path }) => (
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
                    openAuth("login");
                    closeMenu();
                  }}
                  className="flex items-center gap-2 text-textGray font-semibold hover:text-primary transition"
                >
                  <PersonIcon className="size-5" />
                  Login
                </button>

                <button
                  onClick={() => {
                    openAuth("signup");
                    closeMenu();
                  }}
                  className="bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition w-full"
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
                    openAuth("edit");
                    closeMenu();
                  }}
                  className="border border-primary text-primary px-5 py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition w-full"
                >
                  Update Profile
                </button>

                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging out..." : "Logout"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
