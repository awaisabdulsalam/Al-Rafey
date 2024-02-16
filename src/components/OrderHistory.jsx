// import ProfileSettings from "./ProfileSettings.jsx"
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import mobileImage from "../assets/mobile.png";
import bgImage from "../assets/bgImage.png"
import profileImage from "../assets/profile.png"
import Pagination from "./Pagination";
const OrderHistory = () => {
  return (
    <>
    <section className="flex justify-between py-5 px-20" style={{ backgroundImage: `url("${bgImage}")`}}>
        <div className="flex items-center">
            <div className="mb-[-70px]">
                <img src={profileImage} className="h-[207px]" alt="" />
            </div>
            <div>
                <h1 className="text-[#303030] text-4xl my-2 font-semibold">Shah Zaman</h1>
                <p>shahzaman@gmail.com</p>
                <button className="px-3 py-1 text-[14px] rounded-md text-white bg-[#262261]">Edit Profile</button>
            </div>
        </div>
        <div className="flex items-end">
            <div className="border-r-[1px] border-[#cccccc] px-6">
                <h1 className="text-2xl font-semibold text-[#303030]">47</h1>
                <p className="text-[#303030] font-normal">Orders</p>
            </div>
            <div className="border-r-[1px] border-l-[1px] border-[#cccccc] px-6">
                <h1 className="text-2xl font-semibold text-[#303030]">$7747</h1>
                <p className="text-[#303030] font-normal">Spent</p>
            </div>
            <div className="border-l-[1px] border-[#cccccc] px-6">
                <h1 className="text-2xl font-semibold text-[#303030]">47</h1>
                <p className="text-[#303030] font-normal">Points</p>
            </div>
        </div>
    </section>
    <div className="flex flex-col md:flex-row justify-between  rounded p-6">
          <div
            className="w-full border-2 border-red-500 mx-10 px-5 py-5 rounded-lg"
            style={{
              boxShadow:
                "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="rounded-lg flex justify-between items-center px-6 py-4 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-lg">Order ID</h1>
              <h1 className="text-[#a8a8a8] text-lg">Amount</h1>
              <h1 className="text-[#a8a8a8] text-lg">Date</h1>
              <h1 className="text-[#a8a8a8] text-lg">Action</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center py-4">
              <div className="w-[30%] flex flex-2 items-center">
                <p className="text-[#5c5c5c]">#123123</p>
              </div>
              <div className="flex w-[70%] px-3 justify-between">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
                <div className="flex gap-4">
                  <p className="text-[#a8a8a8] text-lg">13/05/24</p>
                </div>
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <div className="rounded-lg flex justify-between items-center py-4">
              <div className="w-[30%] flex flex-2 items-center">
                <p className="text-[#5c5c5c]">#123123</p>
              </div>
              <div className="flex w-[70%] px-3 justify-between">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
                <div className="flex gap-4">
                  <p className="text-[#a8a8a8] text-lg">13/05/24</p>
                </div>
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <div className="rounded-lg flex justify-between items-center py-4">
              <div className="w-[30%] flex flex-2 items-center">
                <p className="text-[#5c5c5c]">#123123</p>
              </div>
              <div className="flex w-[70%] px-3 justify-between">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
                <div className="flex gap-4">
                  <p className="text-[#a8a8a8] text-lg">13/05/24</p>
                </div>
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <hr />

            <div className="flex justify-end my-2">
              <div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default OrderHistory