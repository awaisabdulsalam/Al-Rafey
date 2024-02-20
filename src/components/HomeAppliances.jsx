import Products from "./Products"
import women from "../assets/women.jpg";

const products = [
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 }
  ]

const HomeAppliances = () => {
  return (
    <>
    <Products products={products} heading="Home Appliances" color="#333" btnColor="#262261" />
    </>
  )
}

export default HomeAppliances