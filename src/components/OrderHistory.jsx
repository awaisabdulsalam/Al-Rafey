import Pagination from "./Pagination";

const OrderHistory = () => {
  return (
    <>
        <div
          className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2"
        >
          <h1 className="text-xl  font-semibold my-4">Orders History</h1>
          <div className="rounded-lg flex justify-between items-center px-4 py-4 bg-[#f6f9f8]">
              <h1 className="text-[#a8a8a8] text-lg">Order ID</h1>
              <h1 className="text-[#a8a8a8] text-lg">Amount</h1>
              <h1 className="text-[#a8a8a8] text-lg">Date</h1>
              <h1 className="text-[#a8a8a8] text-lg">Action</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>
            <div className="rounded-lg flex justify-between items-center px-4 py-4">
              <h1 className="text-[#262261] text-lg">#123123</h1>
              <h1 className="text-[#a8a8a8] text-lg ml-6">$2499</h1>
              <h1 className="text-[#a8a8a8] text-lg ">13/05/24</h1>
              <h1 className="text-[#a8a8a8] text-lg">Details</h1>
            </div>

            <hr />

            <div className="flex justify-end my-2">
              <div>
                <Pagination />
              </div>
            </div>
        </div>
    </>
  );
};

export default OrderHistory;
