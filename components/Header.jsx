import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className=" bg-[#7E33E0] h-[55px] w-full">
          <div className="container justify-between flex mx-auto">
            <div className="flex gap-x-[48px]">
              <div className="flex items-center leading-[55px] gap-x-1 text-white">
                <div className="">
                  <IoMailOutline />
                </div>
                <div className="text-[16px] font-josefin font-[600]">
                  mhhasanul@gmail.com
                </div>
              </div>

              <div className="font-josefin font-[600] text-white text-[16px] flex items-center leading-[55px] gap-x-1">
                <div className="">
                  <FaPhoneVolume />
                </div>
                <div className="">(12345)67890</div>
              </div>
            </div>
            <div className="flex items-center font-josefin font-[600] text-white text-[16px]">
              <ul className="flex gap-x-5">
                <li className="flex">
                  English
                  <MdKeyboardArrowDown />
                </li>
                <li className="flex">
                  USD
                  <MdKeyboardArrowDown />
                </li>
                <li className="flex">
                  Login
                  <FaRegUser />
                </li>
                <li className="flex">
                  Wishlist
                  <CiHeart />
                </li>
              </ul>
              <div className="ml-3 ">
                <IoCartOutline className="text-[25px]" />
              </div>
            </div>
          </div>
        </header>
  )
}

export default Header