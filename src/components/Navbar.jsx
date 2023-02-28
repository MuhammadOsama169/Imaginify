import React, { useState } from 'react'
import {motion} from 'framer-motion'
import useMediaQuery from '../hooks/useMediaQuery';
import MenuIcon from "../assets/menu-icon.svg"
import CloseIcon from "../assets/close-icon.svg"


const Navbar = () => {

  const [isMenuToggled, setIsMediaToggled]=useState(false);
  const isAboveSmallScreens =useMediaQuery("(min-width:768px)");

  return (
    <>
{/* DESKTOP */}
{isAboveSmallScreens ? (
 
 <div className="flex justify-between gap-16 font-playfair font-semibold text-base items-center dark:text-[#F3EFE0] text-[#30475E]">
    <header className="absolute w-full top-0 z-10 py-5 backdrop-filter backdrop-blur-lg bg-opacity-30 text-white">
      <div className="flex justify-between items-center md:px-[50px] ">
        <h1 className="text-2xl font-bold font-playfair ">Imaginify</h1>
         <nav>
           <ul className="flex space-x-4 ">
             <li><a href="/" className="hover:text-gray-400 ">Home</a></li>
             <li><a href="/collection" className="hover:text-gray-400">High Resolution Images</a></li>
           </ul>
         </nav>
       </div>
    </header>
  </div>
 ) : ( <button 
     className="rounded-full bg-redhot p-2 m-5 flex justify-end " 
     onClick={()=> setIsMediaToggled(!isMenuToggled)}
     >
 <img alt="menu-icon" src={MenuIcon} />
 </button>
 )}


{/* Mobile */}
     {!isAboveSmallScreens && isMenuToggled && (
         
         <div className="fixed right-0 bottom-0 h-full bg-[#222222] w-[200px] ss:w-[300px] z-50">

     {/* Close Icon */}

     <div className="flex justify-end p-12">
         <button onClick={()=> setIsMediaToggled(!isMenuToggled)}>
             <img className=" h-[40px]" alt="close icon" src={CloseIcon}/>
         </button>
     </div>
     
     <motion.div
     initial={{ x: "100%" }}
     animate={{
       x: 0
     }}
     exit={{
       x: "100%"
     }}
     transition={{ type: "spring", bounce: 0, duration: 0.8 }}>

     <div className="flex flex-col text-2xl text-white">

     {/* MENU ITEMS */}
           <div className="  ">
             <nav>
               <ul className="flex flex-col p-5  gap-5 text-center">
                 <li><a href="/" className="hover:text-gray-400 ">Home</a></li>
                 <li><a href="/collection" className="hover:text-gray-400">High Resolution Images</a></li>
               </ul>
             </nav>
           </div>
             
     </div>
     </motion.div>
         </div>

     )}
    </>
  )
}

export default Navbar