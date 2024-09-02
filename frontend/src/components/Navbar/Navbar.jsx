import React, { useEffect, useState } from 'react';
import DarkMode from '../DarkMode';

const Navlinks = [
  {
    id: 1,
    name: 'HOME',
    link: '/#home',
  },
  {
    id: 2,
    name: 'BLOG',
    link: '/#blog',
  },
  {
    id: 3,
    name: 'LOGIN', // This will change dynamically to LOGOUT if user is logged in
    link: '/#login',
  },
];

const Navbar = ({ toggleLoginPopup }) => {
  const [userName, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from localStorage if it exists
    const storedUsername = localStorage.getItem('Username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // Clear the username from localStorage and reset the state
    localStorage.removeItem('Username');
    setUsername('');
    // Optionally, redirect to the login page or homepage after logout
    window.location.href = '/';
  };

  return (
    <>
      <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <div className='sm:flex items-center gap-3 hidden text-lg font-semibold text-black dark:text-gray-50 group'>
              Bangladeshi Handicraft
            </div>
            <nav className='hidden md:block'>
              <ul className='flex items-center gap-8'>
                {Navlinks.map(({ id, name, link }) => (
                  <li key={id} className='py-4'>
                    {name === 'LOGIN' && userName ? (
                      <a
                        href='#'
                        onClick={handleLogout}
                        className='inline-block text-lg font-semibold hover:text-primary duration-300'
                      >
                        LOGOUT
                      </a>
                    ) : (
                      <a
                        href={link}
                        onClick={() => name === 'LOGIN' && toggleLoginPopup(true)}
                        className='inline-block text-lg font-semibold hover:text-primary duration-300'
                      >
                        {name}
                      </a>
                    )}
                  </li>
                ))}
                {userName && (
                  <li className='py-4'>
                    <span className='inline-block text-lg font-semibold'>
                      Welcome, {userName}
                    </span>
                  </li>
                )}
                {/* DarkMode feature implement */}
                <DarkMode />
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
