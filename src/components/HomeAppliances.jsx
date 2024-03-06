import Products from "./Products"
import women from "../assets/women.jpg";



const HomeAppliances = ({ products }) => {
  return (
    <>
    <Products products={products} heading="Home Appliances" color="#333" btnColor="#262261" />
    </>
  )
}

export default HomeAppliances