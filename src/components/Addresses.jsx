import { CgProfile } from "react-icons/cg";
import { IoPowerSharp } from "react-icons/io5";
import bgImage from "../assets/bgImage.png";
import profileImage from "../assets/profile.png";
import OrderHistory from "./OrderHistory";
import { Link, Route, Routes } from "react-router-dom";
import AddressSection from "./AddressSection";
import UserNav from "./UserNav";
import PaymentMethods from "./PaymentMethods";


const Addresses = () => {
  return (
    <>
      <section
        className="flex justify-between py-5 px-20"
        style={{ backgroundImage: `url("${bgImage}")` }}
      >
        <div className="flex items-center">
          <div className="mb-[-70px]">
            <img src={profileImage} className="h-[207px]" alt="" />
          </div>
          <div>
            <h1 className="text-[#303030] text-4xl my-2 font-semibold">
              Shah Zaman
            </h1>
            <p>shahzaman@gmail.com</p>
            <button className="px-3 py-1 text-[14px] rounded-md text-white bg-[#262261]">
              Edit Profile
            </button>
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

      <div className="flex flex-col md:flex-row justify-between gap-5    rounded px-10 py-10">
        <div className="w-[30%] p-1 border-2 border-[#f0f2f6] rounded-lg">
          <Link to="/setting">
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#fff] bg-[#262261] rounded-lg border-2 border-[#262261]">
              <span>User Profile Settings</span>
              <CgProfile />
            </button>
          </Link>
          <Link to="/order-history">
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Orders History</span>
              <CgProfile />
            </button>
          </Link>
          <Link to="/addresses">
            <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Addresses</span>
              <CgProfile />
            </button>
          </Link>
          <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
            <span>Payment Methods</span>
            <CgProfile />
          </button>
          <button className="w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
            <span>Order Tracking</span>
            <CgProfile />
          </button>
          <div className="p-1 mt-4 border-2 border-[#faaf40] rounded-lg">
            <button className="w-full flex items-center justify-between gap-2 p-2 text-[#fff] bg-[#faaf40] rounded-lg border-2 border-[#faaf40]">
              <span>Order Tracking</span>
              <IoPowerSharp />
            </button>
          </div>
        </div>

        <Routes>
          <Route path="/setting" element={<UserNav />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/addresses" element={<AddressSection />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/order-tracking" element={<OrderHistory />} />
        </Routes>
      </div>
    </>
  );
};

export default Addresses;
