import { useState } from "react";
import { Logo, PersonIcon } from "../Helper/Icons";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-9 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Logo className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-10 font-bold text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-semibold hover:opacity-80 transition ${
                  isActive ? "text-primary" : "text-textGray"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-semibold hover:opacity-80 transition ${
                  isActive ? "text-primary" : "text-textGray"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-semibold hover:opacity-80 transition ${
                  isActive ? "text-primary" : "text-textGray"
                }`
              }
            >
              Contact
            </NavLink>
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
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-secondary px-6 py-6 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block font-semibold transition ${
                isActive ? "text-black" : "text-primary"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block font-semibold transition ${
                isActive ? "text-black" : "text-primary"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block font-semibold transition ${
                isActive ? "text-black" : "text-primary"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};
