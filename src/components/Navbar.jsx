import React, { useState, useEffect } from 'react';
import pic from "../../public/pic.jpg";
import { IoMenu, IoClose, IoMoon, IoSunny } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Load saved theme from localStorage on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Portfolio" },
        { id: 4, text: "Experience" },
        { id: 5, text: "Contact" },
    ];

    return (
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white dark:bg-gray-900 transition-colors">
            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full' alt="Profile" />
                    <h1 className='font-semibold text-xl cursor-pointer text-gray-900 dark:text-white'>
                        Arpa<span className='text-purple-700 text-2xl'>n</span>
                        <p className='text-sm text-gray-700 dark:text-gray-300'>Web Developer</p>
                    </h1>
                </div>
                <div className='flex items-center'>
                    <ul className='hidden md:flex space-x-8 text-gray-900 dark:text-white'>
                        {navItems.map(({ id, text }) => (
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                <Link
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* Responsive Dark Mode Button */}
                    <button
                        onClick={toggleDarkMode}
                        className='ml-4 p-2 md:p-3 lg:p-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
                    >
                        {darkMode ? (
                            <IoSunny size={18} className="text-yellow-500 md:text-lg lg:text-xl" />
                        ) : (
                            <IoMoon size={18} className="text-gray-900 dark:text-white md:text-lg lg:text-xl" />
                        )}
                    </button>
                    <div onClick={() => setMenu(!menu)} className='md:hidden ml-4'>
                        {menu ? <IoClose size={24} className="text-gray-900 dark:text-white" /> : <IoMenu size={24} className="text-gray-900 dark:text-white" />}
                    </div>
                </div>
            </div>
            {menu && (
                <div className='bg-white dark:bg-gray-900'>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl text-gray-900 dark:text-white'>
                        {navItems.map(({ id, text }) => (
                            <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                                <Link
                                    onClick={() => setMenu(!menu)}
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                >
                                    {text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Navbar;

