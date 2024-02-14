import mobileImage from "../assets/mobile.png";

const Favourites = () => {
  return (
    <>
       <section className="my-10 px-10">
       <h1 className="text-3xl font-semibold my-5">Favourites</h1>
      <div
            className="h-auto mx-10 px-5 py-10 rounded-lg"
            style={{
              boxShadow:
                "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div className="rounded-lg flex justify-between items-center px-6 py-4 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-lg">Product</h1>
              <h1 className="text-[#a8a8a8] text-lg">Amount</h1>
              <h1 className="text-[#a8a8a8] text-lg">Action</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-5 py-4">
              <div className="flex items-center">
                <img src={mobileImage} alt="" />
                <p className="text-[#5c5c5c]">Notebook Elite 321</p>
              </div>
              <div className="flex w-[70%] justify-center pr-40">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
              </div>
              <div className="">
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <div className="rounded-lg flex justify-between items-center px-5 py-4">
              <div className="flex items-center">
                <img src={mobileImage} alt="" />
                <p className="text-[#5c5c5c]">Notebook Elite 321</p>
              </div>
              <div className="flex w-[70%] justify-center pr-40">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
              </div>
              <div className="">
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <div className="rounded-lg flex justify-between items-center px-5 py-4">
              <div className="flex items-center">
                <img src={mobileImage} alt="" />
                <p className="text-[#5c5c5c]">Notebook Elite 321</p>
              </div>
              <div className="flex w-[70%] justify-center pr-40">
                <h1 className="text-[#a8a8a8] text-lg">$2499</h1>
              </div>
              <div className="">
                <button className="text-[#bcbcbc]">Remove</button>
              </div>
            </div>
            <hr />
      </div>
       </section>
    </>
  )
}

export default Favourites