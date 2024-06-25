import React, { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IoLogoBuffer } from "react-icons/io";

const Navbar = ({active}) => {
    const [isOpen,setIsOpen]=useState(false)
  return (
    <div>
    <motion.div className='w-2/3 lg:flex justify-center rounded-full p-4 hidden text-blue-950  shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] relative z-10'  initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }}>
      <div className='flex space-x-1'>
        <Link to={'/'} className={` hover:bg-blue-950 hover:text-white hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/'?"font-semibold text-white bg-blue-950 shadow-lg":""}`}>Home</Link>
        <Link to={'/service'} className={` hover:bg-blue-950 hover:text-white hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/service'?"font-semibold text-white bg-blue-950 shadow-lg":""}`}>Service</Link>
        <Link to={'/about'} className={` hover:bg-blue-950 hover:text-white hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/about'?"font-semibold text-white bg-blue-950 shadow-lg":""}`}>About</Link>
        <Link to={'/contact'} className={` hover:bg-blue-950 hover:text-white hover:font-medium cursor-pointer rounded-full transition-all duration-500 px-10 py-2 ${active==='/contact'?"font-semibold text-white bg-blue-950 shadow-lg":""}`}>Contact</Link>
      </div>
    </motion.div>


    {/*........... For Mobile View Section ............*/}

    <motion.div className='lg:hidden' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>
        <div className='flex justify-between px-5 py-4 text-black'>
        <IoLogoBuffer size={'1.9rem'}/>
        <RiMenu3Line size={'1.7rem'} onClick={()=>setIsOpen(!isOpen)}/>
        </div>
        <hr className='shadow'/>
    </motion.div>

    <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>

    </div>
  );
};

export default Navbar;
