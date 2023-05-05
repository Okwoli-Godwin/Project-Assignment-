import React from 'react'
import img from "../../assets/img.png"

const Header = () => {
  return (
      <div className='w-full h-20 flex justify-center z-10 fixed bg-white'>
          <div className='w-11/12  flex items-center justify-between'>
              <div className='flex h-screen items-center'>
                  <img src={img} alt="" className='h-20'/>
              </div>
          </div>
    </div>
  )
}

export default Header