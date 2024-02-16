import creaditCard from "../assets/creditcard.png";
import masterCard from "../assets/mastercard.png";
import visaCard from "../assets/visacard.png";

const CreditCard = () => {
  return (
    <div className="">
      <h3 className="px-12 bg-[#f8f8f8] text-[#161616] text-2xl font-semibold py-5">
        Add Payment Option
      </h3>
      <div className="flex justify-center mt-10">
        <img src={creaditCard} alt="" />
      </div>
      <div className="my-5">
        <div className="flex justify-center">
          <p className="text-md font-medium text-[#939393]">
            Select a label for effective delivery
          </p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="email"
              name="home"
              className="mt-1 p-2 w-4 h-4 border border-gray-300 rounded-md cursor-pointer"
              placeholder="Enter your email"
            />
            <img src={visaCard} className="" alt="" />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="radio"
              id="email"
              name="home"
              className="mt-1 p-2 w-4 h-4 border border-gray-300 rounded-md cursor-pointer"
              placeholder="Enter your email"
            />
            <img src={masterCard} alt="" />
          </div>
        </div>

        <div className="">
          <div className="flex justify-center gap-5 mb-4 my-5">
            <div className="w-[50%]">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-[#939393]"
              >
                Card Holder Name
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 mb-4 my-5">
            <div className="w-[50%]">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-[#939393]"
              >
                Card Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="111 111 111 111"
              />
            </div>
          </div>
          <div className="flex justify-center gap-5 my-5">
            <div className="w-[24%]">
              <label
                htmlFor="phone"
                className="block text-md font-medium text-[#939393]"
              >
                Expiry Date
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="11 / 24"
              />
            </div>

            <div className="w-[24%]">
              <label
                htmlFor="email"
                className="block text-md font-medium text-[#939393]"
              >
                Security Code
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                placeholder="234"
              />
            </div>
          </div>
          <div className="w-full flex justify-center mb-10">
            <button className="w-[50%] py-2 px-10 text-white text-lg rounded-lg bg-[#262261]">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
