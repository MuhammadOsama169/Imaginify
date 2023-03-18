import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import background from '../assets/login-background.jpg'

export const SignInPage = ({setGoogleUser}) => {

  const [user,setUser] =useState({})
  const navigate = useNavigate();

  function handleCallbackResponse (response){
    console.log("Encoded JWT ID toke:" + response.credential)
    var userObject = jwtDecode(response.credential)
    console.log(userObject);
    setUser(userObject);
    setGoogleUser(userObject)
    navigate("/");
  }

  function handleSignOut(event){
    setUser({});
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

  return (
    <div className=''>
      <img src={background} className=' bg-cover bg-center absolute h-[100vh] w-full' />
      <div id="signinDiv" className='relative flex justify-center items-center align-middle pt-[300px]'></div>
      {
        Object.keys(user).lenght != 0 &&
          <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      }

      {user &&
      <div>
        <img src={user.picture}/>
        <h3>{user.name}</h3>
      </div>
      }
    </div>
  )
}
