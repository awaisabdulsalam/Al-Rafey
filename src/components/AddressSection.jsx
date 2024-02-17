import { LuPlus } from "react-icons/lu";

const AddressSection = () => {
  return (
    <>
      <div
        className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-xl  font-semibold my-4 text-[#303030]">
            Address Book
          </h1>
          <div>
            <button className="flex items-center gap-1 px-3 py-2 text-[14px] rounded-md text-white bg-[#262261]">
              <LuPlus /> New Address
            </button>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-2">
          <div className="my-2">
            <h1 className="text-[#303030] text-2xl font-semibold my-2">
              Shah Zaman
            </h1>
            <p className="text-[#939393]">(+92) 0309 1354 207</p>
            <p className="text-[#939393]">
              Punjab,Lahore - Model Town,Block D,Sher Shah Block , Barket Market
              , Near Skans School of accountancy , Lahore
            </p>
          </div>
          <div>
            <button className="px-3 py-2 rounded-md text-[14px] text-[#262261] bg-[#f6f6f6] border-[1px] border-[#262261]">
              Edit Address
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressSection;
