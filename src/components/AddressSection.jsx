import { LuPlus } from "react-icons/lu";

const AddressSection = () => {
  return (
    <>
      <div
        className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
      >
        <div className="flex justify-between items-center">
          <h1 className="sm:text-[16px] md:text-xl  font-semibold my-4 text-[#303030]">
            Address Book
          </h1>
          <div>
            <button className="flex items-center gap-1 sm:px-[4px] md:px-3 sm:py-[4px] md:py-2 sm:text-[10px] md:text-[14px] rounded-[4px] text-white bg-[#262261]">
              <LuPlus /> New Address
            </button>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-2">
          <div className="my-2 w-[70%]">
            <h1 className="text-[#303030] sm:text-[16px] md:text-2xl font-semibold sm:my-1 md:my-2">
              Shah Zaman
            </h1>
            <p className="sm:text-[10px] md:text-[16px] text-[#939393]">(+92) 0309 1354 207</p>
            <p className="sm:text-[10px] md:text-[16px] text-[#939393]">
              Punjab,Lahore - Model Town,Block D,Sher Shah Block , Barket Market
              , Near Skans School of accountancy , Lahore
            </p>
          </div>
          <div className="user_address flex justify-end w-[15%]">
            <div className="">
            <button className="edit_address_btn px-3 py-2 rounded-md text-[14px] text-[#262261] bg-[#f6f6f6] border-[1px] border-[#262261]">
              Edit Address
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressSection;
