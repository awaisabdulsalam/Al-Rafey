const NewAddress = () => {
  return (
    <>
      <div className="">
        <h3 className="px-12 bg-[#f8f8f8] text-[#161616] text-2xl font-semibold py-5">
          Add New Delivery Address
        </h3>

        <form className="px-16 my-10">
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-md font-medium text-gray-700"
              >
                Landmark (Optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="e.g. Near Park, "
              />
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-gray-700"
              >
                Province
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Choose your province"
              />
            </div>
            <div className="w-full">
            <div className="">
              <p className="text-md font-medium text-gray-700">
                Select a label for effective delivery
              </p>
              <div className="flex items-center gap-5">
                <div className="flex gap-3">
                  <input
                    type="radio"
                    id="email"
                    name="home"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md cursor-pointer"
                    placeholder="Enter your email"
                  />
                  <label htmlFor="home" className="text-lg text-[#939393]">Home</label>
                </div>
                <div className="flex gap-3">
                  <input
                    type="radio"
                    id="email"
                    name="home"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md cursor-pointer"
                    placeholder="Enter your email"
                  />
                  <label htmlFor="home" className="text-lg text-[#939393]">Home</label>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Choose your city"
              />
            </div>
           <div className="w-full my-4">
              <p className="text-md font-medium text-gray-700">
                Default Address (Optional)
              </p>
              <div className="flex items-center gap-5">
                <div className="flex gap-3">
                  <input
                    type="checkbox"
                    id="email"
                    name="home"
                    className="border border-gray-300 rounded-md cursor-pointer"
                    placeholder="Enter your email"
                  />
                  <label htmlFor="home" className="text-lg text-[#939393]">Make this address default for billing and delivery</label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-[50%]">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-gray-700"
              >
                Area
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Choose your area"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button className="py-2 px-10 text-white text-lg rounded-lg bg-[#262261]">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAddress;
