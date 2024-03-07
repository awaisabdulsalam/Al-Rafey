import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import purchaseLogo from "../assets/purchaseLogo.png";
import mobileImage from "../assets/mobile.png";

const Purchase = ({ addToCart, totalPrice }) => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (addToCart && addToCart.length > 0) {
      setCartItems(addToCart);
    }
  }, [addToCart]);

  const removeProduct = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  }

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  }

  const getTotalPrice = () => {
    let total = addToCart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPrice(total);
    return total;
  }

  const handleColor = (color) => {
    const allColor = document.querySelectorAll(".color_option");
    allColor.forEach((option) => {
      option.style.border = "none";
      // option.style.padding = "0";
      option.classList.remove("p-3");
    });
    const selected = document.getElementById(color);
    selected.style.border = `3px solid #262261`;
    selected.classList.add("p-3");
  };


  return (
    <>
      <section className="px-32 py-10 bg-[#f6f9f8]">
        <div className="flex items-center gap-1 sm:text-[12px] md:text-[16px]">
          <GoArrowLeft className="text-xl cursor-pointer sm:text-[12px] md:text-[16px]" />
          <span className="cursor-pointer">Back</span>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img src={purchaseLogo} alt="" className="sm:h-16 sm:my-2" />
          </div>
          <div className="flex justify-center">
            <h1 className="sm:text-[14px] md:text-3xl my-5">
              Complete a Purchase
            </h1>
          </div>
        </div>
      </section>
      <div className="h-auto sm:w-full sm:my-1 md:my-5 sm:mx-0 md:mx-0 sm:px-2 md:px-10 sm:py-2 md:py-8 rounded-lg">
         <div className="sm:w-full sm:px-0 flex flex-col md:flex-row justify-between  rounded p-6">
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

            {cartItems.length > 0 && cartItems?.map((product, index) => (
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
        <div className="flex justify-center my-10">
          <button className="w-full sm:p-1 md:p-3 text-[#262261] hover:text-[#fff] hover:bg-[#262261] hover:border-[#262261] sm:text-[10px] md:text-[20px] rounded-[4px] border-2 border-[#d9d9d9]">
            <span>Do you have any discount code?</span>
          </button>
        </div>
        <div className="mt-5">
          <h3 className="text-[#5c5c5c] sm:text-[12px] md:text-[18px]">
            Payment Method
          </h3>
          <br />
          <div className="flex sm:gap-2 md:gap-5">
            <div onClick={() => handleColor("blue")} id="blue"  className="color_option flex items-center  sm:gap-2 md:gap-5 sm:p-1 md:p-5 sm:border-[2px] md:border-[3px] border-[#262261] rounded-[4px] cursor-pointer">
              <div className="color_option sm:h-[16px] md:h-[50px] sm:w-[16px] md:w-[50px] bg-[#d9d9d9] rounded-full"></div>
              <p className="text-[#5c5c5c] sm:text-[10px] md:text-[16px]">
                Cash on Delivery
              </p>
            </div>
            <div onClick={() => handleColor("red")} id="red" className="color_option flex items-center  sm:gap-2 md:gap-5 sm:p-1 md:p-5 sm:border-[2px] md:border-[3px] rounded-[4px] cursor-pointer">
              <div className="sm:h-[16px] md:h-[50px] sm:w-[16px] md:w-[50px] bg-[#d9d9d9] rounded-full"></div>
              <p className="text-[#5c5c5c] sm:text-[10px] md:text-[16px]">
                Cash on Delivery
              </p>
            </div>
            <div onClick={() => handleColor("green")} id="green" className="color_option flex items-center  sm:gap-2 md:gap-5 sm:p-1 md:p-5 sm:border-[2px] md:border-[3px]  rounded-[4px] cursor-pointer">
              <div className="sm:h-[16px] md:h-[50px] sm:w-[16px] md:w-[50px] bg-[#d9d9d9]  rounded-full"></div>
              <p className="text-[#5c5c5c] sm:text-[10px] md:text-[16px]">
                Cash on Delivery
              </p>
            </div>
          </div>
        </div>


        <div className="w-full mt-5 bg-white rounded-lg overflow-hidden">
          <div className="">
            <h3 className="text-[#5c5c5c] sm:text-[12px] md:text-[18px] my-5">
              Personal Info
            </h3>

            <form>
              <div className="sm:flex sm:flex-col md:flex md:flex-row justify-between gap-5 mb-4 my-5">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block sm:text-[12px] md:text-[16px] font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="mt-1 sm:p-1 md:p-2 sm:text-[12px] md:text-[16px] w-full border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block sm:text-[12px] md:text-[16px] font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mt-1 sm:p-1 md:p-2 sm:text-[12px] md:text-[16px] w-full border border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-[#5c5c5c] sm:text-[12px] md:text-[18px] my-5">
                  Personal Info
                </h3>
                <div className="sm:flex sm:flex-col md:flex md:flex-row justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="block sm:text-[12px] md:text-[16px] font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="mt-1 sm:p-1 md:p-2 sm:text-[12px] md:text-[16px] w-full border border-gray-300 rounded-md"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block sm:text-[12px] md:text-[16px] font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="mt-1 sm:p-1 md:p-2 sm:text-[12px] md:text-[16px] w-full border border-gray-300 rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="block sm:text-[12px] md:text-[16px] font-medium text-gray-700"
                    >
                      Detailed Address
                    </label>
                    <textarea
                      className="w-full border-2 border-gray-300"
                      name=""
                      id=""
                      cols="10"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="">
                <button className="w-full sm:p-1 md:p-2 text-white hover:text-[#262261] bg-[#262261] hover:bg-[#fff] border-2 hover:border-[#262261] sm:text-[14px] md:text-lg rounded-lg">
                  Confirm Your Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Purchase;
