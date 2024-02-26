import { BiHeart, BiBell } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState, useRef, useEffect } from "react";
import { userContext } from "../App.jsx";
import men from "../assets/men.jpg";
import logoImage from "../assets/logo.png";
import CategoryProduct from "./CategoryProduct.jsx";
import InputSearchProduct from "./InputSearchProduct.jsx";

const products = [
  { id: 1, image: men, name: "T-shirt", price: 99, quantity: 1 },
  { id: 2, image: men, name: "T-shirt", price: 99, quantity: 1 },
  { id: 3, image: men, name: "T-shirt", price: 99, quantity: 1 },
];
const Navbar2 = () => {
  const [addCartNum, favourite] = useContext(userContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectCategory, setSelectCategory] = useState("categories");
  const [categoryText, setCategoryText] = useState(false);
  const [quantity, setQuantity] = useState(products.map(product => product.quantity));
  const [inputValue, setInputValue] = useState("") 
  const [showNav, setShowNav] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    setCategoryText(true)
  }, [selectCategory])
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

  const updateQuantity = (index, newQuantity) => {
    const newQuantities =  [...quantity];
    newQuantities[index] = newQuantity;
    setQuantity(newQuantities);
  }
  return (
    <>
      <nav 
        style={{
          boxShadow:
            "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
      className="main_nav sticky top-0 z-10 relative bg-[#262261] text-white flex justify-between items-center px-4 py-4">
        <div className="flex flex-1 items-center">
          <Link to="/al-rafey">
          <img
            src={logoImage}
            alt="Logo"
            className="logo md:h-[40px] sm:h-[40px] md:w-[202px] sm:w-[200px] mr-2 cursor-pointer"
          />
          </Link>
        </div>

        <div className="categories flex flex-[3] mx-10">
          <select value={selectCategory} onChange={(e) => setSelectCategory(e.target.value)} className="select_category bg-[#FAAF40]  px-4 rounded-tl-lg rounded-bl-lg flex-1">
            <option value="category" default>
              Category
            </option>
            <option value="men">Men</option>  
            <option value="women">Women</option>
            <option value="mobile">Mobile</option>
          </select>
          <div className="flex rounded-tr-lg rounded-br-lg w-full  relative border bg-white">
            <input
              value={inputValue}
              onChange={(e) => {setInputValue(e.target.value)}}
              type="text"
              placeholder="Search"
              className="input_category bg-white text-gray-500 py-2.5 px-5 flex-2 rounded-tr-lg rounded-br-lg w-full"
            ></input>
            <IoSearch className="icon_search h-6 w-6 text-gray-700 mt-2 mr-5 absolute right-0 top-1 cursor-pointer" />
          </div>
        </div>

          <div>
          {showNav ? <RxCross1 className="md:hidden h-4 w-4 mr-4 cursor-pointer" onClick={() => setShowNav(!showNav)} /> : <GiHamburgerMenu onClick={() => setShowNav(!showNav)} className="md:hidden h- w-4 mr-4 cursor-pointer" />}
        </div>

        <div className="nav_show flex flex-1 justify-end items-center gap-4 relative">
          <Link to="/al-rafey/profile">
            <FaRegUser className="h-6 w-6 mr-4 cursor-pointer hover:text-[#807bd1]" />
          </Link>

          <div className="relative">
            <BiHeart className="h-6 w-6 mr-4 cursor-pointer hover:text-[#807bd1]" />
            <span className="absolute -top-1 right-2 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {favourite}
            </span>
          </div>
          <div className="relative">
            <BiBell className="h-6 w-6 mr-4 cursor-pointer relative hover:text-[#807bd1]"></BiBell>
            <span className="absolute -top-1 right-3 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              9+
            </span>
          </div>
        <div ref={menuRef} className="cart_navbar">
          <div className="navbar-toggle" onClick={toggleMenu}>
            <LuShoppingCart className="h-6 w-6 cursor-pointer relative hover:text-[#807bd1]" />
            <span className="absolute top-1 left-6 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {addCartNum}
            </span>
          </div>
          {isOpen && (
            <div className={`${isOpen ? "show_menu" : "hide_menu"}`}>
              {products.map((product, index) => (
                <div key={product.id} className="product-item">
                  <div className="product-info">
                    <img className="h-20 w-1" src={men} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                    </div>
                  </div>
                  <div className="quantity-controls flex gap-2">
                    <button>
                      <FaMinus className="text-sm" onClick={() => updateQuantity(index, Math.max(0, quantity[index] - 1))} />
                    </button>
                      <p>{quantity[index]}</p>
                    <button>
                      <FaPlus  className="text-sm" onClick={() => updateQuantity(index, quantity[index] + 1)}  />
                    </button>
                  </div>
                  <div>
                    <p>$ {`${product.price * quantity[index]}`}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
          <span className="ml-2">$00.0</span>
        </div>

          {showNav && 
          <div className="nav_hide w-40 bg-[#fff] border-2 border-[#fff] py-10 px-5 flex-col justify-center items-center absolute right-0 top-[70px]">
            <div className="flex justify-center my-2">
          <Link to="/al-rafey/profile">
            <FaRegUser className="h-6 w-6 mr-4 cursor-pointer text-[#333] hover:text-[#807bd1]" />
          </Link>
            </div>

          <div className="flex justify-center relative my-2">
            <BiHeart className="h-6 w-6 mr-4 cursor-pointer text-[#333] hover:text-[#807bd1]" />
            <span className="absolute -top-1 right-12 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {favourite}
            </span>
          </div>
          <div className="flex justify-center relative my-2">
            <BiBell className="h-6 w-6 mr-4 cursor-pointer text-[#333] relative hover:text-[#807bd1]"></BiBell>
            <span className="absolute -top-1 right-12 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              9+
            </span>
          </div>
        <div ref={menuRef} className="cart_navbar my-2">
          <div className="flex justify-center navbar-toggle" onClick={toggleMenu}>
            <LuShoppingCart className="h-6 w-6 cursor-pointer text-[#333] relative hover:text-[#807bd1]" />
            <span className="absolute top-1 right-10 bg-[#FAAF40] text-white text-xs rounded-full px-1">
              {addCartNum}
            </span>
          </div>
          {isOpen && (
            <div className={`${isOpen ? "show_menu" : "hide_menu"}`}>
              {products.map((product, index) => (
                <div key={product.id} className="product-item">
                  <div className="product-info">
                    <img className="h-20 w-1" src={men} alt={product.name} />
                    <div>
                      <h4>{product.name}</h4>
                    </div>
                  </div>
                  <div className="quantity-controls flex gap-2">
                    <button>
                      <FaMinus className="text-sm" onClick={() => updateQuantity(index, Math.max(0, quantity[index] - 1))} />
                    </button>
                      <p>{quantity[index]}</p>
                    <button>
                      <FaPlus  className="text-sm" onClick={() => updateQuantity(index, quantity[index] + 1)}  />
                    </button>
                  </div>
                  <div>
                    <p>$ {`${product.price * quantity[index]}`}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
          <span className="ml-2 text-[#333]">$00.0</span>
        </div>}
      </nav>
      {categoryText && <CategoryProduct selectCategory={selectCategory} setCategoryText={setCategoryText} />}
      {inputValue.length > 0 && <InputSearchProduct inputValue={inputValue} />}

    </>
  );
};

export default Navbar2;
