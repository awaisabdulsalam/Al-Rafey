
const Pagination = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="pagination flex gap-2">
        <button className="page bg-[#f0f2f6] text-[#262261] px-4 py-2 rounded-md">First</button>
        <button className="page bg-[#262261] text-[#fff] px-4 py-2 rounded-md">1</button>
        <button className="page bg-[#f0f2f6] text-[#262261] px-4 py-2 rounded-md">2</button>
        <button className="page bg-[#f0f2f6] text-[#262261] px-4 py-2 rounded-md">3</button>
        <button className="page bg-[#f0f2f6] text-[#262261] px-4 py-2 rounded-md">4</button>
        <button className="page bg-[#f0f2f6] text-[#262261] px-4 py-2 rounded-md">...</button>
        <button className="page bg-[#f0f2f6] text-[#262261] px-4 py-2 rounded-md">35</button>
        <button className="page bg-[#f0f2f6] text-[#262261] px-4 py-2 rounded-md">Last</button>
      </div>
    </div>
  );
};

export default Pagination;
