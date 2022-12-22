import React, { useState } from 'react';
import classNames from 'classnames';

const NavigationBar = () => {

    const [menuOpen, setMenuOpen] = useState(true);


    return (
        <nav className=" shadows-md sticky top-0 flex items-center justify-between px-4 py-3 w-screen bg-transparent">
            <div className="flex items-center flex-grow text-white mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="font-semibold tracking-wider font-display text-black text-xl ">Portfolio</span>
            </div>
            <div className=" hidden md:flex md:items-center md:w-auto pr-5">
                <div className="text-lg font-display ">
                    <a href="#" className="block mt-4 md:inline-block md:mt-0 text-black hover:text-white mr-4 ">
                        Home
                    </a>
                    <a href="/about" className="block mt-4 md:inline-block md:mt-0 text-black hover:text-white mr-4">
                        About
                    </a>
                    <a href="/contact" className="block mt-4 md:inline-block md:mt-0 text-black hover:text-white">
                        Contact
                    </a>
                </div>
            </div>
            <div className="block pr-5 md:hidden ">
                <button
                    onClick={() => setMenuOpen(val => !val)}
                    className="flex items-center px-3 py-2 border rounded text-black border-secondary-40 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            {menuOpen && (
                <div className='fixed top-12 right-4 pt-4 md:hidden'>
                    <div
                        className={`
                            before:fixed before:top-12 before:right-6 before:border-8 before:border-b-secondary-40 before:border-x-transparent before:border-t-transparent
                            py-5 rounded border border-secondary-40 text-black bg-secondary-50 bg-opacity-5 font-display text-lg font-semibold `}
                    >

                        <ul>
                            <li
                                className={`
                                px-8 mb-2 bg-gradient-to-r hover:from-transparent  hover:to-secondary-50
                                `}
                            ><a href="#">Home</a></li>
                            <li
                                className='px-8 mb-2 bg-gradient-to-r hover:from-transparent  hover:to-secondary-50'
                            ><a href="/about">About</a></li>
                            <li
                                className=' px-8 mb-2 bg-gradient-to-r hover:from-transparent  hover:to-secondary-50'
                            ><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>

    )
}

export default NavigationBar;