import { BiHeart, BiBell } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

import logoImage from "../assets/logo.png";

const Navbar2 = () => {
  return (
    <nav className="bg-[#262261] text-white flex justify-between items-center px-8 py-4">
      <div className="flex items-center">
        <img
          src={logoImage}
          alt="Logo"
          className="h-15 w-[16rem] mr-2 cursor-pointer"
        />
      </div>
      <div className="w-full flex mx-10">
        <select className="bg-[#FAAF40] p-2 px-4 rounded-tl-lg rounded-bl-lg flex-1">
          <option value="category" default hidden>
            Category
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <div className="flex rounded-tr-lg rounded-br-lg w-full border bottom-1 bg-white">
          <input
            type="text"
            placeholder="Search Product Here"
            className="bg-white text-gray-500 py-2.5 px-5  flex-2 rounded-tr-lg rounded-br-lg w-full"
          />
          <IoSearch className="h-6 w-6 text-black mt-2 mr-5 cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        <FaRegUser className="h-6 w-6 mr-4 cursor-pointer" />

        <div className="relative">
        <BiHeart className="h-6 w-6 mr-4 cursor-pointer" />
          <span className="absolute -top-1 right-2 bg-[#FAAF40] text-white text-xs rounded-full px-1">
            2
          </span>
        </div>
        <div className="relative">
        <BiBell className="h-6 w-6 mr-4 cursor-pointer relative"></BiBell>
        <span className="absolute -top-1 right-3 bg-[#FAAF40] text-white text-xs rounded-full px-1">
            9+
          </span>
        </div>
        <div className="relative">
        <LuShoppingCart className="h-6 w-6 cursor-pointer relative"></LuShoppingCart>
        <span className="absolute -top-1 left-4 bg-[#FAAF40] text-white text-xs rounded-full px-1">
            2
          </span>
        </div>
        <span className="ml-2">$00.0</span>
      </div>
    </nav>
  );
};

export default Navbar2;
