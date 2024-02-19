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
    <Products products={products} heading="Home Appliances" bgColor="#fff" color="" />
    </>
  )
}

export default HomeAppliances