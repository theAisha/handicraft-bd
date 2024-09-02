import React, { useEffect, useState } from 'react';

const DesktopMenus = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'Service',
        link: '#'
    },
    {
        name: 'Blog',
        link: '#'
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
        <header className='bg-white/80 shadow-lg'>
            <div className="container py-2">
                <nav className='flex justify-between items-center'>
                    <a href='#' className='text-gray-800 font-medium text-3xl'>
                        Bangladesh Handicraft
                    </a>
                    {/* Desktop Menu */}
                    <div className='hidden sm:block'>
                        <ul className='flex justify-center items-center gap-6'>
                            {DesktopMenus.map((menu, index) => (
                                <li key={index}>
                                    <a href={menu.link}
                                       className='text-lg font-medium text-gray-800 dark:text-white py-1 px-3 rounded-full
                                           hover:bg-pink-400 duration-300'>
                                        {menu.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                {userName ? (
                                    <>
                                        <span className='text-lg font-medium text-gray-800 dark:text-white py-1 px-3 rounded-full'>
                                            Welcome! {userName}
                                        </span>
                                        <button
                                            onClick={handleLogout}
                                            className='text-lg font-medium text-gray-800 dark:text-white py-1 px-3 rounded-full
                                                hover:bg-pink-400 duration-300'>
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => toggleLoginPopup(true)}
                                        className='text-lg font-medium text-gray-800 dark:text-white py-1 px-3 rounded-full
                                            hover:bg-pink-400 duration-300'>
                                        Login
                                    </button>
                                )}
                            </li>
                        </ul>
                    </div>
                    {/* Mobile Menu */}
                    <div className='sm:hidden block'>
                        <ul>
                            <li>
                                <a href='#'
                                   className='text-gray-600 hover:text-gray-800 px-4 py-4 inline-block select-none font-semibold text-xl'
                                   onClick={userName ? handleLogout : () => toggleLoginPopup(true)}>
                                    {userName ? `Welcome! ${userName}` : 'Login'}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
