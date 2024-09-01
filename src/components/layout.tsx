// src/components/Layout.tsx
import React from 'react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 bg-customBlue p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sidebar</h2>
          <ul>
            <li><Link to="/portfolio" className="block py-2 hover:bg-gray-300 rounded">Portfolio</Link></li>
            <li><Link to="/services" className="block py-2 hover:bg-gray-300 rounded">Services</Link></li>
            <li><Link to="/blog" className="block py-2 hover:bg-gray-300 rounded">Blog</Link></li>
          </ul>
        </aside>
        <main className="flex-1 p-6 bg-customWhite">
          {children}
        </main>
      </div>
      <footer className="bg-customGreen text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
