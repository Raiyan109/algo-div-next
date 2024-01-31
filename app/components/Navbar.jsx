"use client"

import React, { useState } from 'react';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    console.log(showNav);
    return (
        <header className="p-4">
            <div className="container flex justify-between h-16 mx-auto relative">
                <div className='flex justify-center items-center'>
                    <h1 className='text-green-500 text-3xl font-bold'>Biccas</h1>
                </div>
                <ul className="items-stretch hidden space-x-3 lg:flex ml-32">
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black">Home</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">Product</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">FAQ</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">Blog</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">About us</a>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded text-gray-400">Login in</button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-green-400 text-gray-50">Sign up</button>
                </div>
                <button className="p-4 lg:hidden" onClick={() => setShowNav(!showNav)}>
                    {showNav ? <IoMdClose /> : <FaBars />}
                </button>
                {showNav && (
                    <ul className=" flex flex-col absolute top-20 right-0 space-y-4 bg-green-600 h-screen w-52 py-5 transition-all translate-x-4">
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black">Home</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">Product</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">FAQ</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">Blog</a>
                        </li>
                        <li className="flex">
                            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-gray-400">About us</a>
                        </li>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Navbar;