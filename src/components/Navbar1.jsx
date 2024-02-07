import React from 'react'
import { BiMap } from "react-icons/bi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
import { LuInstagram } from "react-icons/lu";
import { RiFacebookCircleLine } from "react-icons/ri";

const Navbar1 = () => {
  return (
    <nav className="bg-[#1e1e1e] text-white flex justify-between items-center px-10 py-2">
      <div className="flex items-center gap-10 px-10">
        <div className="flex items-center gap-3 mr-4">
          <BiMap className='text-2xl' />
          <span>ABC</span>
        </div>
        <div className="flex items-center gap-3 ml-5">
          <MdOutlineLocalPhone className='text-2xl'  />
          <span>+923091354207</span>
        </div>
      </div>

      <div className="flex items-center px-10">
        <div className="flex space-x-4">
          <a href="#" className="text-white">
          <AiOutlineYoutube className='text-2xl' />
          </a>
          <a href="#" className="text-white">
          <LuInstagram className='text-2xl' />
          </a>
          <a href="#" className="text-white">
          <RiFacebookCircleLine className='text-2xl' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar1