import React, { useEffect, useState } from 'react'
import Logo from "../../assets/Logo.svg"
import Search from "../../assets/search.svg"

export const Header = () => {
     const[showHamburger, setShowHamburger] = useState(false);
     const [darkMode, setDarkMode] = useState(true);

     useEffect(() => {
      if(darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
     }, [darkMode])

  return (
   <header>
           <nav className="rounded-[30px] h-[84px] bg-gray-50 dark:bg-[#2B2A2A] mt-12 mx-8 min-[1100px]:mx-44 justify-around  flex items-center shadow-[rgba(0,0,0,0.19)_2px_5px_20px,rgba(0,0,0,0.23)_0px_6px_6px]">
            {/* <div className='w-[7%] pl-10'>
                     <button onClick={() => setShowHamburger(!showHamburger)} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2  h-10 text-sm text-green-500 rounded-lg dark:text-gray-400" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                     <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                     </svg>
                  </button>
                 <div className={`${showHamburger ? "": "hidden" }  w-full`} id="navbar-hamburger">
                 <ul className="flex flex-col text-green-900 font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                </li>
            </ul>
            </div>
            </div>
       */}
            <div className="flex max-sm:w-10">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                <img className='h-5 w-5' src={Search} alt="" />
                <span className="sr-only">Search</span>
                </button>
                <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                   <img className='h-5 w-5' src={Search} alt="" />
                    <span className="sr-only">Search icon</span>
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-black dark:text-black border-2 border-green rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-green dark:focus:ring-blue-500 dark:focus:border-blue-500 font-semibold" placeholder="Search..."/>
                </div>
                </div>
          <div className="flex flex-wrap items-center w-20 max-md:w-16 p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-16 logo" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a> 
          </div>

          <div className='flex justify-center gap-6 lg:gap-12 font-medium'>
            <div>
                <a href="/" className='text-green hover:text-[#FF6347] max-md:text-xs'>Home</a>
            </div>
            <div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"/>
                <div onClick={() => setDarkMode(!darkMode)} className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{darkMode ? "Dark" : "Light"}</span>
              </label>
            </div>
          </div>
        </nav>
   </header>
  )
}

