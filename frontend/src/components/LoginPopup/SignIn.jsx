import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
import {FaEye, FaEyeSlash} from 'react-icons/fa'

const SignIn = ({handleSignIn}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setuserName] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    
    const handleSignInSubmit = (e) => {
      e.preventDefault();
      console.log('Username:', userName);
      console.log('Email:', registerEmail);
      console.log('Password:', registerPassword);
      fetch("http://localhost:3019/register", {
          method: "POST",
          crossDomain: true,
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
              userName,
              registerEmail,
              registerPassword
          }),
      })
      .then((res) => res.json())
      .then((data) => {
          console.log(data, "userRegister");
      });
  }

  return (
    <>
       <div className='p-5'>
                    <h1 className='text-2xl text-gray-600 font-semibold text-center mb-4'>Create Your Account</h1>
                    <form className='flex flex-col gap-4'>
                      <div>
                        <label htmlFor='username' className='input-label'>
                        Username</label>
                        <input type='text' id='username' className='input' 
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        required
                        />
                      </div>
                      <div>
                        <label htmlFor='email' className='input-label'>
                        Email</label>
                        <input type='email' id='email' className='input'
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                        />
                      </div>
                      <div>
                        <label htmlFor='password' className='input-label'>
                        Password</label>
                        
                        <div className='relative'>
                        <input type={showPassword ? 'text' : 'password'} id='password' className='input' 
                            value={registerPassword}
                            onChange={(e) => setRegisterPassword(e.target.value)}
                            required 
                        />
                            {
                                showPassword?(
                                    <FaEye 
                                    className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 cursor-pointer'
                                    onClick={() => setShowPassword(!showPassword)}/>
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
                    onClick={handleSignInSubmit}
                  >
                    Create Account
                  
                    </button>
                   
                   <p className='text-center text-gray-500 text-sm my-3'>or Login with</p>
                   <div className='flex justify-center items-center gap-4'>
                     <FcGoogle className='text-2xl text-gray-600 grayscale hover:grayscale-0 transition-200'/>
                     <AiFillGithub className='text-2xl text-gray-600 hover:text-gray-800 transition-200' />
                   </div>
                   <p 
                     className='text-center text-gray-500 text-sm cursor-pointer hover:text-blue-500 my-3'
                     onClick={ handleSignIn}>Already have an account? Log in </p>
                </div>
    </>
  )
}

export default SignIn

