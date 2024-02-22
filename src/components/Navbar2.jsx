import { BiHeart, BiBell } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
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
  console.log(inputValue);
  return (
    <>
      <nav className="bg-[#262261] text-white flex justify-between items-center px-8 py-4">
        <div className="flex flex-1 items-center">
          <Link to="/al-rafey">
          <img
            src={logoImage}
            alt="Logo"
            className="h-[40px] w-[202px] mr-2 cursor-pointer"
          />
          </Link>
        </div>
        <div className="flex flex-[3] mx-10">
          <select value={selectCategory} onChange={(e) => setSelectCategory(e.target.value)} className="bg-[#FAAF40]  px-4 rounded-tl-lg rounded-bl-lg flex-1">
            <option value="category" default hidden>
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
              placeholder="Search Product Here"
              className="bg-white text-gray-500 py-2.5 px-5 flex-2 rounded-tr-lg rounded-br-lg w-full"
            ></input>
            <IoSearch className="h-6 w-6 text-gray-700 mt-2 mr-5 absolute right-0 top-1 cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-1 justify-end items-center gap-4 relative">
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

      </nav>
      {categoryText && <CategoryProduct selectCategory={selectCategory} setCategoryText={setCategoryText} />}
      {inputValue.length > 0 && <InputSearchProduct inputValue={inputValue} />}

    </>
  );
};

export default Navbar2;
