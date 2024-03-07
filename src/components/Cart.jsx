import { TbHeart } from "react-icons/tb";
import { TbHeartFilled } from "react-icons/tb";
import { MdOutlineShare } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { LiaCommentDots } from "react-icons/lia";
import { LuShoppingCart } from "react-icons/lu";
import { HiOutlineTruck } from "react-icons/hi2";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt2.png";
import Reviews from "./Reviews";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ addToCart, addedProduct, products, setAddtoCart }) => {
  const shirts = [
    { shirt: shirt1 },
    { shirt: shirt2 },
    { shirt: shirt1 },
    { shirt: shirt2 },
  ];

  const [quantity, setQuantity] = useState(1);
  const [heart, setHeart] = useState(false);
  const [star, setStar] = useState(false);
  const [selectedShirtIndex, setSelectedShirtIndex] = useState(0);
  const [details, setDetails] = useState(0)
  const [likes, setLikes] = useState(109);
  const [like, setLike] = useState(false);

  const handleColor = (color) => {
    const allColor = document.querySelectorAll(".color_option");
    allColor.forEach((option) => {
      option.style.border = "none";
      // option.style.padding = "0";
      option.classList.remove("p-3");
    });
    const selected = document.getElementById(color);
    selected.style.border = `3px solid #333`;
    selected.classList.add("p-3");
  };

  const handleShirt = (index) => {
    setSelectedShirtIndex(index);
  };

  const handleAddToCart = (index) => {
    const added = [...addToCart];
    const included = added.includes(products[index])
    
    if (!included) {
      added.push(products[index]);
    } 
    setAddtoCart(added)
  };


  
  return (
    <>
      {addedProduct.length === 0 ? 
      <section className="flex justify-center my-5">
        <h1 className="sm:text-[16px] md:text-3xl">Your Cart is Empty</h1>
        </section>
       : 
       <>
       <section className="sm:flex sm:flex-col md:flex md:flex-row gap-10 my-10 sm:px-4 md:px-10">
        <section className="md:w-1/2">
          <div className="flex justify-center">
            <img
              src={addedProduct[selectedShirtIndex]?.image}
              alt=""
              className="h-[80vh] w-[80vh]"
            />
          </div>

          <div className="flex justify-center gap-2">
            <div className="flex items-center">
              <MdArrowBackIosNew
                className="text-2xl cursor-pointer"
                onClick={() => {
                  if (selectedShirtIndex > 0) {
                    setSelectedShirtIndex((prev) => prev - 1);
                  }
                }}
              />
            </div>
            {
            addedProduct.map((product, index) => {
              return (
                <div
                  key={index}
                  className={`flex justify-center items-center gap-2 my-5 `}
                >
                  {product.images.map((img, index) => (
                    <img
                    key={index}
                      src={img}
                      alt=""
                      className={`sm:h-[60px] sm:w-[60px] md:h-[18vh] rounded-lg md:w-[100px] flex justify-center items-center gap-2 cursor-pointer  ${
                        selectedShirtIndex === index
                          ? "border-[3px] border-[#262261] rounded-lg"
                          : ""
                      }`}
                      onClick={() => handleShirt(index)}
                    />
                  )) 
                  }

                </div>
              );
            })
            }
            <div className="flex items-center">
              <MdArrowForwardIos
                className="text-2xl cursor-pointer"
                onClick={() => {
                  if (selectedShirtIndex < addedProduct[details].images.length - 1) {
                    setSelectedShirtIndex((prev) => prev + 1);
                  }
                }}
              />
            </div>
          </div>
          
        </section>
        <section className="md:w-1/2">
          <p className="sm:text-sm md:text-lg text-gray-500">{`Home > Fun > Sideboard`}</p>
          <div className="flex align-middle justify-between py-5">
            <div className="w-full">
              <h1 className="sm:text-[16px] md:text-3xl">{addedProduct[details]?.name}</h1>
              <p className="sm:text-sm md:text-lg text-gray-400">
              {addedProduct[details]?.name}
              </p>
            </div>
            <div>
              <div className="w-full flex gap-5 justify-center">
                <div
                  onClick={() => {
                    setHeart((prev) => !prev);
                    setLike((prev) => !prev);
                  }}
                  className="sm:flex sm:items-center sm:px-1 md:px-2 sm:py-1 md:py-2 bg-[#ffe3ba3a] cursor-pointer rounded-lg"
                >
                  {heart ? (
                    <TbHeartFilled className="sm:xl md:text-2xl text-[#faaf40] cursor-pointer" />
                  ) : (
                    <TbHeart className="sm:xl md:text-2xl text-[#faaf40] cursor-pointer" />
                  )}
                  <span className="text-[#faaf40] sm:font-normal sm:text-sm md:font-semibold">
                    {`${likes}`}
                  </span>
                </div>
                <div className="bg-[#c5c3ff64] sm:font-normal md:font-semibold rounded-lg sm:px-2 md:px-2 sm:py-1 md:py-2">
                  <MdOutlineShare className="sm:text-xl md:text-2xl cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex sm:px-0 md:px-5 gap-10 my-10">
            <div>
              <h1 className="sm:text-xl md:text-4xl font-semibold text-[#262261]">
                {`$${addedProduct[details]?.price * quantity}`}
              </h1>
              <span className="sm:text-md md:text-2xl text-gray-400">
                <strike>{`$${addedProduct[details]?.price + 10}`}</strike>
              </span>
            </div>
            <div className="flex-col">
              <div className="flex justify-start gap-2">
                <div className="flex items-center gap-1 sm:px-2 md:px-4 sm:py-1 md:py-2 bg-[#ffe3ba3a] cursor-pointer rounded-full">
                    <IoIosStar 
                    onClick={() => setStar((prev) => !prev)}
                    className="sm:text-sm md:text-2xl text-[#faaf40]"
                    />
                  <span className="text-[#faaf40] sm:font-normal sm:text-[12px] md:text-lg">
                  {addedProduct[details]?.rating}
                  </span>
                </div>
                <div className="flex items-center gap-1 sm:px-2 md:px-4 sm:py-1 md:py-2 bg-[#c5c3ff64] cursor-pointer rounded-full">
                  <LiaCommentDots className="sm:text-sm md:text-xl text-[#1b1b1c]" />
                  <span className="text-[#585587] sm:font-normal sm:text-[10px] md:text-lg">
                  {addedProduct[details]?.reviews} Reviews
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-400 sm:text-[12px] md:text-[16px]">
                  <span className="text-green-800 md:font-semibold">93%</span>{" "}
                  of buyers recommeded this.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="my-10">
            <h1 className="sm:text-sm md:text-lg text-gray-400">
              Choose a color
            </h1>
            <div className="flex justify-start gap-5 my-4">
              <div
                onClick={() => handleColor("blue")}
                id="blue"
                className="color_option sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-blue-500"
              ></div>
              <div
                onClick={() => handleColor("red")}
                id="red"
                className="color_option sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-red-500"
              ></div>
              <div
                onClick={() => handleColor("green")}
                id="green"
                className="color_option sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-green-500"
              ></div>
              <div
                onClick={() => handleColor("yellow")}
                id="yellow"
                className="color_option sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-yellow-500"
              ></div>
              <div
                onClick={() => handleColor("purple")}
                id="purple"
                className="color_option sm:w-10 md:w-14 sm:h-10 md:h-14 cursor-pointer rounded-full bg-purple-500"
              ></div>
            </div>
          </div>
          <hr />
          <div className="my-10">
            <h1 className="sm:text-sm md:text-lg text-gray-400">
              Choose a Size
            </h1>
            <div className="flex justify-start flex-wrap gap-5 my-4">
              <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
                <input
                  type="radio"
                  value="ExtraSmall"
                  name="size"
                  className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
                />
                <span className="sm:text-[12px] md:text-[16px]">
                  Extra Small
                </span>
              </div>
              <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
                <input
                  type="radio"
                  value="Small"
                  name="size"
                  className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
                />
                <span className="sm:text-[12px] md:text-[16px]">Small</span>
              </div>
              <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
                <input
                  type="radio"
                  value="Medium"
                  name="size"
                  className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
                />
                <span className="sm:text-[12px] md:text-[16px]">Medium</span>
              </div>
              <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
                <input
                  type="radio"
                  value="Large"
                  name="size"
                  className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
                />
                <span className="sm:text-[12px] md:text-[16px]">Large</span>
              </div>
              <div className="flex items-center sm:gap-0 md:gap-2 bg-slate-100 sm:px-2 p-2 rounded-lg">
                <input
                  type="radio"
                  value="ExtraLarge"
                  name="size"
                  className="sm:h-3 md:h-5 w-6 bg-slate-300 cursor-pointer"
                />
                <span className="sm:text-[12px] md:text-[16px]">
                  Extra Large
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex justify-between items-center sm:gap-2 md:gap-5 bg-slate-100 sm:px-4 md:px-4 sm:py-1 md:py-3 rounded-md">
              <button
                className="sm:text-[10px] md:text-[16px] sm:font-normal md:font-medium"
                onClick={() => {
                  if (quantity > 1) setQuantity(quantity - 1);
                }}
              >
                <FaMinus />
              </button>
              <span className="sm:text-[12px] md:text-[18px] sm:font-normal md:font-medium">
                {quantity}
              </span>
              <button
                className="sm:text-[10px] md:text-[16px] sm:font-normal md:font-medium"
                onClick={() => setQuantity(quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
            <div className="">
              <Link to="/al-rafey/checkout">
              <button
                // onClick={() => handleAddToCart(addedProduct[selectedShirtIndex])}
                className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
              >
                <LuShoppingCart className="" />
                <span className="mx-2">|</span> Add to Cart
              </button>
              </Link>
            </div>
          </div>

          <div className="border border-gray-300 my-10 p-4 rounded">
            <div className="flex items-start gap-2 mb-4">
              <HiOutlineTruck className="text-[#e1827c] sm:text-2xl md:text-3xl" />
              <div>
                <h2 className="sm:text-[14px] md:text-lg font-semibold">
                  Free Delivery
                </h2>
                <p className="text-gray-500 sm:text-[12px] underline mt-1">
                  Enter your Postal code for Delivery Availability
                </p>
              </div>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-start gap-2 mb-4">
              <LiaShoppingBagSolid className="text-[#e1827c] sm:text-2xl md:text-3xl" />
              <div>
                <h2 className="sm:text-[14px] md:text-lg font-semibold">
                  Return Delivery
                </h2>
                <p className="text-gray-500 sm:text-[12px] underline mt-1">
                  Free 30 days Delivery Return. Details
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="px-10">
        <nav>
          <ul className="flex gap-5 px-10 py-2">
            <li>
              <a href="" className="nav_link">
                Description
              </a>
            </li>
            <li>
              <a href="" className="nav_link">
                Reviews
              </a>
            </li>
          </ul>
          <hr />
        </nav>
      </section>
      <Reviews rating={addToCart[details]?.rating} />
       </>
      }
    </>
  );
};

export default Cart;
