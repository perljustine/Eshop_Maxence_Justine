import React from 'react';
import logo from '../assets/candy-shop-svgrepo-com.svg'; 

const Nav = () => {
  return (
    <nav className="w-full bg-pink-100 shadow-lg shadow-pink-200 h-14">
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-12" />
        </div>

        {/* Menu de navigation */}
        <div className="sm:w-auto w-full flex justify-center sm:justify-end">
          <ul className="flex flex-row gap-6 font-semibold text-neutral-500">
            <li className="hover:text-purple-300 hover:underline decoration-purple-300 hover:animate-bounce">
              <a href="#">Explore</a>
            </li>
            <li className="hover:text-purple-300 hover:underline decoration-purple-300 hover:animate-bounce">
              <a href="#">About</a>
            </li>
            <li className="hover:text-purple-300 hover:underline decoration-purple-300 hover:animate-bounce">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
