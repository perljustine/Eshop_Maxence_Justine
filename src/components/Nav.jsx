import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full bg-pink-100 shadow-md shadow-pink-50">
      <div className="md:h-16 h-28 mx-auto px-8 md:px-4 container flex items-center justify-center flex-wrap md:flex-nowrap">
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