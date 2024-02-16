import ProfileButtons from "./ProfileButtons";

const ProfileSettings = () => {
  return (
    <>
      <section className="flex gap-5 py-10 px-20">
        <div className="w-[30%] p-2">
          <ProfileButtons />
        </div>
      <div
        className="h-auto w-full mt-2  px-8 py-2 rounded-lg"
        style={{
          boxShadow:
            "5px 5px 10px rgba(0, 0, 0, 0.01), 5px 5px 10px rgba(0, 0, 0, 0.01), 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="w-full mt-5 bg-white rounded-lg overflow-hidden">
      <div className="">
      <h3 className="text-[#161616] text-2xl font-semibold my-5">Personal Info</h3>

        <form>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-[#939393]">
                Name
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-md font-medium text-[#939393]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-[#939393]">
                Name
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block text-md font-medium text-[#939393]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>
            
          </div>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-[#939393]">
                Detailed Address
              </label>
              <textarea  className="w-full border border-gray-300 rounded-md" name="" id="" cols="10" rows="10"></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
        <div className="flex justify-end my-2">
          <div>
          <button className="w-full p-2 text-white text-lg rounded-lg bg-[#fb4141]">Delete Account</button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ProfileSettings;
