import { LuNewspaper } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineTruck } from "react-icons/hi2";
import { RiVisaLine } from "react-icons/ri";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";

import { useEffect, useState } from "react";

const Order = ({ addToCart, addedProduct, handleTotalPrice }) => {

const [currentValue, setCurrentValue] = useState(0);
const [cartItems, setCartItems] = useState([]);

const handleClick = () => {
  const increment = Math.min(35, Math.max(0, 100 - currentValue));
  setCurrentValue(Math.min(100, currentValue + increment));
};
const removeProduct = (index) => {
  const updatedCartItems = [...cartItems];
  updatedCartItems.splice(index, 1);
  setCartItems(updatedCartItems);
  return updatedCartItems;
}
const getTotalPrice = () => {
  let total = cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0);
  handleTotalPrice(total)
  return total;
}


useEffect(() => {
  if (addToCart) {
    setCartItems(addToCart);
  }
}, [addToCart]);
useEffect(() => {
  setCartItems(addedProduct)
}, [])


  return (
    <>
      <section className="sm:px-2 md:px-32 py-10">
        <div className="flex items-center gap-1">
          <p className="text-md cursor-pointer">
            <p className="sm:text-sm md:text-lg text-gray-500">{`Home > Orders > ID 3354654654526`}</p>
          </p>
        </div>
        <div className="flex justify-between items-center my-5 p-2">
          <div>
            <h1 className="sm:text-[14px] md:text-2xl">Order ID: 3354654654526</h1>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-1 sm:p-1 md:p-2 text-[#667085] text-[15px] font-medium rounded-[4px] border-2 border-[#d9d9d9]">
              <LuNewspaper className="sm:text-[10px] md:text-[16px]" />
               <span className="sm:text-[10px] md:text-[14px]">Invoice</span>
            </button>
            <button className="flex items-center gap-1 sm:p-1 md:p-2 text-white text-[15px] font-medium rounded-[4px] bg-[#262261]">
              <SlLocationPin  className="sm:text-[10px] md:text-[16px]"/>
              <span className="sm:text-[10px] md:text-[14px]">Track Order</span>
            </button>
          </div>
        </div>
        <div className="flex gap-0 mb-5">
          <div className="border-r-[1px] px-2">
            <h1 className="text-[#667085] sm:text-[12px] md:text-[16px]">
              Order date: <span className="text-black">Feb 24, 2024</span>
            </h1>
          </div>
          <div className="flex items-center gap-1 border-l-[1px] px-2 text-[#12b76a]">
            <HiOutlineTruck className="sm:text-[10px] md:text-lg" />
            <h1 className="sm:text-[10px] md:text-[16px]">Estimate delivery: March 17, 2024</h1>
          </div>
        </div>
        <hr />


        <div 
        className="sm:flex sm:flex-col sm:p-1 md:p-4"> 
          <div className="flex justify-between  px-0 sm:w-full">
            <h1 className={`${currentValue>=0 ? "text-[#262261]" : "text-[#d0d5dd]"} sm:text-[10px] md:text-[16px]`}>Order Confirm</h1>
            <h1 className={`${currentValue>=35 ? "text-[#262261]" : "text-[#d0d5dd]"} sm:text-[10px] md:text-[16px]`}>Shipped</h1>
            <h1 className={`${currentValue>=70 ? "text-[#262261]" : "text-[#d0d5dd]"} sm:text-[10px] md:text-[16px]`}>Out of Delivery</h1>
            <h1 className={`${currentValue>=100 ? "text-[#262261]" : "text-[#d0d5dd]"} sm:text-[10px] md:text-[16px]`}>Delivered</h1>
            </div>
          <div className="flex justify-center my-4">
            <div className="w-[100%] sm:mx-5 md:mx-0 h-1 flex sm:justify-between items-center">
              <input
        type="range"
        min={0}
        max={100}
        value={currentValue}
        onChange={(e) => setCurrentValue(parseInt(e.target.value))}
        className="w-full mr-4 bg-transparent rounded-full h-2 pointer-events-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      />
            </div>
          </div>
          <div className="flex items-center justify-between my-6">
              <p className={`${currentValue>=0 ? "text-[#262261]" : "text-[#778093]"} sm:text-[10px] md:text-[16px]`}>Wed, 11th Jan</p>
              <p className={`${currentValue>=35 ? "text-[#262261]" : "text-[#778093]"} sm:text-[10px] md:text-[16px]`}>Wed, 11th Jan</p>
              <p className={`${currentValue>=70 ? "text-[#262261]" : "text-[#778093]"} sm:text-[10px] md:text-[16px]`}>Wed, 11th Jan</p>
              <p className={`${currentValue>=100 ? "text-[#262261]" : "text-[#778093]"} sm:text-[10px] md:text-[16px]`}>Wed, 11th Jan</p>

          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-4 py-2 bg-[#262261] text-[#fff]" onClick={handleClick}>Next</button>
        </div>

        <div className="h-auto sm:my-2 md:my-5 sm:py-2 md:py-8 rounded-lg">
          {/* <div
            className="h-auto w-full sm:my-2 md:my-5  sm:px-4 md:px-8 sm:py-4 md:py-10 rounded-lg"
            style={{
              boxShadow:
                "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="rounded-lg flex justify-between items-center my-2 sm:px-2 md:px-5 sm:py-2 md:py-4">
              <div className="w-full flex items-center gap-2">
                <img src={orderImage} className="sm:h-10 md:h-auto sm:w-10 md:w-auto" alt="" />
                <p className="text-[#5c5c5c] sm:text-[12px] md:text-[16px]">Notebook Elite 321</p>
              </div>
              <h1 className="text-[#a8a8a8] text-lg sm:text-[12px] md:text-[16px]">$2499</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center my-2 sm:px-2 md:px-5 sm:py-2 md:py-4">
              <div className="w-full flex items-center gap-2">
                <img src={orderImage} className="sm:h-10 md:h-auto sm:w-10 md:w-auto" alt="" />
                <p className="text-[#5c5c5c] sm:text-[12px] md:text-[16px]">Notebook Elite 321</p>
              </div>
              <h1 className="text-[#a8a8a8] text-lg sm:text-[12px] md:text-[16px]">$2499</h1>
            </div>
            <hr />
            <div className="flex justify-end my-2">
              <div>
                <p className="text-[#a8a8a8] sm:text-[12px] md:text-[16px]">Total</p>
                <h1 className="sm:text-[16px] md:text-3xl">$2499.10</h1>
              </div>
            </div>
          </div> */}

<div
            className="sm:w-full h-auto sm:mx-0 md:mx-5 sm:px-2 md:px-5 py-5 rounded-lg"
            style={{
              boxShadow:
              "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="rounded-lg flex flex-col sm:flex-row justify-between items-center md:px-10 px-3 sm:px-2 py-3 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-[12px] md:text-base">Product</h1>
              <h1 className="text-[#a8a8a8] text-[12px] md:text-base">Amount</h1>
              <h1 className="text-[#a8a8a8] text-[12px] md:text-base">Action</h1>
            </div>

            {cartItems?.length > 0 && cartItems?.map((product, index) => (
              <div key={index} className="rounded-[4px] flex flex-col sm:flex-row justify-between items-center  px-3 sm:px-0 py-3 sm:my-1 md:my-3">
                <div className="flex flex-1 items-center">
                  <img
                    src={product?.image}
                    alt=""
                    className="h-8 w-8"
                  />
                  <p className="text-[#a8a8a8] sm:text-[10px] md:text-base ml-2">
                    {product?.name}
                  </p>
                </div>
                <div className="flex-1 flex justify-center sm:mr-8 sm:pl-4">
                  <h1 className="text-[#a8a8a8] sm:text-[12px] md:text-base">{`$${product?.price}`}</h1>
                </div>
                <div className="flex flex-1 justify-end px-2">
                  <button onClick={() => removeProduct(index)} className="text-[#bcbcbc] text-xs md:text-base">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end my-2">
              <div>
                <p className="text-[#bcbcbc] text-sm">Total</p>
                <h1 className="sm:text-[14px] md:text-3xl">{`$${getTotalPrice()}`}</h1>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <hr />
        <div className="flex justify-between my-10">
          <div className="w-[50%] ">
            <h1 className="font-medium sm:text-[14px] md:text-2xl">Payment</h1>
            <p className="flex items-center gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">
              Visa**56 <span><RiVisaLine className="text-[#262261] text-3xl" /></span>
            </p>
          </div>
          <div className="w-[50%] ">
            <h1 className="font-medium sm:text-[14px] md:text-2xl">Delivery</h1>
            <p className="flex items-center gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">Address</p>
            <p className="sm:text-[12px] md:text-[16px] text-[#667085]">ABC XYZ 123</p>
          </div>
        </div>
        <hr />
        <div className="flex justify-between my-10">
          <div className="w-[50%] ">
            <h1 className="sm:text-[14px] md:text-2xl font-medium">Need Help</h1>
            <p className="flex items-center sm:gap-1 md:gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">
              <AiOutlineInfoCircle /> Support <BsArrowUpRight className="text-md" />
            </p>
          </div>
          <div className="w-[50%] ">
            <h1 className="sm:text-[14px] md:text-2xl font-medium">Order Sumary</h1>
            <div className="flex justify-between my-2">
            <p className="flex items-center gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">Discount</p>
            <p className="sm:text-[12px] md:text-[16px] text-[#667085]">$5544</p>
            </div>
            <div className="flex justify-between my-2">
            <p className="flex items-center gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">Discount</p>
            <p className="sm:text-[12px] md:text-[16px] text-[#667085]">(20%) - $1190.40</p>
            </div>
            <div className="flex justify-between my-2">
            <p className="flex items-center gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">Dilvery</p>
            <p className="sm:text-[12px] md:text-[16px] text-[#667085]">$00.0</p>
            </div>
            <div className="flex justify-between my-2">
            <p className="flex items-center gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">Tax</p>
            <p className="sm:text-[12px] md:text-[16px] text-[#667085]">+$221.88</p>
            </div>
            <div className="flex justify-between my-2">
            <p className="flex items-center gap-2 sm:text-[12px] md:text-[16px] text-[#667085]">Total</p>
            <p className="sm:text-[16px] md:text-[18px] text-[#141414] font-semibold">$221.88</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
