import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="relative bg-[url('/images/bg2.jpg')] bg-cover bg-center bg-no-repeat w-full h-[400px] md:h-[600px] lg:h-[700px]">
      <div className="absolute top-0 left-0 right-0">
        <Nav />
      </div>
      <div className="flex flex-col justify-start items-center h-full w-full px-2 md:px-0 pt-32 md:pt-40">

        <div className="relative text-center mt-3 md:mt-5 mb-8 md:mb-12">
          <h1 className="relative text-white pb-3 text-3xl md:text-5xl italic leading-tight md:leading-[65px] z-10 font-chewy px-4 md:px-0">
            Les meilleurs Bonbons
            <br />
            Venant tout droit des 4 coins du monde !
          </h1>
          <div className="absolute left-1/2 bottom-0 md:bottom-12 -translate-x-1/2 h-8 md:h-12 w-72 md:w-96 bg-blue-800 blur-[50px] z-[1] opacity-60">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;