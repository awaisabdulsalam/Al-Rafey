import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import mobileImage from "../assets/mobile.png";

const Checkout = () => {
  return (
    <>
      <section className="my-10 px-10">
        <h1 className="text-3xl font-semibold ">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row justify-between  rounded p-6">
          <div
            className="w-full h-auto mx-10 px-5 py-5 rounded-lg"
            style={{
              boxShadow:
                "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="rounded-lg flex justify-between items-center px-6 py-4 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-lg">Product</h1>
              <h1 className="text-[#a8a8a8] text-lg">Amount</h1>
              <h1 className="text-[#a8a8a8] text-lg">Quantity</h1>
              <h1 className="text-[#a8a8a8] text-lg">Action</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center py-4">
              <div className="w-[30%] flex flex-2 items-center">
                <img src={mobileImage} alt="" />
                <p className="text-[#5c5c5c]">Notebook Elite 321</p>
              </div>
              <div className="flex w-[70%] px-3 justify-between">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
                <div className="flex gap-4">
                  <button className="px-1 rounded-lg border-[1px] border-[#eeeeee]">
                    <span className="text-sm text-[#5c5c5c]">
                      <FaMinus />
                    </span>
                  </button>
                  <span className="px-4 rounded-lg border-[1px] border-[#eeeeee]">
                    2
                  </span>
                  <button className="px-1 rounded-lg border-[1px] border-[#eeeeee]">
                    <span className="text-sm text-[#5c5c5c]">
                      <FaPlus />
                    </span>
                  </button>
                </div>
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <div className="rounded-lg flex justify-between items-center py-4">
              <div className="w-[30%] flex flex-2 items-center">
                <img src={mobileImage} alt="" />
                <p className="text-[#5c5c5c]">Notebook Elite 321</p>
              </div>
              <div className="flex w-[70%] px-3 justify-between">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
                <div className="flex gap-4">
                  <button className="px-1 rounded-lg border-[1px] border-[#eeeeee]">
                    <span className="text-sm text-[#5c5c5c]">
                      <FaMinus />
                    </span>
                  </button>
                  <span className="px-4 rounded-lg border-[1px] border-[#eeeeee]">
                    2
                  </span>
                  <button className="px-1 rounded-lg border-[1px] border-[#eeeeee]">
                    <span className="text-sm text-[#5c5c5c]">
                      <FaPlus />
                    </span>
                  </button>
                </div>
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <div className="rounded-lg flex justify-between items-center py-4">
              <div className="w-[30%] flex flex-2 items-center">
                <img src={mobileImage} alt="" />
                <p className="text-[#5c5c5c]">Notebook Elite 321</p>
              </div>
              <div className="flex w-[70%] px-3 justify-between">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
                <div className="flex gap-4">
                  <button className="px-1 rounded-lg border-[1px] border-[#eeeeee]">
                    <span className="text-sm text-[#5c5c5c]">
                      <FaMinus />
                    </span>
                  </button>
                  <span className="px-4 rounded-lg border-[1px] border-[#eeeeee]">
                    2
                  </span>
                  <button className="px-1 rounded-lg border-[1px] border-[#eeeeee]">
                    <span className="text-sm text-[#5c5c5c]">
                      <FaPlus />
                    </span>
                  </button>
                </div>
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <hr />

            <div className="flex justify-end my-2">
              <div>
                <p className="text-[#bcbcbc]">Total</p>
                <h1 className="text-3xl">$2499.10</h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 p-5 rounded-lg">
            <div className="flex flex-col relative space-y-5 bg-[#f6f9f8] border-3 border-[#f6f9f8] px-5 py-10 rounded-md">
              <div className="flex justify-between">
                <span className="text-[#858484] text-xl">Shopping Cost</span>
                <span className="text-[#858484] text-xl">$259</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858484] text-xl">Delivery Charges</span>
                <span className="text-[#858484] text-xl">$10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#858484] text-xl">Tax</span>
                <span className="text-[#858484] text-xl">-$2</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#858484] text-xl">Sub Total</span>
                <span className="text-[#858484] text-xl">$259</span>
              </div>
              <hr />
              <div className="flex justify-between px-4 py-2 rounded-md bg-[#eef0ef]">
                <span className="text-[#3e3e3e] text-2xl">Total</span>
                <span className="text-[#3e3e3e] text-2xl">$259</span>
              </div>
            </div>
            <div className="flex-col space-y-4 my-5">
              <button className="bg-[#262261] text-white w-full px-4 py-2 rounded hover:bg-[#262261d3]">
                Proceed to checkout
              </button>
              <button className="text-[#9e9e9e] border-[2px] border-[#9e9e9e] w-full px-4 py-2 rounded hover:bg-[#262261] hover:text-white hover:border-[#262261]">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
