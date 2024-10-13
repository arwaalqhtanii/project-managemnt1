import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#2b39a0] text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
    
        <div className="text-3xl font-bold tracking-wide hover:scale-105 transform transition duration-300">
          <a href="/">Project Manager</a>
        </div>

    
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          <a href="/" className="hover:text-gray-300 transition duration-300">Home</a>
          <a href="/about" className="hover:text-gray-300 transition duration-300">About</a>
          <a href="/projects" className="hover:text-gray-300 transition duration-300">Projects</a>
          <a href="/contact" className="hover:text-gray-300 transition duration-300">Contact</a>
        </div>

    
        <div className="hidden md:block">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition duration-300">
            Logout
          </button>
        </div>

     
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="white">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M4 18h16v-2H4v2zm0-5h16v-2H4v2zm0-7v2h16V6H4z" />
            </svg>
          </button>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-[#2b39a0] border-t border-gray-700 shadow-lg">
          <a href="/" className="block py-3 px-6 hover:bg-gray-700 transition duration-300">Home</a>
          <a href="/about" className="block py-3 px-6 hover:bg-gray-700 transition duration-300">About</a>
          <a href="/projects" className="block py-3 px-6 hover:bg-gray-700 transition duration-300">Projects</a>
          <a href="/contact" className="block py-3 px-6 hover:bg-gray-700 transition duration-300">Contact</a>
          <a href="/logout" className="block py-3 px-6 hover:bg-red-600 text-red-500 transition duration-300">Logout</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
