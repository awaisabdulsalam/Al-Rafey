import { BiHeart, BiBell } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaBars, FaPlus, FaMinus } from "react-icons/fa";
import { useContext, useState, useRef, useEffect } from "react";
import { userContext } from "../App.jsx";

import logoImage from "../assets/logo.png";

const Navbar2 = () => {
  const [addCartNum, favourite] = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const products = [
    { id: 1, name: "Product 1", quantity: 2 },
    { id: 2, name: "Product 2", quantity: 3 },
    { id: 3, name: "Product 3", quantity: 1 },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.addEventListener("mouseup", handleClickOutside);
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-[#262261] text-white flex justify-between items-center px-8 py-4">
        <div className="flex flex-1 items-center">
          <img
            src={logoImage}
            alt="Logo"
            className="h-[40px] w-[202px] mr-2 cursor-pointer"
          />
        </div>
        <div className="flex flex-[3] mx-10">
          <select className="bg-[#FAAF40]  px-4 rounded-tl-lg rounded-bl-lg flex-1">
            <option value="category" default hidden>
              Category
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <div className="flex rounded-tr-lg rounded-br-lg w-full  relative border bg-white">
            <input
              type="text"
              placeholder="Search Product Here"
              className="bg-white text-gray-500 py-2.5 px-5 flex-2 rounded-tr-lg rounded-br-lg w-full"
            ></input>
            <IoSearch className="h-6 w-6 text-gray-700 mt-2 mr-5 absolute right-0 top-1 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4 relative">
          <Link to="/profile">
            <FaRegUser className="h-6 w-6 mr-4 cursor-pointer" />
          </Link>

          <div className="relative">
            <BiHeart className="h-6 w-6 mr-4 cursor-pointer" />
            <span className="absolute -top-1 right-2 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {favourite}
            </span>
          </div>
          <div className="relative">
            <BiBell className="h-6 w-6 mr-4 cursor-pointer relative"></BiBell>
            <span className="absolute -top-1 right-3 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              9+
            </span>
          </div>
          {/* <div className="relative">
            <LuShoppingCart
              className="h-6 w-6 cursor-pointer relative"
            ></LuShoppingCart>
            <span className="absolute -top-1 left-4 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {addCartNum}
            </span>
          </div> */}

          {/*  */}
        <div ref={menuRef} className="cart_navbar">
          <div className="navbar-toggle" onClick={toggleMenu}>
            <LuShoppingCart className="h-6 w-6 cursor-pointer relative" />
            <span className="absolute top-1 left-6 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {addCartNum}
            </span>
          </div>
          {isOpen && (
            <div className="menu">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  {console.log(product)}
                  <div className="product-info">
                    {/* <img src={`product_${product.id}.jpg`} alt={product.name} /> */}
                    <div>
                      <h4>{product.name}</h4>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                  </div>
                  <div className="quantity-controls">
                    <button>
                      <FaMinus />
                    </button>
                    <button>
                      <FaPlus />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
          <span className="ml-2">$00.0</span>
        </div>

      </nav>
    </>
  );
};

export default Navbar2;
