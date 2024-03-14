
import MenProduct from "./MenProduct.jsx"
import WomenProduct from "./WomenProduct.jsx"
import MobileProduct from "./MobileProduct.jsx"

const CategoryProduct = ({ selectCategory, products, lessProducts, inputValue }) => {
  return (
    <>
    {(inputValue === "men" || selectCategory === "men" || inputValue === "" && selectCategory === "men") && <MenProduct products={products} lessProducts={lessProducts} />}
    {(inputValue === "women" || selectCategory === "women" || inputValue === "" && selectCategory === "women") && <WomenProduct products={products} lessProducts={lessProducts} />}
    {(inputValue === "mobile" || selectCategory === "mobile" || inputValue === "" && selectCategory === "mobile") && <MobileProduct products={products} lessProducts={lessProducts} />}

    </>
  )
}

export default CategoryProduct