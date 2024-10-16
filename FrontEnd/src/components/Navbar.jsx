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
          <button className="group bg-transparent hover:bg-red-600 text-white px-4 py-2 rounded-full shadow-md transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-red-500 group-hover:fill-white transition duration-300">
            <path d="M806-440H320v-80h486l-62-62 56-58 160 160-160 160-56-58 62-62ZM600-600v-160H200v560h400v-160h80v160q0 33-23.5 56.5T600-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400q33 0 56.5 23.5T680-760v160h-80Z"/>
             </svg>
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
          
          <button className="group bg-transparent hover:bg-red-600 text-white block py-3 px-6 rounded-full shadow-md transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-red-500 group-hover:fill-white transition duration-300">
            <path d="M806-440H320v-80h486l-62-62 56-58 160 160-160 160-56-58 62-62ZM600-600v-160H200v560h400v-160h80v160q0 33-23.5 56.5T600-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h400q33 0 56.5 23.5T680-760v160h-80Z"/>
             </svg>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
