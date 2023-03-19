import React from 'react'
import { useNavigate } from "react-router-dom";

const Navbar = ({userGoogle}) => {
  const navigate = useNavigate();

  const handleSignOut = () =>{
    navigate('/')
    window.localStorage.removeItem("isLoggedIn",false)
    userGoogle({})
  }
  const handleSignIn = () =>{
    navigate('/signUp')
  }
  return (
    <>
    <div className="flex justify-between gap-16 font-playfair font-semibold text-base items-center text-white">
      <header className="absolute w-full top-0 z-10 py-5 backdrop-filter backdrop-blur-lg ">
        <div className="flex flex-row md:px-[50px] ">
          <div className='flex mr-auto  '>
            <h1 className="text-2xl font-bold font-playfair">Imaginify</h1>
          </div>

          {userGoogle ? (
            <div className='backdrop-filter backdrop-blur-lg flex'>
              <button className="text-md font-bold font-playfair " onClick={handleSignOut}>
                Sign Out
              </button>
              <img
                src={userGoogle.picture}
                className="rounded-full h-8 w-8 object-cover ml-4"
              />
            
            </div>
          ) : (
            <button className="text-md font-bold font-playfair " onClick={handleSignIn}>
              Sign In
            </button>
          )}

        </div>
      </header>
    </div>
    </>
  )
}

export default Navbar