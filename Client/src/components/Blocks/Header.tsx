import React from 'react'
import img from "../../assets/img.png"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
  return (
      <div className='w-full h-20 flex justify-center z-10 fixed bg-white'>
          <div className='w-11/12 flex items-center justify-between'>
              <div className='flex h-screen items-center'>
                  <img src={img} alt="" className='h-20'/>
              </div>

              <div className='flex items-center'>
                  <div className='ml-11 text-green cursor-pointer font-medium'>Product</div>
                  <div className='ml-11 text-green cursor-pointer font-medium'>Who we are</div>
                  <div className='ml-11 text-green cursor-pointer font-medium'>Blog</div>
                  <div className='ml-11 text-green cursor-pointer font-medium'>Contact us</div>
              </div>

              <div className='flex items-center'>
                  <button className='outline-none h-10 w-28 flex justify-center items-center bg-green text-white cursor-pointerrounded'>
                      Sign in
                  </button>
                  <div className='items-center cursor-pointer relative ml-8 text-2xl'>
                      <AiOutlineShoppingCart />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Header