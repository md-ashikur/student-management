import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState("bg-[#ffffff] drop-shadow-md");

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition === 0) {
          setNavbarBackground("bg-[#ffffff] drop-shadow-md");
        } else {
          setNavbarBackground("bg-[#ffffff] backdrop-blur-sm ");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <nav className={`${navbarBackground} text-text-primary-light sticky top-0 lg:px-10 z-40`}>
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 max-w-[1500px]">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className=' text-primary-light lg:text-3xl font-black '>PUB STUDENT FORUM</Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/offres">Course</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/à-propos">Login</NavLink>
              </div>
            </div>
            <div className=" flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none  focus:text-white"
              >
                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
  
        {/* mobile---------------- */}
        <div className={`${isOpen ? 'block h-screen' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-4 text-center text-2xl sm:px-3">
            <NavLink to="/" className="block">Home</NavLink>
            <NavLink to="/offres" className="block">Course</NavLink>
            <NavLink to="/contact" className="block">Contact</NavLink>
            <NavLink to="/à-propos" className="block">Login</NavLink>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;