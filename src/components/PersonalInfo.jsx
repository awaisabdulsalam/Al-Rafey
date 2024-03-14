import { useState } from "react";


const ProfileSettings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    setFirstName("")
    setLastName("")
    setAddress("")
    setPhone("")
    setEmail("")
  }

  return (
    <>
      <div className="h-auto w-full mt-2  sm:px-4 md:px-8 sm:py-1 md:py-2 rounded-lg border-2">
        <form onSubmit={handleInfoSubmit}>
          <div className="w-full sm:-2 md:mt-5 bg-white rounded-lg overflow-hidden">
            <div className="">
              <h3 className="sm:text-[16px] text-[#161616] md:text-2xl font-semibold my-5">
                Personal Info
              </h3>

              <div className="sm:flex sm:flex-col md:flex md:flex-row md:justify-between gap-5 mb-4 my-5">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:flex sm:flex-col md:flex md:flex-row md:justify-between gap-5 mb-4 my-5">
                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-5 mb-4 my-5">
                <div className="w-full">
                  <label
                    htmlFor="address"
                    className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                  >
                    Detailed Address
                  </label>
                  <textarea
                    name="address"
                    id="address"
                    cols="10"
                    rows="10"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-gray-300 rounded-md"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end my-2">
            <div>
              <button type="submit" className="bg-[#262261] hover:bg-[#262261d3] sm:text-[12px] md:text-[16px] w-full sm:px-[6px] md:px-[10px] sm:py-[3px] md:py-[6px] text-white text-lg rounded-[4px]">
                Add Information
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileSettings;
