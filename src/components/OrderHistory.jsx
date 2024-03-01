import Pagination from "./Pagination";

const OrderHistory = () => {
  return (
    <>
      <section className="history_section w-full border-2 border-gray-200 px-6 py-10 rounded-lg">
        <h1 className="order_history text-xl  font-semibold my-6">
          Orders History
        </h1>
        <div className="overflow-x-auto flex justify-center">
          <table className="min-w-full rounded-lg">
            <thead className="w-full bg-[#f6f9f8]">
              <tr className="w-full">
                <td className="history_heading text-[#a8a8a8] text-lg px-2 py-2">
                  Order
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  Amount
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  Date
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  Action
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-b border-gray-200">
                <td className="history_heading text-[#262261] text-lg px-2">
                  #1234
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  $299
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  13/05/24
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  <button className="rounded">Details</button>
                </td>
              </tr>
              <tr className="border-t border-b border-gray-200">
                <td className="history_heading text-[#262261] text-lg px-2">
                  #1234
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  $299
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  13/05/24
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  <button className="rounded">Details</button>
                </td>
              </tr>
              <tr className="border-t border-b border-gray-200">
                <td className="history_heading text-[#262261] text-lg px-2">
                  #1234
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  $299
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  13/05/24
                </td>
                <td className="history_heading text-[#a8a8a8] text-lg px-4 py-2">
                  <button className="rounded">Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
            <div className="pagination_call flex justify-end my-2">
              <div>
                <Pagination />
              </div>
            </div>
      </section>
    </>
  );
};

export default OrderHistory;
