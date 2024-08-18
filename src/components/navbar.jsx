import React, { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-blue-300 gap-x-5">
            {/* <div className={`relative overflow-hidden pb-32 bg-blue-300'}`}> */}
                <nav className={`relative z-10 border-opacity-25 lg:border-none ${open ? 'bg-blue-400' : 'bg-transparent'} lg:bg-transparent`}>
                    <div className="mx-auto max-w-7xl px-2 gap-x-5 sm:px-4 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800">
                            <div className="flex items-center px-2 lg:px-0">
                                {/* <div className="flex-shrink-0">
                                    <img className="block h-8 w-auto" src="" alt="House in Umbria" />
                                </div> */}
                                <div className="hidden lg:ml-6 lg:block lg:space-x-4">
                                    <div className="flex">
                                        <a href="#" className="bg-blue-700 bg-opacity-25 rounded-md py-2 px-3 text-xl font-medium text-white">Postpone</a>
                                        <a href="/writeletter" className="hover:bg-blue-700 rounded-md py-2 px-3 text-xl font-medium text-white">Write a letter</a>
                                        {/* <a href="/writeletter" className="hover:bg-sky-800 rounded-md py-2 px-3 text-sm font-medium text-white"></a>
                                        <a href="#" className="hover:bg-sky-800 rounded-md py-2 px-3 text-sm font-medium text-white"></a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                                <div className="w-full max-w-lg lg:max-w-xs">
                                    <label htmlFor="search" className="sr-only">Search</label>
                                    <div className="relative text-white focus-within:text-blue-400">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <svg className="h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="blue" aria-hidden="true">
                                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input id="search" className="block w-full rounded-md border border-transparent bg-blue-700 bg-opacity-50 py-2 pl-10 pr-3 leading-5 placeholder-sky-100 focus:border-white focus:bg-white focus:text-gray-900 focus:placeholder-blue-400 focus:outline-none focus:ring-white sm:text-sm" placeholder="Search" type="search" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex lg:hidden">
                                {/* Mobile menu button */}
                                <button
                                    type="button"
                                    className="inline-flex items-center justify-center rounded-md p-2 text-blue-700 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded={open}
                                    onClick={() => setOpen(!open)}
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <svg
                                        className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                    </svg>
                                    <svg
                                        className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden lg:ml-4 lg:block">
                                <div className="flex items-center">
                                    <button type="button" className="flex-shrink-0 rounded-full p-1 text-blueassrom200 hover:bg-blue-700 hover:text-white focus:bg-blue-300 focus:outline-blue-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700">
                                        <span className="sr-only">View notifications</span>
                                        <svg className="h-6 w-6" fill="white" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            {/* </div> */}
        </div>
    );
};

export default Navbar
