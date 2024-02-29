import { LuPlus } from "react-icons/lu";
import creditCard from "../assets/creditcard.png";

const PaymentMethods = () => {
  console.log("Payment Addddd..........");
  return (
    <>
        <div
          className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
        >
          <div className="flex justify-between items-center">
            <h1 className="address_heading text-xl  font-semibold my-4 text-[#303030]">
              Payment Methods
            </h1>
            <div>
              <button className="address_btn flex items-center gap-1 px-3 py-2 text-[14px] rounded-md text-white bg-[#262261]">
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