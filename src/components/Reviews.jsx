import { FaStar } from "react-icons/fa";
import { FaReply } from "react-icons/fa";
import { GoThumbsup } from "react-icons/go";

const Reviews = () => {
  return (
    <>
      <section className="">
        <div className="mx-10 my-5">
          <h1 className="text-2xl text-[#344054] font-semibold">
            Customers Feedback
          </h1>
        </div>
        <section className="flex gap-10 px-10 py-8">
          <div className="flex justify-between items-center px-10 py-10 bg-[#f9fafb] mb-4 rounded-md">
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
          <div className="flex-col items-center self-center h-[100%] gap-4 py-10 px-10 bg-[#f9fafb] rounded-md">
            <div className="flex items-center gap-5">
              <div className="w-64 bg-gray-200 rounded-full">
                <div
                  style={{ width: "70%" }}
                  className="h-2 bg-yellow-400 rounded-full"
                ></div>
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
                <div
                  style={{ width: "15%" }}
                  className="h-2 bg-yellow-400 rounded-full"
                ></div>
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
                <div
                  style={{ width: "10%" }}
                  className="h-2 bg-yellow-400 rounded-full"
                ></div>
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
                <div
                  style={{ width: "3%" }}
                  className="h-2 bg-yellow-400 rounded-full"
                ></div>
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
                <div
                  style={{ width: "2%" }}
                  className="h-2 bg-yellow-400 rounded-full"
                ></div>
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
      <section className="">
        <div className="mx-10 my-5">
          <h1 className="text-2xl text-[#262261] font-semibold">Reviews</h1>
        </div>

        <div className="flex items-start justify-start rounded-lg px-20 py-10 mb-4">
          <div className="rounded-full my-5 bg-[#262261] text-white w-12 h-12 flex items-center justify-center mr-4">
            <span className="text-lg">A.T</span>
          </div>
          <div className="flex-grow px-5 py-5">
            <div className="flex gap-5 mb-2">
              <p className="font-bold text-[#262261]">John Doe</p>
              <p className="text-gray-500">3 days ago</p>
            </div>
            <div className="flex gap-1 my-4">
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
            </div>
            <p className="mb-2 text-[#262261]">Great Product</p>
            <p className="text-[#667085] mb-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in <br /> some form, by
              injected humour
            </p>
            <div className="flex items-center">
              <GoThumbsup className="text-gray-500 text-xl mr-2" />
              <p className="text-gray-500">Like</p>
              <FaReply className="text-[#e06d50] ml-4" />
              <p className="text-[#e06d50] ml-2">Reply</p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex items-start justify-start rounded-lg px-20 py-10 mb-4">
          <div className="rounded-full my-5 bg-[#262261] text-white w-12 h-12 flex items-center justify-center mr-4">
            <span className="text-lg">A.T</span>
          </div>
          <div className="flex-grow px-5 py-5">
            <div className="flex gap-5 mb-2">
              <p className="font-bold text-[#262261]">John Doe</p>
              <p className="text-gray-500">3 days ago</p>
            </div>
            <div className="flex gap-1 my-4">
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
              <FaStar className="text-yellow-500 text-sm" />
            </div>
            <p className="mb-2 text-[#262261]">Great Product</p>
            <p className="text-[#667085] mb-2">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in <br /> some form, by
              injected humour
            </p>
            <div className="flex items-center">
              <GoThumbsup className="text-gray-500 text-xl mr-2" />
              <p className="text-gray-500">Like</p>
              <FaReply className="text-[#e06d50] ml-4" />
              <p className="text-[#e06d50] ml-2">Reply</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center">
        <button className="underline text-[#e06d50]">
          <a href="#">View All Reviews</a>
        </button>
      </div>

      <section className="gap-5 px-20 py-10  mb-2">
        <div className="flex">
          <p className="font-bold text-xl text-[#262261]">Write a Review</p>
        </div>
        <p className="font-md text-[#262261]">What is it to like Product?</p>
        <div className="flex gap-1 my-4">
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
          <FaStar className="text-yellow-500 text-sm" />
        </div>
        <p className="my-4 font-md text-[#262261]">Review Title</p>
        <input
          type="text"
          placeholder="Great Product"
          className="w-full px-3 py-4 rounded-xl border border-gray-300"
        />
        <p className="my-4 font-md text-[#262261]">Review Content</p>
        <textarea
          type="area"
          placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
          className="w-full px-3 py-4 rounded-xl border border-gray-300"
        />
        <button className="font-bold bg-[#262261] text-white mt-5 px-10 py-3 rounded-md">
          Submit Review 
        </button>
      </section>
    </>
  );
};

export default Reviews;