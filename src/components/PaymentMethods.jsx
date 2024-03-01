import { LuPlus } from "react-icons/lu";
import creditCard from "../assets/creditcard.png";

const PaymentMethods = () => {
  return (
    <>
        <div
          className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
        >
          <div className="flex justify-between items-center">
            <h1 className="sm:text-[16px] md:text-xl  font-semibold my-4 text-[#303030]">
              Payment Methods
            </h1>
            <div>
            <button className="flex items-center gap-1 sm:px-[4px] md:px-3 sm:py-[4px] md:py-2 sm:text-[10px] md:text-[14px] rounded-[4px] text-white bg-[#262261]">
              <LuPlus /> New Address
            </button>
            </div>
          </div>
          <hr />
          <div className="my-4 flex gap-2">
            <div className="">
             <img src={creditCard} alt="" />
            </div>
            <div>
              <img src={creditCard} alt="" />
            </div>
          </div>
        </div>
    </>
  )
}

export default PaymentMethods