import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Checkout = ({ addToCart, addedProduct, setAddCartNum, setAddtoCart, setAddedProduct }) => {

  const [cartItems, setCartItems] = useState([]);

  console.log(addToCart);

  useEffect(() => {
    if (addToCart) {
      setCartItems(addToCart);
    }
  }, [addToCart]);
  // useEffect(() => {
  //   setCartItems(addedProduct)
  // }, [addedProduct])


  const removeAddCartProduct = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    console.log(updatedCartItems);
    setCartItems(updatedCartItems);
    setAddtoCart(updatedCartItems)
  }


  setAddCartNum(cartItems.length);

  const updateQuantity = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
  }

  const getTotalPrice = () => {
    return cartItems?.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  return (
    <>
      <section className="sm:my-2 md:my-10 sm:px-2 md:px-10">
        <h1 className="sm:text-[18px] md:text-3xl font-semibold ">
          Shopping Cart
        </h1>

        <div className="sm:w-full sm:px-0 flex flex-col md:flex-row justify-between  rounded p-6">
          <div
            className="sm:w-full h-auto sm:mx-0 md:mx-5 sm:px-2 md:px-5 py-5 rounded-lg"
            style={{
              boxShadow:
              "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="rounded-lg flex flex-col sm:flex-row justify-between items-center md:px-6 px-3 sm:px-2 py-3 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-[12px] md:text-base">Product</h1>
              <h1 className="text-[#a8a8a8] text-[12px] md:mr-20 md:text-base">Amount</h1>
              <h1 className="text-[#a8a8a8] text-[12px] md:mr-32 md:text-base">Quantity</h1>
              <h1 className="text-[#a8a8a8] text-[12px] md:text-base">Action</h1>
            </div>

            {
            cartItems?.map((product, index) => (
              <>
              <div key={index} className="rounded-lg flex flex-col sm:flex-row justify-between items-center  md:px-2 sm:px-0 py-3 sm:my-1 md:my-3">
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
                <div className="flex-1 justify-start sm:mr-8 sm:pl-4">
                  <h1 className="text-[#a8a8a8] sm:text-[12px] md:text-base">{`$${product?.price}`}</h1>
                </div>
                <div className="flex-1 sm:gap-2 md:gap-1 sm:mr-8">
                  <button className="px-1 rounded-[4px] border-[1px] border-[#eeeeee]" onClick={() => updateQuantity(index, Math.max(1, product.quantity - 1))}>
                    <span className="sm:text-[10px] md:text-[16px] md:text-sm text-[#5c5c5c]">
                      <FaMinus className="md:text-[14px]" />
                    </span>
                  </button>
                  <span className="sm:px-2 md:px-4 sm:text-[10px] md:text-[14px] rounded-[4px] border-[1px] border-[#eeeeee]">
                    {product?.quantity}
                  </span>
                  <button className="px-1 rounded-[4px] border-[1px] border-[#eeeeee]" onClick={() => updateQuantity(index, product.quantity + 1)}>
                    <span className="sm:text-[10px] md:text-sm text-[#5c5c5c]">
                      <FaPlus />
                    </span>
                  </button>
                </div>
                <div className="flex flex-1 justify-end">
                  <button onClick={() => removeAddCartProduct(index)} className="text-[#bcbcbc] text-xs md:text-base">
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex justify-end my-2">
            </div>
              </>
            )
            ) 
            }
            <hr />
             <div className="flex justify-end">
              <div className="flex-col">
                <p className="text-[#bcbcbc] text-sm">Total</p>
                <h1 className="sm:text-[14px] md:text-3xl">{`$${getTotalPrice()}`}</h1>
              </div>
              </div>
          </div>

          <div className="w-full md:w-2/5 p-5 rounded-lg">
            <div className="flex flex-col relative space-y-5 bg-[#f6f9f8] border-3 border-[#f6f9f8] px-5 py-10 rounded-md">
              <div className="flex justify-between">
                <span className="text-[#858484] sm:text-[14px] md:text-xl">Shopping Cost</span>
                <span className="text-[#858484] sm:text-[14px] md:text-xl">$259</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858484] sm:text-[14px] md:text-xl">Delivery Charges</span>
                <span className="text-[#858484] sm:text-[14px] md:text-xl">$10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858484] sm:text-[14px] md:text-xl">Tax</span>
                <span className="text-[#858484] sm:text-[14px] md:text-xl">-$2</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#858484] sm:text-[14px] md:text-xl">{`$${getTotalPrice()}`}</span>
                <span className="text-[#858484] sm:text-[14px] md:text-xl">$259</span>
              </div>
              <hr />
              <div className="flex justify-between px-4 py-2 rounded-md bg-[#eef0ef]">
                <span className="text-[#3e3e3e] sm:text-[16px] md:text-2xl">Total</span>
                <span className="text-[#3e3e3e] sm:text-[16px] md:text-2xl">{`$${getTotalPrice()}`}</span>
              </div>
            </div>
            <div className="flex-col space-y-4 my-5">
              <Link to="/al-rafey/purchase">
              <button className="bg-[#262261] text-white w-full sm:px-2 md:px-4 sm:py-1 md:py-2 rounded hover:bg-[#262261d3]">
                Proceed to checkout
              </button>
              </Link>
              <Link to="/al-rafey/categories">
              <button className="text-[#9e9e9e] border-[2px] border-[#9e9e9e] w-full sm:px-2 md:px-4 md:my-5 sm:py-1 md:py-2 rounded hover:bg-[#262261] hover:text-white hover:border-[#262261]">
                Continue Shopping
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

