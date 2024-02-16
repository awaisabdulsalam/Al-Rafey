import {
  Link
} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoPowerSharp } from "react-icons/io5";
import OrderHistory from "./OrderHistory";

const ProfileButtons = () => {
  return (
    <>
      <div className="p-1 border-2 border-[#f0f2f6] rounded-lg">
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
          </div>
          <div className="p-1 mt-4 border-2 border-[#faaf40] rounded-lg">
            <button className="w-full flex items-center justify-between gap-2 p-2 text-[#fff] bg-[#faaf40] rounded-lg border-2 border-[#faaf40]">
              <span>Order Tracking</span>
              <IoPowerSharp />
            </button>
          </div>
    </>
  );
};

export default ProfileButtons;
