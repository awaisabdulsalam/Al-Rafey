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
  const [defaultRoute, setDefaultRoute] = useState(true);
  const [login, setLogin] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [loginEmail, setLoginEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginEmail("");
    setLoginPassword("")
    console.log("login");
    
  }
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("signup");
    setFirstName("");
    setLastName("");
    setSignupEmail("");
    setPassword("");
    setConfirmPassword("");
    setAddress("");
    setPhone("")
  }

  return (
    <>
      <div className="flex justify-center items-center py-20">
        <div className="md:w-[40%] bg-white sm:p-4 md:p-8 rounded-lg shadow-lg mx-4">
          <div className="">
            {!login ? (
              <div>
                <h3 className="sm:text-[18px] md:text-3xl font-semibold ">
                  Sign up
                </h3>
                <form className="my-4" onSubmit={handleSignup}>
                  <div className="my-8">
                    <label
                      htmlFor="firstName"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="my-2 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <label
                      htmlFor="lastName"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="my-2 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <label
                      htmlFor="email"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="my-2 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <label
                      htmlFor="phone"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Enter your password"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="my-2 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <label
                      htmlFor="signupPassword"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="signupPassword"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="my-2 p-2 border border-gray-300 rounded-md w-full"
                    />
                    <label
                      htmlFor="confirmpassword"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="confirmpassword"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="my-2 p-2 border border-gray-300 rounded-md w-full"
                    />

                    <div className="w-full">
                      <label
                        htmlFor="address"
                        className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                      >
                        Detailed Address
                      </label>
                      <textarea
                        name="address"
                        cols="10"
                        rows="10"
                        id="address"
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                        className="my-2 w-full border border-gray-300 rounded-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="mb-4"></div>
                  <button
                    type="submit"
                    className="bg-[#262261] text-white px-4 py-2 rounded-md hover:bg-[#262261d3]"
                  >
                    Sign Up
                  </button>
                  <p className="text-gray-500 my-4">
                    Already have an account?
                    <span
                      className="text-[#262261] cursor-pointer mx-1 font-medium"
                      onClick={() => setLogin((prev) => !prev)}
                    >
                      login
                    </span>
                  </p>
                </form>
              </div>
            ) : (
              <div>
                <h3 className="sm:text-[18px] md:text-3xl font-semibold ">
                  Log in
                </h3>
                <form onSubmit={handleLogin}>
                  <div className="my-4">
                    <label
                      htmlFor="loginEmail"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="loginEmail"
                      placeholder="Enter your email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="loginPassword"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="loginPassword"
                      placeholder="Enter your password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#262261] text-white px-4 py-2 rounded-md hover:bg-[#262261d3]"
                  >
                    Log in
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      <section
        className="sm:flex sm:flex-col sm:py-[10px] sm:px-[2px] md:flex md:flex-row md:justify-between md:py-5 md:px-20"
        style={{
          backgroundImage: `url("${bgImage}")`,
          backgroundSize: "contain",
        }}
      >
        <div className="sm:flex sm:fle-col  md:flex md:flex-row items-center">
          <div className="sm:mb-[0px] md:mb-[-70px]">
            <img
              src={profileImage}
              className="sm:h-[150px] md:h-[207px]"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-[#303030] sm:text-[24px] md:text-4xl my-2 font-semibold">
              Shah Zaman
            </h1>
            <p className="sm:text-[14px] md:text-[18px]">shahzaman@gmail.com</p>
            <button className="sm:text-[12px] sm:px-[8px] sm:py-[4px] md:px-3 md:py-1 text-[14px] rounded-md text-white bg-[#262261]">
              Edit Profile
            </button>
          </div>
        </div>
        <div className="sm:flex sm:justify-center md:flex md:items-end">
          <div className="border-r-[1px] border-[#cccccc] px-6">
            <h1 className="sm:text-[16px] md:text-2xl font-semibold text-[#303030]">
              47
            </h1>
            <p className="sm:text-[12px] md:text-[16px] text-[#303030] font-normal">
              Orders
            </p>
          </div>
          <div className="border-r-[1px] border-l-[1px] border-[#cccccc] px-6">
            <h1 className="sm:text-[16px] md:text-2xl font-semibold text-[#303030]">
              $7747
            </h1>
            <p className="sm:text-[12px] md:text-[16px] text-[#303030] font-normal">
              Spent
            </p>
          </div>
          <div className="border-l-[1px] border-[#cccccc] px-6">
            <h1 className="sm:text-[16px] md:text-2xl font-semibold text-[#303030]">
              47
            </h1>
            <p className="sm:text-[12px] md:text-[16px] text-[#303030] font-normal">
              Points
            </p>
          </div>
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-between gap-5 rounded sm:px-4 md:px-10 sm:py-4 md:py-10">
        <div className="sm:w-full md:w-[30%]  p-1 border-2 border-[#f0f2f6] rounded-lg">
          <Link to="setting" onClick={() => setDefaultRoute(false)}>
            <button className="sm:text-[12px] md:text-[16px] sm:w-full flex items-center justify-between gap-2 sm:px-2 sm:py-1 md:p-2 my-2 text-[#262261] hover:text-[#f0f2f6] bg-[#f0f2f6] hover:bg-[#262261] rounded-[4px] border-2 border-[#262261]">
              <span>User Profile Settings</span>
              <CgProfile />
            </button>
          </Link>
          <Link to="order-history" onClick={() => setDefaultRoute(false)}>
            <button className="sm:text-[12px] md:text-[16px] sm:w-full flex items-center justify-between gap-2 sm:px-2 sm:py-1 md:p-2 my-2 text-[#262261] hover:text-[#f0f2f6] bg-[#f0f2f6] hover:bg-[#262261] rounded-[4px] border-2 border-[#262261]">
              <span>Orders History</span>
              <CgProfile />
            </button>
          </Link>
          <Link to="addresses" onClick={() => setDefaultRoute(false)}>
            <button className="sm:text-[12px] md:text-[16px] sm:w-full flex items-center justify-between gap-2 sm:px-2 sm:py-1 md:p-2 my-2 text-[#262261] hover:text-[#f0f2f6] bg-[#f0f2f6] hover:bg-[#262261] rounded-[4px] border-2 border-[#262261]">
              <span>Addresses</span>
              <CgProfile />
            </button>
          </Link>
          <Link to="payment-methods" onClick={() => setDefaultRoute(false)}>
            <button className="sm:text-[12px] md:text-[16px] sm:w-full flex items-center justify-between gap-2 sm:px-2 sm:py-1 md:p-2 my-2 text-[#262261] hover:text-[#f0f2f6] bg-[#f0f2f6] hover:bg-[#262261] rounded-[4px] border-2 border-[#262261]">
              <span>Payment Methods</span>
              <CgProfile />
            </button>
          </Link>
          <Link>
            <button className="sm:text-[12px] md:text-[16px] sm:w-full flex items-center justify-between gap-2 sm:px-2 sm:py-1 md:p-2 my-2 text-[#262261] hover:text-[#f0f2f6] bg-[#f0f2f6] hover:bg-[#262261] rounded-[4px] border-2 border-[#262261]">
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
