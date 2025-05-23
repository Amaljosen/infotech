import React from 'react'
import img from '../assets/pngwing.com.png'
import { GiFastArrow } from "react-icons/gi";
import { IoBicycle } from "react-icons/io5";
import { FaGripLinesVertical } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



export default function Home({active}) {
  return (

    <div className='flex flex-col lg:flex-row p-5'>

       {/* <div className='absolute top-0 left-0 w-full shadow-md'>
        <img src="https://img.freepik.com/free-photo/happy-businesswoman-giving-presentation-natural-resources-his-colleagues_23-2147826560.jpg?t=st=1718339461~exp=1718343061~hmac=2b19eaa84d7ad9f8f05a7ad606b1738760d601465ed1a97bd688c32f5231ae94&w=1800" className='object-cover w-screen h-screen' alt="" />
       </div>  */}

<motion.div className='lg:w-[70%] w-full lg:pb-28' initial={{ opacity: 0 }} animate={active ==='/' ? { opacity: 1, } : {}} transition={{ duration: 0.5 }}>
      <motion.div className='space-y-5 mt-10' initial={{ opacity: 0 }} animate={active ==='/' ? { opacity: 1, } : {}} transition={{ delay: 0.5, duration: 0.5 }}>
        <motion.h1 className='text-5xl lg:text-7xl font-semibold text-blue-950' initial={{ y: -50, opacity: 0 }} animate={active ==='/' ? { opacity: 1,y:0 } : {}} transition={{ delay: 0.5, duration: 0.5 }}>
          <motion.p className='drop-shadow-md'>WE</motion.p>
          <motion.p className='drop-shadow-md'>BUILD</motion.p>
          <motion.p className='drop-shadow-md'>DIGITAL</motion.p>
        </motion.h1>
        <motion.p className='opacity-60' initial={{ opacity: 0,x:-120 }} animate={active ==='/' ? { opacity: 1,x:0 } : {}} transition={{ delay: 0.6, duration: 0.6 }}>
          From web design and development to digital marketing strategies, we craft tailored solutions to drive your online success.
        </motion.p>
        
        <motion.div className='border-blue-950 border-4 w-full h-5 rounded-full relative overflow-hidden shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' initial={{ opacity: 0 ,x:-160 }} animate={{ opacity: 1,x:0 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <motion.div className='absolute -top-3 animate-move' initial={{ x: '-100%' }} animate={active ==='/' ? { opacity: 1,x:'100%' } : {}} transition={{ repeat: Infinity, duration: 2, repeatDelay: 0.5, ease: 'linear' }}>
            <div className='h-3 w-4 mt-3 rounded-full shadow-xl bg-blue-950'></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>

    <motion.div className='flex lg:justify-end lg:items-end mt-5 lg:mt-0' initial={{ opacity: 0,marginTop:'500px' }} animate={active ==='/' ? { opacity: 1,marginTop:0 } : {}} transition={{ duration: 2 }}>
    <div className='lg:w-[60%] w-full space-y-3'>
        <div className='space-y-2 p-5 rounded-3xl backdrop-blur-lg shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] hidden lg:block'>
                <h1 className='lg:text-xl text-lg font-medium text-blue-950'>
                WHAT WE DO ?
                </h1>
                <p className='opacity-60 text-sm'>From web design and development to doital market strategies. we craft tailored solutions to drive your online success.</p>
        </div>

        <div className=' p-3 rounded-3xl shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]'>
            <div>
        <Link to={'service'}><div className='flex items-center'>
            <img className='w-14 h-14 object-cover border border-white rounded-full relative' src="https://t4.ftcdn.net/jpg/07/20/84/95/240_F_720849524_1ydl2i0nO1ktoW4weJt7vvwRYTT5bCLj.jpghttps://t3.ftcdn.net/jpg/07/02/76/90/240_F_702769099_jS0PvHVjUQE0j09uROSijrAdr7EQTXHJ.jpg" alt=""/>
            <img className='w-14 h-14 object-cover border border-white rounded-full relative right-3' src="https://t3.ftcdn.net/jpg/03/68/75/48/240_F_368754879_l22nG4M5ylNdOhBkoikbIthvuW2ecB3E.jpg" alt=""/>
            <img className='w-14 h-14 object-cover border border-white rounded-full relative right-6' src="https://t4.ftcdn.net/jpg/06/80/22/99/240_F_680229909_z3OVIeDoINeSJoVHy8Y0Si0lyurw7qux.jpg" alt=""/>
            <div className="flex justify-center items-center">
              <GiFastArrow
                size="25px"
                className="text-blue-950 rotate-45 animate-shakeWithDelay"
              />
            </div>
        </div></Link>
        <div className='space-y-2 bg-opacity-15 pt-3 lg:hidden'>
                <h1 className='text-xl text-blue-950'>
                WHAT WE DO ?
                </h1>
                <p className='opacity-60'>From web design and development to doital market strategies. we craft tailored solutions to drive your online success.</p>
        </div>
        </div>
        </div>  

     </div>
    </motion.div>

    </div>
  )
}
