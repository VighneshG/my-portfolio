import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-navbar text-white p-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wider">
          Vignesh Kumar
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.364 6.364a1 1 0 0 1 0 1.414L13.414 12l4.95 4.95a1 1 0 1 1-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 0 1-1.414-1.414L10.586 12 5.636 7.05a1 1 0 0 1 1.414-1.414L12 10.586l4.95-4.95a1 1 0 0 1 1.414 0z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2zm0 5h16a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z"
              />
            )}
          </svg>
        </button>

        {/* Menu Items for large screens */}
        <ul className="hidden lg:flex space-x-6 text-xl"> 
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-navbar"
        >
          <ul className="space-y-4 p-4 text-lg">
            <li>
              <Link
                href="/"
                className="block hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="block hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
