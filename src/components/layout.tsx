// src/components/Layout.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./buttons";
import Profiles from "./profiles";

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
                    <h1 className="text-lg font-mono text-gray-800 mb-4">
                      Baraka Munisi
                    </h1>
                    <p className="text font-mono text-customCream mb-4">
                     A passionate Web Developer skilled
                      in crafting innovative solutions with the MERN stack and
                      Laravel. My work blends technical expertise with creative
                      design, driving impactful digital experiences.
                    </p>
                    <div className="absolute flex items-center justify-center w-full h-full">
                      <Button />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full min-h-[300px] lg:min-h-[750px] relative rounded-lg shadow-lg overflow-auto">
                <div className="p-4 text-customCream  font-mono">
                  <h2 className="text-2xl  font-bold mb-4 text-customCream">
                    Additional Content
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi iste libero perspiciatis at omnis enim modi quod
                    et, quo quae quisquam sequi reiciendis neque ullam facilis
                    error, soluta itaque aperiam.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor expedita optio quibusdam consectetur vero, maiores eum numquam ab quaerat.
                  </p>
                </div>
              </div>

              <div className="w-full min-h-[300px] lg:min-h-[750px] relative rounded-lg shadow-lg overflow-auto">
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">More Content</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus vel aperiam asperiores distinctio incidunt aliquid voluptas, magnam exercitationem esse. Facere tempora, harum obcaecati rem repudiandae aliquam sunt dicta iusto incidunt cupiditate vero explicabo dolores sequi necessitatibus quia illum pariatur accusantium? Nulla, neque dolores. Omnis veniam tempora dolor cumque nam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white p-8">
        <div className="max-w-3xl w-full text-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-8">
            Hi there! I’m Jane Doe, a passionate Full Stack Developer with over
            5 years of experience in building dynamic and responsive web
            applications. I love turning ideas into reality through clean and
            efficient code.
          </p>

          <h2 className="text-3xl font-semibold mb-4">Professional Journey</h2>
          <p className="text-lg mb-8">
            My journey began with a curiosity for technology and a desire to
            create. After earning my degree in Computer Science, I jumped into
            the tech world, working on various projects that challenged me and
            helped me grow. From crafting user-friendly interfaces to developing
            robust back-end systems, I've enjoyed every step of the process.
          </p>
          <p className="text-lg mb-8">
            I specialize in ReactJS, Node.js, and Laravel, with a strong focus
            on creating seamless user experiences. My portfolio showcases a
            variety of projects that demonstrate my skills in both front-end and
            back-end development.
          </p>

          {/* Personal Touch Section */}
          <h2 className="text-3xl font-semibold mb-4">
            A Little More About Me
          </h2>
          <p className="text-lg mb-8">
            When I’m not coding, you can find me exploring new hiking trails,
            experimenting with new recipes in the kitchen, or diving into a good
            book. I believe that a well-rounded life fuels creativity and
            innovation.
          </p>

          {/* Call to Action Section */}
          <h2 className="text-3xl font-semibold mb-4">Let’s Connect!</h2>
          <p className="text-lg mb-8">
            I’m always open to new opportunities and collaborations. Whether
            you’re looking for a developer to bring your project to life or just
            want to chat about the latest tech trends, feel free to reach out!
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Contact Me
          </button>
        </div>
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
