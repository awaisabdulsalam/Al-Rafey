import Products from "./Products"
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
    
  ]
import Pagination from "./Pagination";

const Categories = () => {
  return (
    <>
    <section className="flex px-10">
      <section className="flex-1  my-10">
        <h1 className="text-2xl">Categories</h1>
        <div className="mt-5">
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">All</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Groceries & Pets</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Online Pharmacy</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Books</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Home & Office Improvement</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Toys And Games</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Uniform & Stationary</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Women Fashion</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Men Fashion</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Kids Fashion</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Baby Products</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Crockery & Cutlery</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Beauty & Cosmetics</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Furniture & Accessories</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">TV & Home Appliances</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
            <div className="flex items-center gap-1 my-2 cursor-pointer">
            <input type="radio" className="h-4 w-4" />
            <label htmlFor="" className="text-[#808080] text-lg">Electronic Accessories</label>
            <p className="text-[#dbdbdb]">(12)</p>
            </div>
        </div>
        
        <div className="py-5">
        <h1 className="text-2xl">Price</h1>
        <div className="flex flex-col items-center gap-2  px-5">
            <input type="range" min="0%" max="70%" className="w-full" />
            <div className="w-full flex justify-between">
                <p className="text-[#808080]">$10</p>
                <p className="text-[#808080]">$100</p>
                <p className="text-[#808080]">$1000</p>
            </div>
            <button className="px-3 py-3 font-semibold rounded-md text-[#262261] bg-[#f6f6f6] border-2 border-[#262261]">$ 50 - $ 500</button>
        </div>

        </div>
      </section>
<section className="flex flex-[3]">
    <Products products={products} heading="All Products" bgColor="#fff" color="#333" btnColor="#262261" id="men" />
</section>

    </section>
    <section>
        <Pagination />
    </section>
    </>
  );
};

export default Categories;
