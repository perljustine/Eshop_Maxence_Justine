import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <div className="relative bg-[url('/src/assets/images/bg2.jpg')] bg-cover bg-center bg-no-repeat w-full h-[400px] md:h-[600px] lg:h-[700px]">
      <div className="absolute top-0 left-0 right-0">
        <Nav />
      </div>
      <div className="flex flex-col justify-start items-center h-full w-full px-2 md:px-0 pt-32 md:pt-40">
        <div className="flex items-center justify-center rounded-full outline-dashed outline-white px-3 md:px-4 py-1 md:py-[6px] mb-4 md:mb-6">
          <div className="w-4 md:w-5 h-4 md:h-5 rounded-full text-zinc-400 mr-1 md:mr-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="18" 
              width="22.5" 
              viewBox="0 0 576 512"
              className="w-4 md:w-auto h-4 md:h-auto"
            >
              <path fill="#B197FC" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
            </svg>
          </div>
          <div className="text-white text-sm md:text-base">
            Mon panier
          </div>
        </div>

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