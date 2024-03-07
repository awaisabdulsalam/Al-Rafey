import { Link } from "react-router-dom";

import cusion from "../assets/cusion.png"

const RestCusion = () => {
  return (
    <section className="sm:flex sm:flex-col sm:p-0 px-20 py-10 my-10">
        <div className=" flex justify-between bg-[#f6f6f6] px-10 py-10 rounded-md">
        <div className="flex-col justify-center py-10">
        <h1 className="sm:text-[16px] md:text-3xl my-2">
        Living Room<br />
          <span className="font-bold">Rest Cusion</span>
        </h1>
        <p className="sm:text-[12px] md:text-[18px] my-2 pr-5 font-light">The design of the Rest fabric began from the use of leftover materials from the Sand upholstery fabric.</p>
        <Link to="/al-rafey/categories">
          <button className="sm:py-[2px] md:py-[6px] sm:px-[4px] md:px-[16px] md:text-[16px] sm:text-[10px] hover:bg-[#262261] hover:text-[#fff] hover:border-[#262261] border-2 border-grey-800 p-2 my-2 rounded-[4px] text-gray-500">
            Show More
          </button>
          </Link>
        </div>
        <div className="sm:flex sm:justify-center">
            <img src={cusion} alt="" className="" />
        </div>
        </div>
    </section>
  )
}

export default RestCusion