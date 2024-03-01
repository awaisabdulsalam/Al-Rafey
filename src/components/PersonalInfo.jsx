
const ProfileSettings = () => {
  return (
    <>
        <div
          className="h-auto w-full mt-2  sm:px-4 md:px-8 sm:py-1 md:py-2 rounded-lg border-2"
        >
          <div className="w-full sm:-2 md:mt-5 bg-white rounded-lg overflow-hidden">
            <div className="">
              <h3 className="sm:text-[16px] text-[#161616] md:text-2xl font-semibold my-5">
                Personal Info
              </h3>

              <form>
                <div className="sm:flex sm:flex-col md:flex md:flex-row md:justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your name"
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
                      className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="sm:flex sm:flex-col md:flex md:flex-row md:justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your name"
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
                      className="sm:text-[12px] md:text-[16px] mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
                    >
                      Detailed Address
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded-md"
                      name=""
                      id=""
                      cols="10"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-end my-2">
            <div>
              <button className="sm:text-[12px] md:text-[16px] w-full sm:px-[6px] md:px-[10px] sm:py-[3px] md:py-[6px] text-white text-lg rounded-[4px] bg-[#fb4141]">
                Delete Account
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProfileSettings;
