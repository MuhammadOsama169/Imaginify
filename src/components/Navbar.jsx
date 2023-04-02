import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/UserSlice';
import {persistor} from '../../store/store';


const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = useSelector((state)=>state.user.userDetails);
  console.log(username?.picture)
  
  const handleSignOut = () =>{
    navigate('/')
    // here
    persistor.purge();
    dispatch(logout({}))
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
{/* whats wrong with the switch statement */}
          {username ? (
            <div className='backdrop-filter backdrop-blur-lg flex'>
              <button className="text-md font-bold font-playfair " onClick={handleSignOut}>
                Sign Out
              </button>
              <img
                src={username?.userObject?.picture}
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