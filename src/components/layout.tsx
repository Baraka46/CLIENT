// src/components/Layout.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./buttons";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-customGreen text-customBlack p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav>
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
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        {/* <aside className="w-64 bg-customBlue p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4"></h2>
          <ul>
            <li><Link to="/portfolio" className="block py-2 hover:bg-gray-300 rounded">Portfolio</Link></li>
            <li><Link to="/services" className="block py-2 hover:bg-gray-300 rounded">Services</Link></li>
            <li><Link to="/blog" className="block py-2 hover:bg-gray-300 rounded">Blog</Link></li>
          </ul>
        </aside> */}
        <main className="flex-1 p-6 bg-gradient-to-r from-[#237A57] to-[#093028] rounded-xxl">
          {children}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full h-screen p-4">
            <div className="w-full h-full lg:w-[400px] lg:h-[750px] relative rounded-lg shadow-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center object-cover"
                style={{ backgroundImage: "url('logo512.png')", opacity: 0.5 }}
              ></div>
              <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
  <div className="flex flex-col items-center">
    <p className="text-white mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, nisi?</p>
    <Button/>
  </div>
</div>

            </div>
            <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:ml-8 text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Additional Content</h2>
              <p>
                Details or other content go here, appearing to the right of the
                image on large screens and below it on small screens.
              </p>
            </div>
          </div>
        </main>

        {/* <main className="flex-1 p-6 bg-gradient-to-r from-[#e0eafc] via-[#cfdef3] to-[#fde2e4] rounded-xl bg-[length:1000%_1000%] animate-gradient">
          {children}
        </main> */}
      </div>
      <footer className="bg-customGreen text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
