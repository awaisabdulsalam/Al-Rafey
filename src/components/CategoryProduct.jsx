import { useContext } from "react"
import { userContext } from "./Context.jsx"
import MensProduct from "./MenProduct.jsx"
import WomenProduct from "./WomenProduct.jsx"
import MobileProduct from "./MobileProduct.jsx"

const CategoryProduct = ({ selectCategory }) => {
    console.log(selectCategory, "Helooooooo");
  return (
    <>
    {selectCategory === "men" && <MensProduct />}
    {selectCategory === "women" && <WomenProduct />}
    {selectCategory === "mobile" && <MobileProduct />}

    </>
  )
}

export default CategoryProduct