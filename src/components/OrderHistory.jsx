import { CgProfile } from "react-icons/cg";
import { IoPowerSharp } from "react-icons/io5";
import bgImage from "../assets/bgImage.png";
import profileImage from "../assets/profile.png";
import Pagination from "./Pagination";
import Profile from "./Profile";
import ProfileButtons from "./ProfileButtons";
const OrderHistory = () => {
  return (
    <>
    {/* <Profile /> */}
      <div className="flex flex-col md:flex-row justify-between gap-5 rounded px-10 py-10">
        {/*  */}
        <div className="w-[30%]">
    <ProfileButtons />
        </div>
        {/*  */}

        <div
          className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
          // style={{
          //   boxShadow:
          //     "5px 5px 10px rgba(0, 0, 0, 0.01), 5px 5px 10px rgba(0, 0, 0, 0.01), 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
          // }}
        >
          <h1 className="text-xl  font-semibold my-4">Orders History</h1>
          <div className="rounded-lg flex justify-between items-center px-4 py-4 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-lg">Order ID</h1>
              <h1 className="text-[#a8a8a8] text-lg">Amount</h1>
              <h1 className="text-[#a8a8a8] text-lg">Date</h1>
              <h1 className="text-[#a8a8a8] text-lg">Action</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
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
  );
};

export default OrderHistory;
