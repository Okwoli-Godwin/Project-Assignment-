import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-screen flex justify-center overflow-hidden '>
        <div className='w-11/12 flex flex-wrap mt-20 bg-slate-800 pt-20 justify-between'>
        <div className='w-6/12 flex flex-col md:w-full'>
          <h1 className='w-5/6 text-herotext text-6xl font-semibold m-0 leading-tight'>
            Business Payments Made Simple.
          </h1>
          <div className='flex flex-col mt-6'>
            <div className='flex items-center mb-2'>
              <img  alt="" />
              <p className='ml-4 text-heroparagraph font-semibold m-0'>EazyHR performance managemant</p>
            </div>

            <div className='flex items-center mb-2'>
              <img  alt="" />
              <p className='ml-4 text-heroparagraph font-semibold m-0'>EazyHR performance managemant</p>
            </div>

            <div className='flex items-center mb-2'>
              <img  alt="" />
              <p className='ml-4 text-heroparagraph font-semibold m-0'>EazyHR performance managemant</p>
            </div>
            <button className='w-36 h-10 flex justify-center items-center bg-herobutton text-white cursor-pointer mt-4 rounded'>
              Get started
            </button>
            </div>
        </div>
        <div className='w-6/12 flex bg-righthero bg-no-repeat bg-center bg-contain justify-center md:w-full md:justify-center md:flex md:items-center'>
        <img  alt="" className='h-custom object-cover'/>
      </div>
      </div>
      </div>
  )
}

export default Header