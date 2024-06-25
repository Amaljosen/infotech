import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { GiFastArrow } from "react-icons/gi";
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Link, useLocation } from 'react-router-dom';
import Service from './components/Service';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';


import { IoLogoBuffer } from "react-icons/io";
import { motion } from 'framer-motion';





const LandingPage = () => {
    const location=useLocation()
    const [active,setActive]=useState("/")
    useEffect(()=>{
      setActive(location.pathname)
    },[location.pathname])

  return (
    <div className=''>
           
         <div className=' bg-blue-950 h-screen w-screen relative overflow-hidden' id="particle-container">


        <div className='h-full w-full hidden lg:block'>

        <div className='flex flex-col justify-between text-white h-full'>

        <div className='flex w-full justify-between'>

            <motion.div className='flex py-5 px-7 text-center space-x-1' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>
            <h1 className='text-5xl writing-mode-vertical font-medium'>Info Tech</h1>
            <p className='text-2xl opacity-45 writing-mode-vertical'>Digital Agencies</p>
            </motion.div> 

            {/* <div className='my-12 mx-7 flex items-start'>
            <IoLogoBuffer size={'2.5rem'} />
            <div><h1 className='text-3xl font-medium'>Info Tech</h1>
            <p className='opacity-45 text-sm'>Lorem ipsum dolor sit amet.</p></div>
            </div> */}

            <Link to={'contact'}><motion.div className='relative z-20 bg-blue-950 h-fit w-fit p-4 rounded-full' initial={{ x: 300 }} animate={{ x: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>
                <button className='border-white border-2 w-48 h-14 rounded-full shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'>Need Help ?</button>
            </motion.div></Link>

        </div>

            <div className='mt-auto'>

                <motion.div className='py-5 px-7 space-y-4' initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
                <div className='w-[17%] space-y-2'>
                <h2 className='font-medium'>Follow Us</h2>
                <p className='opacity-65 text-base'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                </div>

                <div className='flex space-x-4'>
                <a href="#" target="_blank"><FaInstagram /></a>
                <a href="#" target="_blank"><LuFacebook /></a>
                <a href="#" target="_blank"><SlSocialLinkedin /></a>
                </div>
                </motion.div>

                <motion.div className=' relative z-20 bg-blue-950 p-4 w-fit rounded-full ' initial={{  y: 80 }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>    
                <Link to={'/contact'}><button className='  border-2 border-white rounded-full flex items-center shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'>

                    <div className='flex items-center w-[27rem] h-14 justify-center'>
                    <div className=''>Lets Transfer Your Digital̉ Presents</div>
                    </div>

                    <div className='bg-white rounded-full p-3 mr-3 text-black shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'> <GiFastArrow  className='-rotate-45 text-blue-950'/></div>
                </button></Link>
                </motion.div>
            </div>

            </div>


        </div>


        {/*........... For Mobile View Section START............*/}

        <div className='w-[90%] h-full mx-auto'>

        <div className='text-white lg:hidden py-2 px-1 flex justify-between items-center'>
        <h1 className='font-semibold'>Info Tech</h1>
        <div className='flex space-x-3'>
          <a href="#" target="_blank"><FaInstagram /></a>
          <a href="#" target="_blank"><LuFacebook /></a>
          <a href="#" target="_blank"><SlSocialLinkedin /></a>
                </div>
        </div>


        {/*........... FOR Mobile View Section END ............*/}


        <div className='lg:w-9/12 lg:h-[95%] lg:p-5 lg:absolute lg:z-10 lg:top-6 lg:right-12 bg-gradient-to-b lg:bg-gradient-to-r from-white via-[#37B7C3] to-[#088395] lg:rounded-3xl h-full rounded-xl overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] animate-gradient bg-[length:150%_150%]'>
          <Navbar active={active}/>
          <div>
          <div className={`${active==='/'?"block":"hidden"}`}><Home active={active}/></div>
          <div className={`${active==='/service'?"":"hidden"}`}><Service active={active}/></div>
          <div className={`${active==='/about'?"":"hidden"}`}><AboutUs active={active}/></div>
          <div className={`${active==='/contact'?"":"hidden"}`}><Contact active={active}/></div>
          </div>
        </div>
          
        </div>



    </div>

    </div>

  )
}

export default LandingPage