import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import auth from "../../../firebase.init";
import { useSignOut } from 'react-firebase-hooks/auth';
import DetailsBody from '../../../partials/students/DetailsBody';


const Details = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [signOut] = useSignOut(auth);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`bg-gray-800 z-50 fixed h-full text-white w-16 flex flex-col items-center transition-all duration-300 ${
            isSidebarOpen ? 'w-64' : 'w-16'
          }`}
        >
          {/* Logo or Sidebar Header */}
          <div className="h-16 flex items-center justify-center">
            {!isSidebarOpen ? (
              <div className="text-2xl">
                {/* Icon for shrunken sidebar */}
                <FiMenu onClick={toggleSidebar} className="cursor-pointer" />
              </div>
            ) : (
              <div className="text-2xl">
                {/* Icon for expanded sidebar */}
                <FiX onClick={toggleSidebar} className="cursor-pointer" />
              </div>
            )}
          </div>
  
          {/* Sidebar Items */}
          <Transition
            show={isSidebarOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex flex-col mt-4">
              <NavLink to="/" active="text-blue-500" className="flex items-center mb-2">
                <span className={!isSidebarOpen ? 'hidden' : 'mr-2'}>All Students</span>
              </NavLink>
              <NavLink to="/admission-form" activeClassName="text-blue-500" className="flex items-center mb-2">
                <span className={!isSidebarOpen ? 'hidden' : 'mr-2'}>Admission Form</span>
              </NavLink>
              <NavLink to="/student-details" activeClassName="text-blue-500" className="flex items-center mb-2">
                <span className={!isSidebarOpen ? 'hidden' : 'mr-2'}>Student Details</span>
              </NavLink>
  
  
              {/* login signup================= */}
              <NavLink to="/login" onClick={async () => {
            const success = await signOut();
            if (success) {
              alert('You are sign out');
            }
          }} activeClassName="text-blue-500" className="flex items-center mb-2">
                <span className={!isSidebarOpen ? 'hidden' : 'mr-2'}>Logout</span>
              </NavLink>
            </div>
          </Transition>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 w-full">
          <div className="">
            <DetailsBody/>
          </div>
        </div>
      </div>
    );
};

export default Details;