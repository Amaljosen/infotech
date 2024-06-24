import React, { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

import { IoLogoBuffer } from "react-icons/io";

const Navbar = ({active}) => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
    <div className='w-2/3 lg:flex justify-center rounded-full p-4 hidden text-white bg-blue-950 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] relative z-10'>
      <div className='flex space-x-1'>
        <Link to={'home'} className={` hover:bg-[#37B7C3] hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/home'?"font-semibold bg-[#37B7C3] shadow-lg":""}`}>Home</Link>
        <Link to={'service'} className={` hover:bg-[#37B7C3] hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/service'?"font-semibold bg-[#37B7C3] shadow-lg":""}`}>Service</Link>
        <Link to={'about'} className={` hover:bg-[#37B7C3] hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/about'?"font-semibold bg-[#37B7C3] shadow-lg":""}`}>About</Link>
        <Link to={'contact'} className={` hover:bg-[#37B7C3] hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/contact'?"font-semibold bg-[#37B7C3] shadow-lg":""}`}>Contact</Link>
      </div>
    </div>


    {/*........... For Mobile View Section ............*/}

    <div className='lg:hidden'>
        <div className='flex justify-between px-5 py-4 text-black'>
        <IoLogoBuffer size={'1.9rem'}/>
        <RiMenu3Line size={'1.7rem'} onClick={()=>setIsOpen(!isOpen)}/>
        </div>
        <hr className='shadow'/>
    </div>

    <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>

    </div>
  );
};

export default Navbar;
