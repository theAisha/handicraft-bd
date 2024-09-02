import React, { useRef, useState } from 'react'
'react-icons/fa'
import BgImage from '../../assets/women/women5.jpeg'
import Login from './Login'
import SignIn from './SignIn'

const LoginPopupModal = ({toggleLoginPopup,loginPopup}) => {
    const [showSignIn,setShowSignIn] = useState(false)
    const loginPopupRef = useRef()

    const handleSignIn = () => {
        setShowSignIn(!showSignIn)
    }

    const bgImage = {
        backgroundImage: `url(${BgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
    }
    window.addEventListener('click', (e) => {
        if (e.target === loginPopupRef.current) {
            toggleLoginPopup(false)
        }
    })

  return ( 
   <>
   {loginPopup &&(
        <div 
        ref={loginPopupRef} 
        className='fixed top-0 left-0 w-full h-full z-50 overflow-y-auto'>
            <div  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto mx-auto bg-white'>
              <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:w[600px] md:w[700px] relative'>
                   {/* login Form section */}
                   {
                       showSignIn ? (
                        <SignIn handleSignIn={handleSignIn}/>
                       ):(
                        <Login handleSignIn={handleSignIn}/>
                       )
                   }
                   
                    {/* login image section */}
                    <div className='w-full rounded-r-2xl' style={bgImage}></div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
   </>
) }

export default LoginPopupModal
