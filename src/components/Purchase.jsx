import { GoArrowLeft } from "react-icons/go";
import purchaseLogo from "../assets/purchaseLogo.png";
import mobileImage from "../assets/mobile.png";

const Purchase = () => {
  return (
    <>
      <section className="px-32 py-10 bg-[#f6f9f8]">
        <div className="flex items-center gap-1">
          <GoArrowLeft className="text-xl cursor-pointer" />
          <span className="cursor-pointer">Back</span>
        </div>
        <div className="">
          <div className="flex justify-center">
            <img src={purchaseLogo} alt="" className="" />
          </div>
          <div className="flex justify-center">
            <h1 className="text-3xl my-5">Complete a Purchase</h1>
          </div>
          {/* ***** */}
        </div>
      </section>
      {/* ***** */}
      <div className="h-auto my-5 mx-32 px-10 py-8 rounded-lg">
      <div
        className="h-auto w-full my-5  px-8 py-10 rounded-lg"
        style={{
          boxShadow:
            "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="rounded-lg flex justify-between items-center px-6 py-4 bg-[#f6f9f8]">
          <h1 className="text-[#a8a8a8] text-lg">Product</h1>
          <h1 className="text-[#a8a8a8] text-lg">Amount</h1>
          <h1 className="text-[#a8a8a8] text-lg">Action</h1>
        </div>
        <div className="rounded-lg flex justify-between items-center px-5 py-4">
          <div className="flex items-center">
            <img src={mobileImage} alt="" />
            <p className="text-[#5c5c5c]">Notebook Elite 321</p>
          </div>
          <div className="flex w-[70%] justify-center pr-36">
            <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
          </div>
          <div className="">
            <button className="text-[#bcbcbc]">Remove</button>
          </div>
        </div>
        <div className="rounded-lg flex justify-between items-center px-5 py-4">
          <div className="flex items-center">
            <img src={mobileImage} alt="" />
            <p className="text-[#5c5c5c]">Notebook Elite 321</p>
          </div>
          <div className="flex w-[70%] justify-center pr-36">
            <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
          </div>
          <div className="">
            <button className="text-[#bcbcbc]">Remove</button>
          </div>
        </div>
        <div className="rounded-lg flex justify-between items-center px-5 py-4">
          <div className="flex items-center">
            <img src={mobileImage} alt="" />
            <p className="text-[#5c5c5c]">Notebook Elite 321</p>
          </div>
          <div className="flex w-[70%] justify-center pr-36">
            <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
          </div>
          <div className="">
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
      <div className="flex justify-center my-10">
      <button className="w-full p-3 text-[#262261] text-[20px] rounded-lg border-2 border-[#d9d9d9]"><span>Do you have any discount code?</span></button>
      </div>
      <div className="mt-5">
        <h3 className="text-[#5c5c5c]">Payment Method</h3>
        <br />
        <div className="flex gap-5">
            <div className="flex items-center gap-5 p-5 border-[3px] border-[#262261] rounded-lg cursor-pointer">
                <div className="h-[50px] w-[50px] bg-[#d9d9d9] border-[2px] border-[#262261] rounded-full"></div>
                <p className="text-[#5c5c5c]">Cash on Delivery</p>
            </div>
            <div className="flex items-center gap-5 p-5 border-2 border-[#d9d9d9] rounded-lg cursor-pointer">
                <div className="h-[50px] w-[50px] bg-[#d9d9d9] rounded-full"></div>
                <p className="text-[#5c5c5c]">Cash on Delivery</p>
            </div>
            <div className="flex items-center gap-5 p-5 border-2 border-[#d9d9d9] rounded-lg cursor-pointer">
                <div className="h-[50px] w-[50px] bg-[#d9d9d9] rounded-full"></div>
                <p className="text-[#5c5c5c]">Cash on Delivery</p>
            </div>
        </div>
      </div>

      {/************       Form     ******************/}

      <div className="w-full mt-5 bg-white rounded-lg overflow-hidden">
      <div className="">
      <h3 className="text-[#5c5c5c] my-5">Personal Info</h3>

        <form>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
            <div className="mt-10">
          <h3 className="text-[#5c5c5c] my-5">Personal Info</h3>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
                Zip Code
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                City
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
                Detailed Address
              </label>
              <textarea  className="w-full border-2 border-gray-300" name="" id="" cols="10" rows="10"></textarea>
            </div>
          </div>
            </div>
          
          <div className="">
          <button className="w-full p-2 text-white text-lg rounded-lg bg-[#262261]">Confirm Your Order</button>
          </div>
        </form>
      </div>
    </div>

      </div>
      
    </>
  );
};

export default Purchase;
