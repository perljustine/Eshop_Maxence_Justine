import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full bg-pink-200 shadow shadow-pink-400">
      <div className="md:h-16 h-28 mx-auto px-8 md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-indigo-400 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 hover:text-purple-300"><a href="#">Explore</a></li>
            <li className="md:px-4 md:py-2 hover:text-purple-300"><a href="#">About</a></li>
            <li className="md:px-4 md:py-2 hover:text-purple-300"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="order-2 md:order-3">
          <button className="px-4 py-2 bg-purple-300 hover:bg-indigo-400 text-gray-50 rounded-xl flex items-center gap-2">
            <span>Panier</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;