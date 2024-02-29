import { LuPlus } from "react-icons/lu";

const AddressSection = () => {
  return (
    <>
      <div
        className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
      >
        <div className="flex justify-between items-center">
          <h1 className="address_heading text-xl  font-semibold my-4 text-[#303030]">
            Address Book
          </h1>
          <div>
            <button className="address_btn flex items-center gap-1 px-3 py-2 text-[14px] rounded-md text-white bg-[#262261]">
              <LuPlus /> New Address
            </button>
          </div>
        </div>
        <hr />
        <div className="flex justify-between mt-2">
          <div className="user_name my-2 w-[70%]">
            <h1 className="address_name text-[#303030] text-2xl font-semibold my-2">
              Shah Zaman
            </h1>
            <p className="address_text text-[#939393]">(+92) 0309 1354 207</p>
            <p className="address_text text-[#939393]">
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
