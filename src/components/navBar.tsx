import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes,FaHome,FaProjectDiagram } from 'react-icons/fa'; 
import { FcAbout } from "react-icons/fc";// Import FaTimes for the close button
import { GiSkills } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-customGreen text-customBlack p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/#" className="hover:underline">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  <button className="px-1 py-1 bg-white text-customGreen font-semibold rounded-md shadow-lg hover:bg-newGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Contact Me
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FaBars className="text-3xl text-customBlack" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-6 z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-white"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col space-y-4 mt-12">
          <li>
            <Link to="/" className="flex items-center space-x-2 hover:underline" onClick={toggleMenu}>
              <FaHome/> <span>Home</span>
            </Link>
          </li>
          <li className='display-inline'>
            <Link to="/about" className="flex items-center space-x-2 hover:underline" onClick={toggleMenu}>
            <FcAbout className="text-white"/><span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="flex items-center space-x-2 hover:underline" onClick={toggleMenu}>
            <FaProjectDiagram /> <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="flex items-center space-x-2 hover:underline"onClick={toggleMenu}>
            <GiSkills />  <span>Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline" onClick={toggleMenu}>
            <button className="px-1 py-1 bg-white text-customGreen font-semibold rounded-md shadow-lg hover:bg-newGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Contact Me
                  </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay to close the menu when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
};

export default Header;
