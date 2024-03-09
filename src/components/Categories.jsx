import Products from "./Products";
import men from "../assets/men.jpg";
import Pagination from "./Pagination";
import { useState } from "react";

// const products = [
//   {
//     image: men,
//     name: "T-Shirt",
//     category: "All",
//     price: 100,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Groceries",
//     category: "Groceries & Pets",
//     price: 20,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Pharmacy",
//     category: "Online Pharmacy",
//     price: 80,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Books",
//     category: "Books",
//     price: 45,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Home & Office",
//     category: "Home & Office Improvement",
//     price: 99,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Toys And Games",
//     category: "Toys And Games",
//     price: 23,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Stationary",
//     category: "Uniform & Stationary",
//     price: 46,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Kids Fashion",
//     category: "Kids Fashion",
//     price: 89,
//     reviews: 234,
//   },
//   {
//     image: men,
//     name: "Baby Products",
//     category: "Baby Products",
//     price: 77,
//     reviews: 234,
//   },
// ];

const Categories = ({ products }) => {

  const [allProducts, setAllProducts] = useState([...products]);
  
  const [selectedCategory, setSelectedCatogory] = useState([]);
  const [selected, setSelected] = useState(false);
  const [price, setPrice] = useState(1000);

// const fil = allProducts.filter((prod) => prod.price > 700);
// console.log(fil);

  const handleCategory = (e) => {
    const targetValue = e.target.value.toLowerCase();
    if (targetValue === "all") {
      return setSelectedCatogory([...products])
    }
    const matched = allProducts.filter((prod) => prod.category.toLowerCase() === targetValue);
    setSelectedCatogory(matched)
    setSelected(true);
  } 

  const handlePrice = () => {

    console.log(price);
    const matched = products.filter((prod) => prod.price >=  price);
    console.log(matched);
    setSelectedCatogory(matched);
    setSelected(true);
  }

  return (
    <>
      <section className="sm:flex sm:flex-col md:flex md:flex-row sm:px-2 md:px-10">
        <section className="flex-1  sm:my-4 md:my-10">
          <h1 className="sm:text-[16px] md:text-2xl">Categories</h1>
          <div className="sm:flex md:flex md:flex-col overflow-scroll sm:gap-2 sm:mt-2 md:mt-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-1 my-2 cursor-pointer"
              >
                <input value={product.category} onClick={handleCategory} name="product" type="radio" className="sm:h-3 md:h-4 sm:w-4 md:w-4 cursor-pointer" />
                <label
                  htmlFor=""
                  className="text-[#808080] sm:text-[14px] md:text-lg cursor-pointer"
                >
                  {product.category}
                </label>
                <p className="text-[#dbdbdb] sm:text-[10px] md:text-[16px]">
                  (12)
                </p>
              </div>
            ))}
          </div>

          <div className="py-5">
            <h1 className="sm:text-xl md:text-2xl sm:my-2">Price</h1>
            <div className="flex flex-col items-center gap-2  px-5">
              <input
                type="range"
                min="0%"
                max="1000%"
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
                className="w-full sm:h-[4px] cursor-pointer"
              /> 
              <div className="w-full flex justify-between">
                <p className="text-[#808080] sm:text-[12px] md:text-[16px]">
                  $10
                </p>
                <p className="text-[#808080] sm:text-[12px] md:text-[16px]">
                  $50
                </p>
                <p className="text-[#808080] sm:text-[12px] md:text-[16px]">
                  $100
                </p>
              </div>
              <button onClick={handlePrice} className="sm:text-[12px] md:text-[16px] sm:px-1 md:px-3 sm:py-2 md:py-3 sm:font-medium md:font-semibold rounded-md text-[#262261] bg-[#f6f6f6] border-2 border-[#262261]">
                Set
              </button>
            </div>
          </div>
        </section>
        <section className="sm:px-0 flex flex-[3]">
         {!selected ? <Products
            products={products}
            heading="All Products"
            bgColor="#fff"
            color="#333"
            btnColor="#262261"
            id="men"
          /> 
          :
          <Products
            products={selectedCategory}
            heading="All Products"
            bgColor="#fff"
            color="#333"
            btnColor="#262261"
            id="men"
          /> 
          }
        </section>
      </section>
      <section>
        <Pagination />
      </section>
    </>
  );
};

export default Categories;
