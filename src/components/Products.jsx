import { FaStar } from "react-icons/fa";
import { TbHeart } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";

import { useContext, useState } from "react";
import { userContext } from "../App.jsx";

const Products = ({ products, heading, bgColor, color, id, btnColor }) => {
  const [addCartNum, favourite, setAddCartNum, setFavourite, setFavouriteArray] =
    useContext(userContext);

  const [favorite, setFavorite] = useState([]);

  const handleAddToCart = () => {
    setAddCartNum((addCartNum) => addCartNum + 1);
  };


const handleAddFavourite = (index) => {
  const updatedFavorite = [...favorite];
  const isFavorite = updatedFavorite.includes(index);

  if (!isFavorite) {
    updatedFavorite.push(index);
  } else {
    const indexToRemove = updatedFavorite.indexOf(index);
    updatedFavorite.splice(indexToRemove, 1);
  }
  
  setFavouriteArray(updatedFavorite.map((i) => products[i]))
  setFavorite(updatedFavorite);
  setFavourite((prev) => prev = updatedFavorite.length);
};


  return (
    <>
      <section
        className="w-full sm:py-5 sm:px-5 md:py-5 md:px-10 my-5"
        id={`${id}`}
        style={{ backgroundColor: bgColor }}
      >
        <div className="flex justify-between items-center border-b-[1px] border-gray-200">
          <h1
            className={`product_heading text-[${color}] py-2 text-3xl border-b-[3px] border-[#4cd0e0]`}
          >
            {heading}
          </h1>
          <button
            className={`product_btn text-[${color}] hover:text-[#fff] hover:bg-[${btnColor}] text-xl py-2 px-4 rounded-lg border-[1px] border-[#d5e1e1]`}
          >
            Show More
          </button>
        </div>

        {/************    Product Cart   **************/}
        <div
          className={`text-[${bgColor}] flex justify-start flex-wrap max-w-[100%] gap-4 py-10 px-2`}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={`sm:min-h-fit relative bg-[#fff] cursor-pointer border-2 border-gray-200 md:h-[400px] min-w-[200px] max-w-[250px] flex-1 py-3 px-3 rounded-md overflow-hidden`}
            >
              <div className={`text-[${color}] relative`}>
                <div className="cursor-pointer">
                  {/* {!heartStates[index] ? ( */}
                  {!favorite.includes(index) ?
                   ( <TbHeart
                      onClick={() => handleAddFavourite(index)}
                      className={`hover:text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl text-[#fff]`}
                    />
                  ) : (
                    <IoMdHeart 
                    onClick={() => handleAddFavourite(index)}
                    className="text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl" />
                  )}
                </div>
                <img
                  src={product.image}
                  alt="Product"
                  className="sm:h-[150px] rounded-md md:h-[200px] w-full"
                />
              </div>
              <div className="py-4">
                <h2 className="product_name text-[#333] text-xl mb-2">
                  {product.name}
                </h2>
                <div className="product_price text-gray-400 text-xl mb-2">
                  {product.price}
                </div>
                <div className="flex gap-1 mb-2">
                  <FaStar className="review_icon text-yellow-500 text-sm" />
                  <FaStar className="review_icon text-yellow-500 text-sm" />
                  <FaStar className="review_icon text-yellow-500 text-sm" />
                  <FaStar className="review_icon text-yellow-500 text-sm" />
                  <FaStar className="review_icon text-yellow-500 text-sm" />
                </div>
                <p className="product_review text-gray-400 text-sm">
                  ({product.reviews} Reviews)
                </p>
              </div>
              <button
                onClick={handleAddToCart}
                className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
              >
                <LuShoppingCart className="" />
                <span className="mx-2">|</span> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
