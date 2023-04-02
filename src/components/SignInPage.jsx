import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginSuccess } from '../../store/UserSlice'; 
import jwtDecode from 'jwt-decode';
import background from '../assets/login-background.jpg'

// const userLoggedInStorage = JSON.parse(localStorage.getItem('isLoggedIn' || '[]'))

export const SignInPage = () => {

  // const [user,setUser] =useState({})
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleCallbackResponse (response){
    // How to know if its a success or a failure
    // Failure, Show an error modal
    // Success

    var userObject = jwtDecode(response.credential)
    // setUser(userObject);
    navigate("/");
    dispatch(loginSuccess(userObject));
  }

useEffect( () => {
  /* global google */
  // defined by scripts in header
  window.google.accounts.id.initialize({
  client_id:`${import.meta.env.VITE_CLIENT_ID_GOOGLE}`,
  callback: handleCallbackResponse
});
  google.accounts.id.renderButton(
    document.getElementById("signinDiv"),
    {theme:"outline",size:"large"}
  )
  google.accounts.id.prompt()
},[]);  

  // useEffect(()=>{
  //   window.localStorage.setItem("isLoggedIn", JSON.stringify(user))
  // },[user])

  return (
    <div className=''>
      <img src={background} className=' bg-cover bg-center absolute h-[100vh] w-full' />
      <div id="signinDiv" className='relative flex justify-center items-center align-middle pt-[300px]'></div>
    </div>
  )
}
