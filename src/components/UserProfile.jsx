  import { CgProfile } from "react-icons/cg";
  import { IoPowerSharp } from "react-icons/io5";
  import bgImage from "../assets/bgImage.png";
  import profileImage from "../assets/profile.png";
  import OrderHistory from "./OrderHistory";
  import { Link, Route, Routes } from "react-router-dom";
  import AddressSection from "./AddressSection";
  import PersonalInfo from "./PersonalInfo";
  import PaymentMethods from "./PaymentMethods";
import { useState } from "react";

  const Addresses = () => {

    const [defaultRoute, setDefaultRoute] = useState(true)

    return (
      <>
        <section
          className="profile_section flex justify-between py-5 px-20"
          style={{ backgroundImage: `url("${bgImage}")`, backgroundSize: "contain" }}
        >
          <div className="profile_content flex items-center">
            <div className="profile_img_div mb-[-70px]">
              <img src={profileImage} className="profile_img h-[207px]" alt="" />
            </div>
            <div>
              <h1 className="profile_name text-[#303030] text-4xl my-2 font-semibold">
                Shah Zaman
              </h1>
              <p className="profile_email">shahzaman@gmail.com</p>
              <button className="profile_btn px-3 py-1 text-[14px] rounded-md text-white bg-[#262261]">
                Edit Profile
              </button>
            </div>
          </div>
          <div className="profile_stats flex items-end">
            <div className="border-r-[1px] border-[#cccccc] px-6">
              <h1 className="profile_stats_num text-2xl font-semibold text-[#303030]">47</h1>
              <p className="profile_stats_text text-[#303030] font-normal">Orders</p>
            </div>
            <div className="border-r-[1px] border-l-[1px] border-[#cccccc] px-6">
              <h1 className="profile_stats_num text-2xl font-semibold text-[#303030]">$7747</h1>
              <p className="profile_stats_text text-[#303030] font-normal">Spent</p>
            </div>
            <div className="border-l-[1px] border-[#cccccc] px-6">
              <h1 className="profile_stats_num text-2xl font-semibold text-[#303030]">47</h1>
              <p className="profile_stats_text text-[#303030] font-normal">Points</p>
            </div>
          </div>
        </section>

        <div className="profile_details flex flex-col md:flex-row justify-between gap-5    rounded px-10 py-10">
          <div className="profile_btns w-[30%] p-1 border-2 border-[#f0f2f6] rounded-lg">
            <Link to="setting" onClick={() => setDefaultRoute(false)}>
              <button className="profile_button w-full flex items-center justify-between gap-2 p-2 my-2 text-[#fff] bg-[#262261] rounded-lg border-2 border-[#262261]">
                <span>User Profile Settings</span>
                <CgProfile />
              </button>
            </Link>
            <Link to="order-history" onClick={() => setDefaultRoute(false)}>
              <button className="profile_button w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
                <span>Orders History</span>
                <CgProfile />
              </button>
            </Link>
            <Link to="addresses" onClick={() => setDefaultRoute(false)}>
              <button className="profile_button w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
                <span>Addresses</span>
                <CgProfile />
              </button>
            </Link>
            <Link to="payment-methods" onClick={() => setDefaultRoute(false)}>
            <button className="profile_button w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Payment Methods</span>
              <CgProfile />
            </button>
            </Link>
            <Link>
            <button className="profile_button w-full flex items-center justify-between gap-2 p-2 my-2 text-[#939393] bg-[#f0f2f6] rounded-lg border-2 border-[#f0f2f6]">
              <span>Order Tracking</span>
              <CgProfile />
            </button>
            </Link>
            <div className="order_tracking_btn p-1 mt-4 border-2 border-[#faaf40] rounded-lg">
              <button className="order_tracking_btn w-full flex items-center justify-between gap-2 p-2 text-[#fff] bg-[#faaf40] rounded-lg border-2 border-[#faaf40]">
                <span>Order Tracking</span>
                <IoPowerSharp />
              </button>
            </div>
          </div>
            {defaultRoute && <PersonalInfo />}
          <Routes>
            <Route path="setting" element={<PersonalInfo />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="addresses" element={<AddressSection />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="order-tracking" element={<OrderHistory />} />
          </Routes>
        </div>

      </>
    );
  };

  export default Addresses;
