// src/components/Layout.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./buttons";
import Profiles from "./profiles";

const projects: React.FC = () => {
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
            gradient-to-r from-[#237A57] to-[#093028]
          </ul>
        </aside> */}
        <main className="flex-1 p-6 bg-customBlue rounded-xxl">
        
          <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-screen p-4">
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 w-full h-auto">
          
              <div className="w-full min-h-[70vh] lg:min-h-[750px] relative rounded-lg shadow-lg overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center object-cover"
                  style={{
                    backgroundImage: "url('logo512.png')",
                    opacity: 0.5,
                    color: "#14213d",
                  }}
                ></div>
                <div className="relative z-10 flex flex-col w-full h-full p-4">
                  <div className="flex-grow">
                  <h1 className="text-lg font-serif text-gray-800 mb-4">
        Baraka Munisi
      </h1>
                    <p className="text font-sans text-customGreen mb-6">
                    Hi, I'm Baraka Munisi, a passionate Web Developer skilled in crafting innovative solutions with the MERN stack and Laravel. My work blends technical expertise with creative design, driving impactful digital experiences.
                    </p>
                    <div className="absolute flex items-center justify-center w-full h-full">
                      <Button />
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="w-full min-h-[300px] lg:min-h-[750px] relative rounded-lg shadow-lg overflow-auto">
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">
                    Additional Content
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi iste libero perspiciatis at omnis enim modi quod
                    et, quo quae quisquam sequi reiciendis neque ullam facilis
                    error, soluta itaque aperiam.
                  </p>
                  <p>
                    Further details or other content go here, appearing to the
                    right of the image on large screens and below it on small
                    screens.
                  </p>
                </div>
              </div>

           
              <div className="w-full min-h-[300px] lg:min-h-[750px] relative rounded-lg shadow-lg overflow-auto">
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">More Content</h2>
                  <p>
                    Further details or other content go here, appearing to the
                    right of the second div on large screens and below it on
                    small screens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        
      </div>

   
      <footer className="bg-customGreen text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default projects;
