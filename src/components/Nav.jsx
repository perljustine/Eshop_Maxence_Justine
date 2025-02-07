import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full bg-pink-200 shadow shadow-pink-400">
      <div className="md:h-16 h-28 mx-auto px-8 md:px-4 container flex items-center justify-center flex-wrap md:flex-nowrap">
        <div className="text-indigo-400 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-purple-300"><a href="#">Explore</a></li>
            <li className="md:px-4 md:py-2 hover:text-purple-300"><a href="#">About</a></li>
            <li className="md:px-4 md:py-2 hover:text-purple-300"><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;