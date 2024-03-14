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