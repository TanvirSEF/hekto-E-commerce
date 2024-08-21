import { Inter } from "next/font/google";
import { IoMailOutline } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import logo from "@/public/images/Hekto.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hekto",
  description: "Best E-commerce platfrom for furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* -----------Header---------- */}
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
        {/* -----------Header---------- */}
        {/* -----------Navbar---------- */}
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
        {/* -----------Navbar---------- */}

        {children}
      </body>
    </html>
  );
}
