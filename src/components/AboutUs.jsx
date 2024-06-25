import { motion } from 'framer-motion'
import manImg from '../assets/about.jpg'
import React from 'react'


const AboutUs = ({active}) => {
  return (
    <div className='p-5'>

        <div className='lg:flex flex-row items-center lg:mt-10'>
        <div className='flex justify-center items-center lg:w-[40%] w-full relative pt-5 mx-auto'>
          <motion.div className='lg:w-64 w-[85%] lg:h-80 h-44 lg:border-4 border-2 border-[#088395] shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' initial={{ opacity: 0,x:-100 }} animate={active ==='/about' ? { opacity: 1,x:0 } : {}} transition={{ duration: 0.5 }}></motion.div>
          <div className='lg:w-64 w-[85%] lg:h-80 h-44 absolute lg:top-0 ml-3 lg:ml-3 lg:left-5 top-1/2 left-1/2 transform lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 -translate-y-1/2'>
            <motion.img
              src={manImg}
              alt="" 
              className='object-cover h-full w-full shadow-md'
              initial={{ opacity: 0.7,y:-150 }} animate={active ==='/about' ? { opacity: 1,y:0 } : {}} transition={{ duration: 0.8 }}
            />
          </div>
</div>


            <motion.div className='lg:w-[55%] w-full' initial={{ opacity: 0 ,x:80}} animate={active ==='/about' ? { opacity: 1,x:0 } : {}} transition={{ duration: 0.5 }}>
                <div className='space-y-5 mt-5 lg:mt-0'>
                  <h1 className='text-2xl font-semibold text-blue-950 text-center lg:text-left'><span>About Us</span> <hr className='lg:border-2 border-1 lg:w-[8%] w-[70%] mt-1 border-[#088395] mx-auto lg:mx-0'/></h1>
                  <p className='opacity-65 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi ducimus voluptate accusamus autem nisi debitis, numquam optio ipsum consectetur perferendis. Necessitatibus adipisci blanditiis illum delectus. Sequi magni dolor iste delectus incidunt? Vitae eum error modi, veritatis iste incidunt odio.</p>
                  <p className='opacity-65 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi ducimus voluptate accusamus autem nisi debitis, voluptatum eum provident iusto cum aperiam nihil pariatur impedit corrupti numquam optio ipsum consectetur perferendis. delectus incidunt? Vitae eum error modi, veritatis iste incidunt odio.</p>

                </div>
            </motion.div>
        </div>

    </div>
  )
}

export default AboutUs