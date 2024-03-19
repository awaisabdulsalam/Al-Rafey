import { FaStar } from "react-icons/fa";
import { TbHeart } from "react-icons/tb";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";

import { useContext, useEffect, useState } from "react";
import { userContext } from "../App.jsx";
import { Link } from "react-router-dom";

const Products = ({ products, lessProducts,  heading, bgColor, textColor, color, id, btnColor }) => {
  const [
    addCartNum,
    favourite,
    setAddCartNum,
    setFavourite,
    setFavouriteArray,
    addToCart,
    setAddtoCart,
    addedProduct,
    setAddedProduct,
    setRedHeart
  ] = useContext(userContext);


  const [favorite, setFavorite] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [allProducts, setAllProducts] = useState(products);

  const [width, setWidth] = useState(window.innerWidth);

const handleAddToCart = (index) => {
    const added = [...addToCart];
    const included = added.includes(products[index]);

    if (!included) {
      added.push(products[index]);
    }
    setAddtoCart(added);
  };
  setAddCartNum(addToCart.length);

  const handleAddFavourite = (index) => {
    const updatedFavorite = [...favorite];
    const isFavorite = updatedFavorite.includes(index);

    if (!isFavorite) {
      updatedFavorite.push(index);
    } else {
      const indexToRemove = updatedFavorite.indexOf(index);
      updatedFavorite.splice(indexToRemove, 1);
      setRedHeart(true)
    }
    setFavouriteArray(updatedFavorite.map((i) => products[i]));
    setFavorite(updatedFavorite);
    setFavourite((prev) => (prev = updatedFavorite.length));
  };

  const handleAddProduct = (index) => {

      const added = products[index];
    const included = addedProduct.includes(products[index]);

    if (!included) {
      // added.push(products[index]);
    } 
    setAddedProduct([added])
    setAddCartNum((prev) => (prev = addedProduct.length));
  };

  const ratingArray = [1, 2, 3, 4, 5];
  const starIcons = ratingArray.map((value, index) => (
    <div
      key={index}
      className={`mx-0 sm:text-[18px] md:text-[20px] text-yellow-500`}
    >
      &#9733;
    </div>
  ));

 
  const mobileProducts = products.slice(0, 2);
  const tabProducts = products.slice(0, 3);
  const lapProducts = products.slice(0, 5);

    // useEffect(() => {
    //   const changeWidth = () => {
    //     if (width >= 760) {
    //       setAllProducts(lapProducts)
    //     } else if (width < 760 && width >= 400) {
    //       setAllProducts(tabProducts);
    //     } else {
    //       setAllProducts(mobileProducts);
    //     }
    //   }
    //   changeWidth();

    //   window.addEventListener("resize", changeWidth);

    //   return () => {
    //     window.removeEventListener("resize", changeWidth);
    //   } 
    //    }, [width]);


    const handleProducts = () => {
      setShowAll(true)
    }

    return (
    <>
      <section
        className="w-full sm:py-5 sm:px-5 md:py-5 md:px-10 my-0"
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
            onClick={handleProducts}
              className={`product_btn text-[${color}] hover:text-[${textColor}] hover:bg-[${btnColor}] text-xl py-2 px-4 rounded-lg border-[1px] border-[#d5e1e1]`}
            >
              Show More
            </button>
        </div>

        <div
          className={`text-[${bgColor} sm:flex md:flex sm:justify-center md:justify-start flex-wrap max-w-[100%] gap-4 py-10 px-2`}
        >
          {
(!showAll && width >= 760 && lapProducts?.map((product, index) => (
            <div
              key={index}
              onClick={() => handleAddProduct(index)}
              className={`sm:min-h-fit relative bg-[#fff] cursor-pointer border-2 border-gray-200 md:h-[430px] min-w-[200px] max-w-[250px] flex-1 py-3 px-3 rounded-md overflow-hidden`}
            >
              <div className={`text-[${color}] relative`}>
                <div className="cursor-pointer">
                  {!favorite.includes(index) ? (
                    <TbHeart
                      onClick={() => handleAddFavourite(index)}
                      className={`hover:text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl text-[#fff]`}
                    />
                  ) : (
                    <IoMdHeart
                      onClick={() => handleAddFavourite(index)}
                      className="text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl"
                    />
                  )}
                </div>
                <Link to="/al-rafey/cart">
                  <img
                    src={product.image}
                    alt="Product"
                    className="sm:h-[150px] rounded-md md:h-[200px] w-full"
                  />
                </Link>
              </div>
              <div className="py-4">
                <h2 className="product_name text-[#333] text-xl mb-2">
                  {product.name}
                </h2>
                <div className="product_price text-gray-400 text-xl mb-2">
                  {`$${product.price}`}
                </div>
                <div className="flex gap-1 mb-2">
                  {starIcons}
                </div>
                <p className="product_review text-gray-400 text-sm">
                  ({product.reviews} Reviews)
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(index)}
                className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
              >
                <LuShoppingCart className="" />
                <span className="mx-2">|</span> Add to Cart
              </button>
            </div>
          ))) ||
          (showAll && width >= 760 && products?.map((product, index) => (
            <div
              key={index}
              onClick={() => handleAddProduct(index)}
              className={`sm:min-h-fit relative bg-[#fff] cursor-pointer border-2 border-gray-200 md:h-[430px] min-w-[200px] max-w-[250px] flex-1 py-3 px-3 rounded-md overflow-hidden`}
            >
              <div className={`text-[${color}] relative`}>
                <div className="cursor-pointer">
                  {!favorite.includes(index) ? (
                    <TbHeart
                      onClick={() => handleAddFavourite(index)}
                      className={`hover:text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl text-[#fff]`}
                    />
                  ) : (
                    <IoMdHeart
                      onClick={() => handleAddFavourite(index)}
                      className="text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl"
                    />
                  )}
                </div>
                <Link to="/al-rafey/cart">
                  <img
                    src={product.image}
                    alt="Product"
                    className="sm:h-[150px] rounded-md md:h-[200px] w-full"
                  />
                </Link>
              </div>
              <div className="py-4">
                <h2 className="product_name text-[#333] text-xl mb-2">
                  {product.name}
                </h2>
                <div className="product_price text-gray-400 text-xl mb-2">
                  {`$${product.price}`}
                </div>
                <div className="flex gap-1 mb-2">
                  {starIcons}
                </div>
                <p className="product_review text-gray-400 text-sm">
                  ({product.reviews} Reviews)
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(index)}
                className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
              >
                <LuShoppingCart className="" />
                <span className="mx-2">|</span> Add to Cart
              </button>
            </div>
          )))
          }
          {
          (!showAll && width < 760 && width >= 400 && tabProducts?.map((product, index) => (
            <div
              key={index}
              onClick={() => handleAddProduct(index)}
              className={`sm:min-h-fit relative bg-[#fff] cursor-pointer border-2 border-gray-200 md:h-[430px] min-w-[200px] max-w-[250px] flex-1 py-3 px-3 rounded-md overflow-hidden`}
            >
              <div className={`text-[${color}] relative`}>
                <div className="cursor-pointer">
                  {!favorite.includes(index) ? (
                    <TbHeart
                      onClick={() => handleAddFavourite(index)}
                      className={`hover:text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl text-[#fff]`}
                    />
                  ) : (
                    <IoMdHeart
                      onClick={() => handleAddFavourite(index)}
                      className="text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl"
                    />
                  )}
                </div>
                <Link to="/al-rafey/cart">
                  <img
                    src={product.image}
                    alt="Product"
                    className="sm:h-[150px] rounded-md md:h-[200px] w-full"
                  />
                </Link>
              </div>
              <div className="py-4">
                <h2 className="product_name text-[#333] text-xl mb-2">
                  {product.name}
                </h2>
                <div className="product_price text-gray-400 text-xl mb-2">
                  {`$${product.price}`}
                </div>
                <div className="flex gap-1 mb-2">
                  {starIcons}
                </div>
                <p className="product_review text-gray-400 text-sm">
                  ({product.reviews} Reviews)
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(index)}
                className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
              >
                <LuShoppingCart className="" />
                <span className="mx-2">|</span> Add to Cart
              </button>
            </div>
          ))) ||
          (showAll && width < 760 && width >= 400 &&  products?.map((product, index) => (
            <div
              key={index}
              onClick={() => handleAddProduct(index)}
              className={`sm:min-h-fit relative bg-[#fff] cursor-pointer border-2 border-gray-200 md:h-[430px] min-w-[200px] max-w-[250px] flex-1 py-3 px-3 rounded-md overflow-hidden`}
            >
              <div className={`text-[${color}] relative`}>
                <div className="cursor-pointer">
                  {!favorite.includes(index) ? (
                    <TbHeart
                      onClick={() => handleAddFavourite(index)}
                      className={`hover:text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl text-[#fff]`}
                    />
                  ) : (
                    <IoMdHeart
                      onClick={() => handleAddFavourite(index)}
                      className="text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl"
                    />
                  )}
                </div>
                <Link to="/al-rafey/cart">
                  <img
                    src={product.image}
                    alt="Product"
                    className="sm:h-[150px] rounded-md md:h-[200px] w-full"
                  />
                </Link>
              </div>
              <div className="py-4">
                <h2 className="product_name text-[#333] text-xl mb-2">
                  {product.name}
                </h2>
                <div className="product_price text-gray-400 text-xl mb-2">
                  {`$${product.price}`}
                </div>
                <div className="flex gap-1 mb-2">
                  {starIcons}
                </div>
                <p className="product_review text-gray-400 text-sm">
                  ({product.reviews} Reviews)
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(index)}
                className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
              >
                <LuShoppingCart className="" />
                <span className="mx-2">|</span> Add to Cart
              </button>
            </div>
          )))
          }
           {
           (!showAll && width < 400 && 
           mobileProducts?.map((product, index) => (
            <div
              key={index}
              onClick={() => handleAddProduct(index)}
              className={`sm:min-h-fit relative bg-[#fff] cursor-pointer border-2 border-gray-200 md:h-[430px] min-w-[200px] max-w-[250px] flex-1 py-3 px-3 rounded-md overflow-hidden`}
            >
              <div className={`text-[${color}] relative`}>
                <div className="cursor-pointer">
                  {!favorite.includes(index) ? (
                    <TbHeart
                      onClick={() => handleAddFavourite(index)}
                      className={`hover:text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl text-[#fff]`}
                    />
                  ) : (
                    <IoMdHeart
                      onClick={() => handleAddFavourite(index)}
                      className="text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl"
                    />
                  )}
                </div>
                <Link to="/al-rafey/cart">
                  <img
                    src={product.image}
                    alt="Product"
                    className="sm:h-[150px] rounded-md md:h-[200px] w-full"
                  />
                </Link>
              </div>
              <div className="py-4">
                <h2 className="product_name text-[#333] text-xl mb-2">
                  {product.name}
                </h2>
                <div className="product_price text-gray-400 text-xl mb-2">
                  {`$${product.price}`}
                </div>
                <div className="flex gap-1 mb-2">
                  {starIcons}
                </div>
                <p className="product_review text-gray-400 text-sm">
                  ({product.reviews} Reviews)
                </p>
              </div>
              <button
                onClick={() => handleAddToCart(index)}
                className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
              >
                <LuShoppingCart className="" />
                <span className="mx-2">|</span> Add to Cart
              </button>
            </div>
          ))) ||
          (showAll && width < 400 &&  products?.map((product, index) => (
             <div
               key={index}
               onClick={() => handleAddProduct(index)}
               className={`sm:min-h-fit relative bg-[#fff] cursor-pointer border-2 border-gray-200 md:h-[430px] min-w-[200px] max-w-[250px] flex-1 py-3 px-3 rounded-md overflow-hidden`}
             >
               <div className={`text-[${color}] relative`}>
                 <div className="cursor-pointer">
                   {!favorite.includes(index) ? (
                     <TbHeart
                       onClick={() => handleAddFavourite(index)}
                       className={`hover:text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl text-[#fff]`}
                     />
                   ) : (
                     <IoMdHeart
                       onClick={() => handleAddFavourite(index)}
                       className="text-red-600 absolute top-0 right-0 m-2 rounded-full text-2xl"
                     />
                   )}
                 </div>
                 <Link to="/al-rafey/cart">
                   <img
                     src={product.image}
                     alt="Product"
                     className="sm:h-[150px] rounded-md md:h-[200px] w-full"
                   />
                 </Link>
               </div>
               <div className="py-4">
                 <h2 className="product_name text-[#333] text-xl mb-2">
                   {product.name}
                 </h2>
                 <div className="product_price text-gray-400 text-xl mb-2">
                   {`$${product.price}`}
                 </div>
                 <div className="flex gap-1 mb-2">
                   {starIcons}
                 </div>
                 <p className="product_review text-gray-400 text-sm">
                   ({product.reviews} Reviews)
                 </p>
               </div>
               <button
                 onClick={() => handleAddToCart(index)}
                 className="single_product_btn flex justify-center items-center bg-[#262261] hover:bg-[#342e84] text-white w-full px-2 py-1 rounded-md"
               >
                 <LuShoppingCart className="" />
                 <span className="mx-2">|</span> Add to Cart
               </button>
             </div>
           )))
          }
        </div>
      </section>
    </>
  );
};

export default Products;
