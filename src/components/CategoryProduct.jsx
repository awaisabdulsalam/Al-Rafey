
import MenProduct from "./MenProduct.jsx"
import WomenProduct from "./WomenProduct.jsx"
import MobileProduct from "./MobileProduct.jsx"

const CategoryProduct = ({ selectCategory, products, lessProducts, inputValue }) => {
  return (
    <>
    {/* {(inputValue === "men" || selectCategory === "men" || inputValue === "category" && selectCategory === "men") && <MenProduct products={products} lessProducts={lessProducts} />}
    {(inputValue === "women" || selectCategory === "women" || inputValue === "category" && selectCategory === "women") && <WomenProduct products={products} lessProducts={lessProducts} />}
    {(inputValue === "mobile" || selectCategory === "mobile" || inputValue === "category" && selectCategory === "mobile") && <MobileProduct products={products} lessProducts={lessProducts} />} */}
  {(inputValue.toLowerCase() === "men" || selectCategory.toLowerCase() === "men") || (inputValue.toLowerCase() === "men" && selectCategory.toLowerCase() === "category") ? 
        <MenProduct products={products} lessProducts={lessProducts} /> 
        : null
      }
      {(inputValue.toLowerCase() === "women" || selectCategory.toLowerCase() === "women") || (inputValue.toLowerCase() === "women" && selectCategory.toLowerCase() === "category") ? 
        <WomenProduct products={products} lessProducts={lessProducts} /> 
        : null
      }
      {(inputValue.toLowerCase() === "mobile" || selectCategory.toLowerCase() === "mobile") || (inputValue.toLowerCase() === "mobile" && selectCategory.toLowerCase() === "category") ? 
        <MobileProduct products={products} lessProducts={lessProducts} /> 
        : null
      }
    </>
  )
}

export default CategoryProduct