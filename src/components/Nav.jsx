import React from 'react';
import logo from '../assets/candy-shop-svgrepo-com.svg'; 

const Nav = () => {
  return (
    <nav className="w-full bg-pink-100 shadow-md shadow-pink-50">
      <div className="md:h-18 h-28 mx-auto px-8 md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        
        {/* Logo à gauche */}
        <div className="flex items-center order-1">
          <img src={logo} alt="Logo" className="h-12 w-14  md:h-14" />
        </div>

        {/* Menu de navigation */}
        <div className="text-neutral-500 order-3 underline decoration-simple w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-purple-300 hover:underline decoration-purple-300 hover:animate-bounce"><a href="#">Explore</a></li>
            <li className="md:px-4 md:py-2 hover:text-purple-300 hover:underline decoration-purple-300 hover:animate-bounce"><a href="#">About</a></li>
            <li className="md:px-4 md:py-2 hover:text-purple-300 hover:underline decoration-purple-300 hover:animate-bounce"><a href="#">Contact</a></li>
          </ul>
        </div>
       

      </div>
      
    </nav>
  );
};

export default Nav;
