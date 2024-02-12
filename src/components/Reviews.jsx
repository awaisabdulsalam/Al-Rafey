import { FaStar } from "react-icons/fa";


const Reviews = () => {
  return (
    <>
      <section>
        <div className="mx-10 my-10">
          <h1 className="text-3xl">Customers Feedback</h1>
        </div>
    <section className="flex gap-10 bg-[#f9fafb] border-2 border-blue-700 px-10 py-8">
  <div className="flex justify-between items-center px-10 py-10 border-2 border-orange-500 mb-4">
    <div className="px-10 py-10">
      <h1 className="text-6xl font-bold text-[#262261]">4.8</h1>
      <div className="flex gap-1 my-4">
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
    </div>
      <p className="text-gray-600">Product Rating</p>
    </div>
  </div>
  <div className="flex-col items-center self-center h-[100%] gap-4 py-10 px-10 border-2 border-green-500">
    <div className="flex items-center gap-5">
     <div className="w-64 bg-gray-200 rounded-full">
        <div style={{ width: '70%' }} className="h-2 bg-yellow-400 rounded-full"></div>
      </div>
    <div className="flex gap-1">
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
    </div>
    <p>70%</p>
    </div>
    <div className="flex items-center gap-5">
    <div className="w-64 bg-gray-200 rounded-full">
        <div style={{ width: '15%' }} className="h-2 bg-yellow-400 rounded-full"></div>
      </div>
    <div className="flex gap-1">
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
    </div>
    <p>15%</p>
    </div>
    <div className="flex items-center gap-5">
    <div className="w-64 bg-gray-200 rounded-full">
        <div style={{ width: '10%' }} className="h-2 bg-yellow-400 rounded-full"></div>
      </div>
    <div className="flex gap-1">
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
    </div>
    <p>10%</p>
    </div>
    <div className="flex items-center gap-5">
    <div className="w-64 bg-gray-200 rounded-full">
        <div style={{ width: '3%' }} className="h-2 bg-yellow-400 rounded-full"></div>
      </div>
    <div className="flex gap-1">
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
    </div>
    <p>3%</p>
    </div>
    <div className="flex items-center gap-5">
    <div className="w-64 bg-gray-200 rounded-full">
        <div style={{ width: '2%' }} className="h-2 bg-yellow-400 rounded-full"></div>
      </div>
    <div className="flex gap-1">
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
      <FaStar className="text-yellow-500 text-sm" />
    </div>
    <p>2%</p>
    </div>
  </div>
</section>


      </section>
    </>
  );
};

export default Reviews;
