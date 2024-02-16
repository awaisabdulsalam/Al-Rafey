import bgImage from "../assets/bgImage.png";
import profileImage from "../assets/profile.png";
import ProfileSettings from "./ProfileSettings.jsx";

// import {
//     Switch,
//     Route,
//   } from "react-router-dom";

const Profile = () => {
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
      <ProfileSettings />
    </>
  );
};

export default Profile;
