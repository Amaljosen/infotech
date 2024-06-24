import React from 'react';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`${isOpen ? "ml-0" : "ml-[100%]"} fixed w-full h-screen top-0 left-0 z-40 bg-black bg-opacity-85 text-white transition-all duration-300`}>
      <div className='h-full'>
        <div className='flex justify-end p-8'>
          <IoClose size={'40px'} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className='flex flex-col space-y-16 text-2xl items-center w-full mt-10'>
          <Link onClick={()=>{setIsOpen(false)}} to={'/'}>Home</Link>
          <Link onClick={()=>{setIsOpen(false)}} to={'service'}>Service</Link>
          <Link onClick={()=>{setIsOpen(false)}} to={'about'}>About Us</Link>
          <Link onClick={()=>{setIsOpen(false)}} to={'contact'}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
