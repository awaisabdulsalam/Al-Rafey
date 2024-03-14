import Products from "./Products"
import women from "../assets/women.jpg";



const HomeAppliances = ({ products, lessProducts }) => {
  return (
    <>
    <Products products={products} lessProducts={lessProducts} heading="Home Appliances" color="#333" textColor="#fff" btnColor="#262261" />
    </>
  )
}

export default HomeAppliances