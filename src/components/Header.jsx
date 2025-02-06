function Header() {
    return (
      <div className="bg-linear-to-bl from-violet-800 via purple-400 to-fuchsia-500 py-32 ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center rounded-full border border-white gap-2 px-4 py-[6px]">
            <div className="w-5 h-5 rounded-full text-zinc-400  mr-2 p-[4px]">
              <svg xmlns="http://www.w3.org/2000/svg" height="18" width="22.5" viewBox="0 0 576 512">
                <path fill="#B197FC" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
              </svg>
            </div>
            <div className="text-white text-m ">
              Mon panier
            </div>
          </div>
          <div className="relative text-center mt-5 mb-12 text-5xl italic">
            <h1 className="relative text-white pb-3 leading-[65px] z-10 font-chewy ">Les meilleurs Bonbons<br />Venu tout droit des 4 coins du monde !</h1>
            <div className="absolute left-1/2 bottom-12 -translate-x-1/2 h-12 w-96 bg-blue-800 blur-[50px] z-[1] opacity-60">
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Header