import { useState } from "react";
import { Logo, PersonIcon } from "../Helper/Icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Logo className="w-3xs h-10" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-xl font-bold  text-textGray hover:text-primary transition-colors"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-xl font-bold text-textGray hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-xl font-bold text-textGray hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center text-textGray gap-2 px-5 py-2  text-sm font-bold hover:opacity-90 transition-all shadow-md active:scale-95">
              <PersonIcon className="size-6" />
              My Account
            </button>
            <button className="flex items-center gap-2 bg-primary text-secondary px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all shadow-md active:scale-95">
              Create Account
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl font-bold p-2 text-primary"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4`}
      >
        <Link to="/" className="block text-base font-medium text-gray-700">
          Home
        </Link>
        <Link to="/about" className="block text-base font-medium text-gray-700">
          About
        </Link>
        <Link
          to="/contact"
          className="block text-base font-medium text-gray-700"
        >
          Contact
        </Link>
        <div className="pt-4 flex flex-col gap-3">
          <button className="w-full text-center py-3 text-gray-700 font-semibold border border-gray-200 rounded-lg">
            My Account
          </button>
          <button className="w-full flex justify-center items-center gap-2 bg-primary text-white py-3 rounded-lg font-bold">
            <PersonIcon className="size-4" />
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
};
