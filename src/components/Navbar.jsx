import React from 'react'

const Navbar = () => {

  return (
    <>
    <div className="flex justify-between gap-16 font-playfair font-semibold text-base items-center dark:text-[#F3EFE0] text-[#30475E]">
      <header className="absolute w-full top-0 z-10 py-5 backdrop-filter backdrop-blur-lg text-white">
        <div className="flex justify-between items-center md:px-[50px] ">
          <h1 className="text-2xl font-bold font-playfair ">Imaginify</h1>
        </div>
      </header>
    </div>
    </>
  )
}

export default Navbar