import React from 'react'
import { SiWindows11 } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-100 to-amber-50'>
      <ul className='flex items-center justify-center text-base font-semibold'>
        
            <li className='flex items-center gap-2 hover:bg-[#d4d4d2] py-3 px-4'>
                <SiWindows11 />
                <p>LeaderBoard</p>
            </li>
        
            <li className='flex items-center gap-2 hover:bg-[#d4d4d2] py-3 px-4'>
                <p>Historical Trading</p>
                <IoMdArrowDropdown />
            </li>

            <li className='hover:bg-[#d4d4d2] py-3 px-4'>
                <p>Historical Chart</p>
            </li>

            <li className='hover:bg-[#d4d4d2] py-3 px-4'>
                <p>Scanners</p>
            </li>

            <li className='hover:bg-[#d4d4d2] py-3 px-4'>
                <p>Alerts</p>
            </li>

            <li className='hover:bg-[#d4d4d2] py-3 px-4'>
                <p>Basic Backtest</p>
            </li>

            <li className='hover:bg-[#d4d4d2] py-3 px-4'>
                <p>Advanced Backtest</p>
            </li>

            <li className='hover:bg-[#d4d4d2] py-3 px-4'>
                <p>Pricing</p>
            </li>

            <li className='hover:bg-[#d4d4d2] py-3 px-4'>
                <p>My Earnings</p>
            </li>
      </ul>
    </div>
  )
}

export default Navbar
