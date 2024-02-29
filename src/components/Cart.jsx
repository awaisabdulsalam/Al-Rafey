import { TbHeart } from "react-icons/tb";
import { MdOutlineShare } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { LiaCommentDots } from "react-icons/lia";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineTruck } from "react-icons/hi2";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt2.png";
import Reviews from "./Reviews";

const Cart = () => {
  return (
    <>
    <section className="sm:flex sm:flex-col md:flex md:flex-row gap-10 my-10 sm:px-4 md:px-10">
      <section className="md:w-1/2">
        <div>
          <img src={shirt1} alt="" />
        </div>
        <div className="flex justify-center items-center gap-2 my-5">
          <div>
            <MdArrowBackIosNew className="text-2xl cursor-pointer" />
          </div>
          <img src={shirt2} alt="" className="sm:h-[60px] sm:w-[60px] md:h-auto md:w-auto border-2 border-[#262261] rounded-lg" />
          <img src={shirt2} alt="" className="sm:h-[60px] sm:w-[60px] md:h-auto md:w-auto cursor-pointer" />
          <img src={shirt2} alt="" className="sm:h-[60px] sm:w-[60px] md:h-auto md:w-auto cursor-pointer" />
          <img src={shirt2} alt="" className="sm:h-[60px] sm:w-[60px] md:h-auto md:w-auto cursor-pointer" />
          <div>
            <MdArrowForwardIos className="text-2xl cursor-pointer" />
          </div>
        </div>
      </section>
      <section className="md:w-1/2">
        <p className="sm:text-sm md:text-lg text-gray-500">{`Home > Fun > Sideboard`}</p>
        <div className="flex align-middle justify-between py-5">
          <div className="w-full">
            <h1 className="sm:text-[16px] md:text-3xl">Embrace Sideboard</h1>
            <p className="sm:text-sm md:text-lg text-gray-400">Teixeira Design Studio</p>
          </div>
          <div>
            <div className="w-full flex gap-5 justify-center">
              <div className="sm:flex sm:items-center sm:px-1 md:px-2 sm:py-1 md:py-2 bg-[#ffe3ba3a] rounded-lg">
                <TbHeart className="sm:xl md:text-2xl text-[#faaf40]" />
                <span className="text-[#faaf40] sm:font-normal sm:text-sm md:font-semibold">109</span>
              </div>
              <div className="bg-[#c5c3ff64] sm:font-normal md:font-semibold rounded-lg sm:px-2 md:px-2 sm:py-1 md:py-2">
                <MdOutlineShare className="sm:text-xl md:text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex sm:px-0 md:px-5 gap-10 my-10">
          <div>
            <h1 className="sm:text-xl md:text-4xl font-semibold text-[#262261]">$71.56</h1>
            <span className="sm:text-md md:text-2xl text-gray-400">
              <strike> $71.56</strike>
            </span>
          </div>
          <div className="flex-col">
            <div className="flex justify-start gap-2">
              <div className="flex items-center gap-1 sm:px-2 md:px-4 sm:py-1 md:py-2 bg-[#ffe3ba3a] rounded-full">
                <IoIosStarOutline className="sm:text-sm md:text-2xl text-[#faaf40]" />
                <span className="text-[#faaf40] sm:font-normal sm:text-[12px] md:text-lg">4.8</span>
              </div>
              <div className="flex items-center gap-1 sm:px-2 md:px-4 sm:py-1 md:py-2 bg-[#c5c3ff64] rounded-full">
                <LiaCommentDots className="sm:text-sm md:text-xl text-[#1b1b1c]" />
                <span className="text-[#585587] sm:font-normal sm:text-[10px] md:text-lg">67 Reviews</span>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-gray-400 sm:text-[12px] md:text-[16px]">
                <span className="text-green-800 md:font-semibold">93%</span> of
                buyers recommeded this.
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="my-10">
          <h1 className="sm:text-sm md:text-lg text-gray-400">Choose a color</h1>
          <div className="flex justify-start gap-5 my-4">
            <div className="sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-blue-500"></div>
            <div className="sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-red-500"></div>
            <div className="sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-green-500"></div>
            <div className="sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-yellow-500"></div>
            <div className="sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-purple-500"></div>
          </div>
        </div>
        <hr />
        <div className="my-10">
          <h1 className="sm:text-sm md:text-lg text-gray-400">Choose a Size</h1>
          <div className="flex justify-start flex-wrap gap-5 my-4">
            <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
              <input
                type="radio"
                value="Small"
                className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
              />
              <span className="sm:text-[12px] md:text-[16px]">Extra Small</span>
            </div>
            <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
              <input
                type="radio"
                value="Small"
                className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
              />
              <span className="sm:text-[12px] md:text-[16px]">Small</span>
            </div>
            <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
              <input
                type="radio"
                value="Small"
                className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
              />
              <span className="sm:text-[12px] md:text-[16px]">Medium</span>
            </div>
            <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
              <input
                type="radio"
                value="Small"
                className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
              />
              <span className="sm:text-[12px] md:text-[16px]">Large</span>
            </div>
            <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
              <input
                type="radio"
                value="Small"
                className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
              />
              <span className="sm:text-[12px] md:text-[16px]">X Large</span>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex justify-center align-middle gap-5 bg-slate-100 px-4 py-2 rounded-lg">
            <button className="text-xl">-</button>
            <span className="text-xl font-semibold">5</span>
            <button className="text-xl">+</button>
          </div>
          <div>
            <button className="flex justify-center items-center bg-[#262261] text-white w-full px-4 py-3 rounded-md">
              <LuShoppingCart className="" />
              <span className="mx-2">|</span> Add to Cart
            </button>
          </div>
        </div>

        <div className="border border-gray-300 my-10 p-4 rounded">
          <div className="flex items-start gap-2 mb-4">
            <HiOutlineTruck className="text-[#e1827c] text-3xl" />
            <div>
              <h2 className="text-lg font-semibold">Free Delivery</h2>
              <p className="text-gray-500 underline mt-1">Enter your Postal code for Delivery Availability</p>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex items-start gap-2 mb-4">
            <LiaShoppingBagSolid className="text-[#e1827c] text-3xl" />
            <div>
              <h2 className="text-lg font-semibold">Return Delivery</h2>
              <p className="text-gray-500 underline mt-1">Free 30 days Delivery Return. Details</p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <section className="px-10">
      <nav>
        <ul className="flex gap-5 px-10 py-2">
          <li><a href="" className="nav_link">Description</a></li>
          <li><a href="" className="nav_link">Reviews</a></li>
          </ul>
          <hr />
      </nav>
    </section>
    <Reviews />
    </>
  );
};

export default Cart;
