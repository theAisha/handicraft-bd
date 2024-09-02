import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import {FaEye, FaEyeSlash} from 'react-icons/fa'

const Login = ({handleSignIn}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [LuserName, setLuserName] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const handleLoginSubmit = (e) => {
      e.preventDefault();
      console.log('Username:', LuserName);
      console.log('Password:', loginPassword);
      if (!LuserName || !loginPassword) {
        alert('Please fill in both username and password.');
        return;
      }
  
      fetch("http://localhost:3019/login", {
          method: "POST",
          crossDomain: true,
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
              userName: LuserName,
              registerPassword: loginPassword,
          }),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        if (data.status === "Login Successful") {
            localStorage.setItem('Username', data.user.userName);
            window.location.href = `http://localhost:5173/Username=${encodeURIComponent(data.user.userName)}`;
        } else {
            alert(data.error);
        }
    })
    .catch((error) => {
        console.error('Error during login:', error);
        alert('An error occurred during login. Please try again later.');
    });
    
  };
  
  return (
    <>
       <div className='p-5'>
                    <h1 className='text-2xl text-gray-600 font-semibold text-center mb-4'>Login</h1>
                    <form className='flex flex-col gap-4'>
                      <div>
                        <label htmlFor='username' className='input-label'>
                        Username</label>
                        <input type='text' id='username' className='input'
                        value={LuserName}
                        onChange={(e) => setLuserName(e.target.value)}
                        required
                       />
                      </div>
                      <div>
                        <label htmlFor='password' className='input-label'>
                        Password</label>
                        <div className='relative'>
                            <input type={showPassword ? 'text' : 'password'} id='password' className='input' 
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                            />
                            {
                                showPassword?(
                                    <FaEye
                                     className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer'
                                     onClick={() =>setShowPassword(!showPassword)}/>
                                ):(
                                    <FaEyeSlash 
                                    className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer'
                                    onClick={() =>setShowPassword(!showPassword)}/>

                                )
                            }
                            
                        </div>
                      </div>
                    </form>
                    <button 
                    className='bg-blue-500 hover:bg-blue-500/80 rounded-full mt-7 text-white py-1-5 block w-full'
                    onClick={handleLoginSubmit}
                    >
                      Submit
                    </button>

                   <p className='text-center text-gray-500 text-sm my-3'>or Login with</p>
                   <div className='flex justify-center gap-4'>
                     <FcGoogle className='text-2xl text-gray-600 grayscale hover:grayscale-0 transition-200'/>
                     <AiFillGithub className='text-2xl text-gray-600 hover:text-gray-800 transition-200' />
                   </div>
                   <p className='text-center text-gray-500 text-sm cursor-pointer hover:text-blue-500 my-3' onClick={handleSignIn}>No account? Signup here</p>
                </div>
    </>
  )
}

export default Login
