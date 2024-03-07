import { Link } from "react-router-dom";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";


const GroupImages = () => {
  return (
    <section className="sm:flex sm:flex-col sm:p-0 md:flex md:flex-row md:gap-10 md:my-10 md:px-10">
      <div
        className="sm:w-auto h-40 md:w-1/3 sm:flex-col md:flex  md:justify-center px-10 sm:py-10"
        style={{ backgroundImage: `url(${group1})` }}
      >
        <h1 className="sm:text-[16px] md:text-2xl">
          Hanging<br />
          <span className="font-bold">Lights</span>
        </h1>
        <div>
          <Link to="/al-rafey/categories">
          <button className="sm:px-[4px] sm:py-[2px] sm:text-[14px] hover:bg-[#262261] hover:text-[#fff] hover:border-[#262261] border-2 border-grey-800 md:p-2 my-2 rounded-[4px] text-gray-500">
            View Collections
          </button>
          </Link>
        </div>
      </div>
      <div
        className="sm:w-auto h-40 md:w-1/3 sm:flex-col md:flex  md:justify-center px-10 sm:py-10"
        style={{ backgroundImage: `url(${group2})` }}
      >
        <h1 className="sm:text-[16px] md:text-2xl">
          Boomrang <br />
          <span className="font-bold">Chair</span>
        </h1>
        <div>
        <Link to="/al-rafey/categories">
          <button className="sm:px-[4px] sm:py-[2px] sm:text-[14px] hover:bg-[#262261] hover:text-[#fff] hover:border-[#262261] border-2 border-grey-800 md:p-2 my-2 rounded-[4px] text-gray-500">
            View Collections
          </button>
          </Link>
        </div>
      </div>
      <div
        className="sm:w-auto h-40 md:w-1/3 sm:flex-col md:flex  md:justify-center px-10 sm:py-10"
        style={{ backgroundImage: `url(${group3})` }}
      >
        <h1 className="sm:text-[16px] md:text-2xl">
          Modern <br />
          <span className="font-bold">Chair</span>
        </h1>
        <div>
        <Link to="/al-rafey/categories">
        <button className="sm:px-[4px] sm:py-[2px] sm:text-[14px] hover:bg-[#262261] hover:text-[#fff] hover:border-[#262261] border-2 border-grey-800 md:p-2 my-2 rounded-[4px] text-gray-500">
            View Collections
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GroupImages;
