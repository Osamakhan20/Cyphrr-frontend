import { useState } from "react";
import { Logo, PersonIcon } from "../Helper/Icons";
import { NavLink } from "react-router-dom";
import AppConstants from "../Helper/AppConstant";

const { navLinks } = AppConstants;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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
            <button className="flex items-center gap-2 text-textGray font-semibold">
              <PersonIcon className="size-5" />
              My Account
            </button>

            <button className="bg-lime-400 text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">
              Create Account
            </button>
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
        <div className="md:hidden bg-secondary px-6 py-6 space-y-4  flex flex-col">
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
        </div>
      )}
    </nav>
  );
};
