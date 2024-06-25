import React from 'react'
import { SiSpeedypage } from "react-icons/si";
import { IoIosColorPalette } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";

const Service = () => {
  return (
    <div>

       {/* <div className='absolute top-0 left-0 w-full shadow-md'>
        <img src="https://img.freepik.com/free-photo/happy-businesswoman-giving-presentation-natural-resources-his-colleagues_23-2147826560.jpg?t=st=1718339461~exp=1718343061~hmac=2b19eaa84d7ad9f8f05a7ad606b1738760d601465ed1a97bd688c32f5231ae94&w=1800" className='object-cover w-screen h-screen' alt="" />
       </div> */}

       <div className='text-black relative z-20 lg:mt-10 mt-3 lg:space-y-4 space-y-2 mx-3 lg:mx-0 '>
         <div className='bg-gray-50 bg-opacity-5 shadow-md p-4 rounded-xl space-y-2 '>
              <h1 className='text-2xl font-semibold text-sky-900'>Our Service</h1>
              <p className='opacity-65 text-sm'>At WebZspot, we help you build and grow your brand online. Whether you need a new logo, or web designs like UI,UX for a website, we have you covered.</p>
            </div>
            
            

            <div className='grid lg:grid-cols-3 lg:gap-6 gap-2'>
                  <div className='bg-gray-50 bg-opacity-5 shadow rounded-xl overflow-hidden'>
                  <h1 className='text-xl font-medium flex items-center space-x-2 bg-[#088395] p-3 text-white shadow-md '><span>Logo Design</span><SiSpeedypage  size={'28px'}/></h1>
                  <p className='opacity-65 text-sm px-3 py-4 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] lg:h-36'>We create unique and memorable logos that represent your brand's identity. Our designers work with you to bring your vision to life.</p>
                  </div>

                  <div className='bg-gray-50 bg-opacity-5 shadow rounded-xl overflow-hidden'>
                  <h1 className='text-xl font-medium flex items-center space-x-2 bg-[#088395] p-3 text-white shadow-md'><span>Web Development</span><FaLaptopCode size={'28px'}/></h1>
                  <p className='opacity-65 text-sm px-3 py-4 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] lg:h-36'>We build custom websites that are attractive, easy to use, and optimized for search engines. Our websites help you connect with your customers and grow your business.</p>
                  </div>

                  <div className='bg-gray-50 bg-opacity-5 shadow rounded-xl overflow-hidden'>
                  <h1 className='text-xl font-medium flex items-center space-x-2 bg-[#088395] p-3 text-white shadow-md'><span>UI/UX Design</span><IoIosColorPalette size={'28px'}/></h1>
                  <p className='opacity-65 text-sm px-3 py-4 shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] lg:h-36'>We design user-friendly and visually appealing websites that provide a seamless experience. Our focus ensures that your visitors have an engaging and interaction with your site.</p>
                  </div>
            </div>

            <div className='lg:grid grid-cols-2 hidden gap-6'>
              
              <div className='bg-gray-50 bg-opacity-5 p-4 rounded-xl flex items-center justify-center shadow-md'>
                <div className='w-[40%] flex justify-center'>
                <div className='shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] w-[6rem] h-[6rem] flex justify-center items-center rounded-full'><AiFillThunderbolt size={'5rem'} className='p-2 text-sky-950'/></div>
                </div>
                <div className='space-y-2 w-[60%]'>
                <h1 className='text-xl font-medium text-sky-900'>Trustable Service</h1>
                <p className='opacity-65 text-sm'>You can rely on us for dependable and professional help. Your success is our priority.</p>
                </div>
              </div>

              <div className='bg-gray-50 bg-opacity-5 p-4 rounded-xl flex items-center justify-center shadow-md'>
                <div className='w-[40%] flex justify-center'>
                <div className='shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)] w-[6rem] h-[6rem] flex justify-center items-center rounded-full'><FaTruckFast size={'5rem'} className='p-2 text-sky-950'/></div>
                </div>
                <div className='space-y-2 w-[60%]'>
                <h1 className='text-xl font-medium text-sky-900'>Fast Delivery</h1>
                <p className='opacity-65 text-sm'>We deliver your projects quickly without compromising quality. Get your work done on time, every time.</p>
                </div>
              </div>

            </div>

        </div>
    </div>
  )
}

export default Service