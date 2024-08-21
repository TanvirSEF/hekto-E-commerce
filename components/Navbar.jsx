import React from 'react'
import logo from "@/public/images/Hekto.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="h-[80px]">
    <div className="container flex justify-between items-center h-[80px] mx-auto">
      <div className="w-[20%]">
        <Image src={logo} alt="logo" className="" />
      </div>
      <div className="w-[50%]">
        <ul className="flex gap-x-[35px]">
          <li className="font-lato font-[400] text-[16px] text-[#0D0E43]">
            Home
          </li>
          <li className="font-lato font-[400] text-[16px] text-[#0D0E43]">
            Pages
          </li>
          <li className="font-lato font-[400] text-[16px] text-[#0D0E43]">
            Products
          </li>
          <li className="font-lato font-[400] text-[16px] text-[#0D0E43]">
            Blog
          </li>
          <li className="font-lato font-[400] text-[16px] text-[#0D0E43]">
            Shop
          </li>
          <li className="font-lato font-[400] text-[16px] text-[#0D0E43]">
            Contact
          </li>
        </ul>
      </div>
      <div className="w-[30%] flex">
        <input
          type="search"
          className="w-[85%] bg-[#D9D9D9] h-[40px] outline-none px-5"
        />
        <IoSearch className="w-[15%] bg-[#FB2E86] h-[40px] py-[10px] text-white" />
      </div>
    </div>
  </nav>
  )
}

export default Navbar