
const NewAddress = () => {
  return (
    <>
    <div className="px-10">
      <h3 className="bg-[#f8f8f8] text-[#161616] text-2xl font-semibold py-5">Add New Delivery Address</h3>

        <form>
          <div className="flex justify-between gap-5 mb-4 my-5">
            <div className="w-full">
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
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
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
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
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
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
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
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
              <label htmlFor="phone" className="block text-md font-medium text-gray-700">
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
              <p className="block text-md font-medium text-gray-700">
                Select a label for effective delivery
              </p>
              <div className="">
                <div>
                <label htmlFor="email">Emhhhhhhh</label>
              <input
                type="radio"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
                />
                </div>
                <div>
                    <label htmlFor="home">Home</label>
              <input
                type="radio"
                id="home"
                name="home"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter your email"
                />
                </div>
              </div>
            </div>
          </div>
            <div className="mt-10">
            </div>
          
          <div className="">
          <button className="w-full p-2 text-white text-lg rounded-lg bg-[#262261]">Confirm Your Order</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewAddress