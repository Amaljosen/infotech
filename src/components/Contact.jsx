import React from 'react'
import img from './contact.png'

const Contact = () => {
  return (
    <div className='p-5'>

      <h1 className='font-semibold lg:text-6xl text-3xl bg-clip-text text-[#088395] my-5 text-center lg:text-left drop-shadow-md'>Lets Work Together <hr className='border-1 drop-shadow-md border-[#088395] mt-1 lg:hidden'/></h1>
      <div className='flex flex-col-reverse lg:flex-row w-full mt-5 items-center justify-center'>
        <div className='lg:w-[60%] w-full'>
          <form action="" className='flex flex-col lg:w-[80%] w-full space-y-3 text-blue-950 font-medium'>
            <input type="text"  className='rounded-full px-5 py-4 outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' placeholder='Your Good Name'/>
            <input type="email" className='rounded-full px-5 py-4 outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' placeholder='Your Email'/>
            <textarea className='rounded-3xl px-5 py-4 w-full outline-none shadow-[inset_0_2px_6px_rgba(0,0,0,0.6)]' placeholder='Your message...'rows='4'></textarea>
            <button type='submit' className='rounded-full px-5 py-4 bg-gradient-to-r from-[#37B7C3] to-[#088395] text-white font-semibold text-lg shadow-xl'>Send</button>
          </form>
          </div>

          
          <div className='lg:w-[40%] w-full rounded-md '>
          <div className='py-5 px-3 lg:p-0'>
           <img src={img} alt="" className='object-cover'/>
         </div>
         </div>

      </div>

     

    </div>
  )
}

export default Contact