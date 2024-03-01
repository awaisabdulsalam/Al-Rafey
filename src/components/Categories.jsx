import Products from "./Products";
import men from "../assets/men.jpg";

const products = [
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
];
import Pagination from "./Pagination";

const Categories = () => {
  return (
    <>
      <section className="sm:flex sm:flex-col md:flex md:flex-row sm:px-2 md:px-10    border-2 border-red-600">
        <section className="flex-1  sm:my-4 md:my-10">
          <h1 className="sm:text-[16px] md:text-2xl">Categories</h1>
          <div className="sm:flex md:flex md:flex-col overflow-scroll sm:gap-2 sm:mt-2 md:mt-5">
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                All
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Groceries & Pets
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Online Pharmacy
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Books
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Home & Office Improvement
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Toys And Games
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Uniform & Stationary
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Women Fashion
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Men Fashion
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Kids Fashion
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Baby Products
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Crockery & Cutlery
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Beauty & Cosmetics
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Furniture & Accessories
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                TV & Home Appliances
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
              <input type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4" />
              <label htmlFor="" className="text-[#808080] sm:text-[14px] md:text-lg">
                Electronic Accessories
              </label>
              <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">(12)</p>
            </div>
          </div>

          <div className="py-5">
            <h1 className="sm:text-xl md:text-2xl sm:my-2">Price</h1>
            <div className="flex flex-col items-center gap-2  px-5">
              <input type="range" min="0%" max="70%" className="w-full sm:h-[4px]" />
              <div className="w-full flex justify-between">
                <p className="text-[#808080] sm:text-[12px]">$10</p>
                <p className="text-[#808080] sm:text-[12px]">$100</p>
                <p className="text-[#808080] sm:text-[12px]">$1000</p>
              </div>
              <button className="sm:text-[12px] sm:px-1 md:px-3 sm:py-2 md:py-3 sm:font-medium md:font-semibold rounded-md text-[#262261] bg-[#f6f6f6] border-2 border-[#262261]">
                $ 50 - $ 500
              </button>
            </div>
          </div>
        </section>
        <section className="sm:px-0 flex flex-[3]">
          <Products
            products={products}
            heading="All Products"
            bgColor="#fff"
            color="#333"
            btnColor="#262261"
            id="men"
          />
        </section>
      </section>
      <section>
        <Pagination />
      </section>
    </>
  );
};

export default Categories;
