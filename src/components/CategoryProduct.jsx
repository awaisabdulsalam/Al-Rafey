
import MenProduct from "./MenProduct.jsx"
import WomenProduct from "./WomenProduct.jsx"
import MobileProduct from "./MobileProduct.jsx"

const CategoryProduct = ({ selectCategory, products, inputValue }) => {
  return (
    <>
    {(inputValue === "men" || selectCategory === "men" || inputValue === "" && selectCategory === "men") && <MenProduct products={products} />}
    {(inputValue === "women" || selectCategory === "women" || inputValue === "" && selectCategory === "women") && <WomenProduct products={products} />}
    {(inputValue === "mobile" || selectCategory === "mobile" || inputValue === "" && selectCategory === "mobile") && <MobileProduct products={products} />}

    </>
  )
}

export default CategoryProduct