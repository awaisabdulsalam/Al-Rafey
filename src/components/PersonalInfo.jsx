
const ProfileSettings = () => {
  return (
    <>
        <div
          className="info h-auto w-full mt-2  px-8 py-2 rounded-lg border-2"
        >
          <div className="w-full mt-5 bg-white rounded-lg overflow-hidden">
            <div className="">
              <h3 className="address_heading text-[#161616] text-2xl font-semibold my-5">
                Personal Info
              </h3>

              <form>
                <div className="info_input_tags flex justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="info_label block text-md font-medium text-[#939393]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="info_input mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="info_label block text-md font-medium text-[#939393]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="info_input mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="info_input_tags flex justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="info_label block text-md font-medium text-[#939393]"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="info_input mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="info_label block text-md font-medium text-[#939393]"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="info_input mt-1 p-2 w-full border border-gray-300 rounded-md"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-5 mb-4 my-5">
                  <div className="w-full">
                    <label
                      htmlFor="phone"
                      className="info_label block text-md font-medium text-[#939393]"
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
              <button className="info_delete_btn w-full p-2 text-white text-lg rounded-lg bg-[#fb4141]">
                Delete Account
              </button>
            </div>
          </div>
        </div>
    </>
  );
};

export default ProfileSettings;
