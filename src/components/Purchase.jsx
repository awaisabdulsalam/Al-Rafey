import { GoArrowLeft } from "react-icons/go";
import purchaseLogo from "../assets/purchaseLogo.png";
import mobileImage from "../assets/mobile.png";

const Purchase = () => {
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
        <div
          className="h-auto w-full sm:my-2 md:my-5  sm:px-2 md:px-8 sm:py-2 md:py-10 rounded-[4px]"
          style={{
            boxShadow:
              "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          }}
        >
          <div className="rounded-lg flex justify-between items-center sm:px-1  md:px-4 py-3 bg-[#f6f9f8]">
            <h1 className="text-[#a8a8a8] text-base sm:text-[12px] md:text-[18px]">
              Product
            </h1>
            <h1 className="text-[#a8a8a8] text-base sm:text-[12px] md:text-[18px]">
              Amount
            </h1>
            <h1 className="text-[#a8a8a8] text-base sm:text-[12px] md:text-[18px]">
              Action
            </h1>
          </div>
          <div className="rounded-lg flex justify-between items-center sm:px-0 md:px-4 sm:my-1 md:my-3 py-3">
            <div className="flex items-center">
              <img
                src={mobileImage}
                alt=""
                className="sm:h-8 md:h-12 sm:w-8 md:w-12 object-cover"
              />
              <p className="text-[#a8a8a8] sm:text-[10px] md:text-[15px] text-base ml-2">
                Notebook Elite 321
              </p>
            </div>
            <div className="flex justify-start sm:mr-24 md:mr-32 sm:flex sm:justify-start sm:pl-4">
              <h1 className="text-[#a8a8a8] text-base sm:text-[10px] md:text-[15px]">
                $2499
              </h1>
            </div>
            <div className="">
              <button className="text-[#bcbcbc] text-base sm:text-[10px] md:text-[15px]">
                Remove
              </button>
            </div>
          </div>
          <hr />
          <div className="flex justify-end my-2">
            <div>
              <p className="text-[#bcbcbc] text-base sm:text-[12px] md:text-[18px]">
                Total
              </p>
              <h1 className="sm:text-[14px] md:text-3xl">$2499.10</h1>
            </div>
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
            <div className="flex items-center  sm:gap-2 md:gap-5 sm:p-1 md:p-5 sm:border-[2px] md:border-[3px] border-[#262261] rounded-[4px] cursor-pointer">
              <div className="sm:h-[16px] md:h-[50px] sm:w-[16px] md:w-[50px] bg-[#d9d9d9] sm:border-[1px] md:border-[1px] border-[#262261] rounded-full"></div>
              <p className="text-[#5c5c5c] sm:text-[10px] md:text-[16px]">
                Cash on Delivery
              </p>
            </div>
            <div className="flex items-center  sm:gap-2 md:gap-5 sm:p-1 md:p-5 sm:border-[2px] md:border-[3px] rounded-[4px] cursor-pointer">
              <div className="sm:h-[16px] md:h-[50px] sm:w-[16px] md:w-[50px] bg-[#d9d9d9] rounded-full"></div>
              <p className="text-[#5c5c5c] sm:text-[10px] md:text-[16px]">
                Cash on Delivery
              </p>
            </div>
            <div className="flex items-center  sm:gap-2 md:gap-5 sm:p-1 md:p-5 sm:border-[2px] md:border-[3px]  rounded-[4px] cursor-pointer">
              <div className="sm:h-[16px] md:h-[50px] sm:w-[16px] md:w-[50px] bg-[#d9d9d9]  rounded-full"></div>
              <p className="text-[#5c5c5c] sm:text-[10px] md:text-[16px]">
                Cash on Delivery
              </p>
            </div>
          </div>
        </div>

        {/************       Form     ******************/}

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
