import React from 'react'
import img from '../assets/contact.png'
import { motion } from 'framer-motion'


const Contact = ({active}) => {
  return (
    <motion.div className='p-5' initial={{ opacity: 0 }} animate={active ==='/contact' ? { opacity: 1, } : {}} transition={{ duration: 0.5 }}>

      <motion.h1 className='font-semibold lg:text-6xl text-3xl bg-clip-text text-[#088395] my-5 text-center lg:text-left drop-shadow-md' initial={{ opacity: 0 ,y:-80}} animate={active ==='/contact' ? { opacity: 1,y:0 } : {}} transition={{ duration: 0.5 }}>Lets Work Together <hr className='border-1 drop-shadow-md border-[#088395] mt-1 lg:hidden'/></motion.h1>
      <div className='flex flex-col-reverse lg:flex-row w-full mt-5 items-center justify-center'>
        <div className='lg:w-[60%] w-full'>
          <form action="" className='flex flex-col lg:w-[80%] w-full space-y-3 text-blue-950 font-medium'>
            <input type="text"  className='rounded-full px-5 py-4 outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' placeholder='Your Good Name'/>
            <input type="email" className='rounded-full px-5 py-4 outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' placeholder='Your Email'/>
            <textarea className='rounded-3xl px-5 py-4 w-full outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' placeholder='Your message...'rows='4'></textarea>
            <motion.button type='submit' className='rounded-full px-5 py-4 bg-gradient-to-r from-[#37B7C3] to-[#088395] text-white font-semibold text-lg shadow-xl' initial={{ opacity: 0 ,y:80}} animate={active ==='/contact' ? { opacity: 1,y:0 } : {}} transition={{ duration: 0.5 }}>Send</motion.button>
          </form>
          </div>

          
          <motion.div className='lg:w-[40%] w-full rounded-md ' initial={{ opacity: 0,x:130 }} animate={active ==='/contact' ? { opacity: 1,x:0 } : {}} transition={{ duration: 0.5 }}>
          <div className='py-5 px-3 lg:p-0'>
           <img src={img} alt="" className='object-cover'/>
         </div>
         </motion.div>

      </div>

     

    </motion.div>
  )
}

export default Contact