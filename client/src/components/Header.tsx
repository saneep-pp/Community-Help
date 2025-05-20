import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderProps } from "../../types";

const Header = ({ token, setToken }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#624985] via-[#815EEA] to-[#927fce] text-white shadow-lg">
      <div className=" mx-auto py-4 px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight filter transition duration-300  hover:blur-[0.2px] drop-shadow-[0_0_2px_black] hover:drop-shadow-[0_0_0.1px_white]"
        >
          Community Help
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/create-post"
            className="drop-shadow-[0_0_2px_black] hover:drop-shadow-[0_0_0.1px_white] transition font-bold "
          >
            Create Post
          </Link>
          <button
            onClick={handleLogout}
            className="bg-[#815EEA] hover:bg-[#624985] px-4 py-2 rounded-lg transition duration-300 cursor-pointer font-bold drop-shadow-[0_0_2px_black] "
          >
            Logout
          </button>
        </nav>
        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu DropDown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#815EEA] px-4 py-2">
          <Link
            to="/"
            className="block py-2 text-white hover:drop-shadow-[0_0_0.1px_white] transition font-semibold "
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/create-post"
            className="block py-2 hover:text-blue-200 font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Create Post
          </Link>
          <button
            onClick={() => {
              handleLogout();
              setIsMenuOpen(false);
            }}
            className="block w-full text-left py-2 hover:text-blue-200 font-semibold "
          >
            Logout
          </button>
        </nav>
      )}
    </header>
  );
};
export default Header;
