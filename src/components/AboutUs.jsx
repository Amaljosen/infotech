import React from 'react'

const AboutUs = () => {
  return (
    <div className='p-5'>

        <div className='lg:flex flex-row items-center lg:mt-10'>
        <div className='flex justify-center items-center lg:w-[40%] w-full relative pt-5 mx-auto'>
          <div className='lg:w-64 w-[85%] lg:h-80 h-44 lg:border-4 border-2 border-[#088395]'></div>
          <div className='lg:w-64 w-[85%] lg:h-80 h-44 absolute lg:top-0 ml-3 lg:ml-3 lg:left-5 top-1/2 left-1/2 transform lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 -translate-y-1/2 shadow'>
            <img
              src="https://img.freepik.com/free-photo/happy-male-entrepreneur-using-desktop-pc-while-working-office-there-are-people-background_637285-1037.jpg?t=st=1719224450~exp=1719228050~hmac=6689d0f8f7cb5bf9f6f8e0f11e2e1d90a6a125ab9eb56e3d8f7c2dc2dda43b03&w=1480" 
              alt="" 
              className='object-cover h-full w-full'
            />
          </div>
</div>


            <div className='lg:w-[55%] w-full'>
                <div className='space-y-5 mt-5 lg:mt-0'>
                  <h1 className='text-2xl font-semibold text-blue-950 text-center lg:text-left drop-shadow'><span>About Us</span> <hr className='lg:border-2 border-1 lg:w-[8%] w-[70%] mt-1 border-[#088395] mx-auto lg:mx-0'/></h1>
                  <p className='opacity-65 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi ducimus voluptate accusamus autem nisi debitis, voluptatum eum provident iusto cum aperiam nihil pariatur impedit corrupti numquam optio ipsum consectetur perferendis. Necessitatibus adipisci blanditiis illum delectus. Sequi magni dolor iste delectus incidunt? Vitae eum error modi, veritatis iste incidunt odio.</p>
                  <p className='opacity-65 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi ducimus voluptate accusamus autem nisi debitis, voluptatum eum provident iusto cum aperiam nihil pariatur impedit corrupti numquam optio ipsum consectetur perferendis. Necessitatibus adipisci blanditiis illum delectus. Sequi magni dolor iste delectus incidunt? Vitae eum error modi, veritatis iste incidunt odio.</p>

                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutUs