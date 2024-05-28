import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <div className='flex justify-between border-b border-gray-200 px-20 py-6'>
      <img className='w-32 h-11' src="https://www.unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="" />
      <div className='flex gap-4'>
        <button className='flex items-center'>
            <img className='w-7' src="https://www.unfluke.in/static/media/bell-icon.d99e8edc.png" alt="" />
            <IoMdArrowDropdown />
        </button>
        <button className='flex items-center'>
            <img className='w-7' src="https://www.unfluke.in/static/media/coin.9bfaef7e.jpeg" alt="" />
            <p>0</p>
        </button>
        <button className='flex items-center'>
            <img className='w-7' src="https://www.unfluke.in/static/media/monkey.5456259d.jpg" alt="" />
            <IoMdArrowDropdown />
        </button>
      </div>
    </div>
  )
}

export default Header
