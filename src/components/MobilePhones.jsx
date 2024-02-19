import Products from "./Products";
import phone from "../assets/phone.png";

const products = [
  { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: phone, name: "T-Shirt", price: "$222", reviews: 234 }
]

const MobilePhones = () => {
  return (
    <>
    <Products products={products} heading="Mobile Phones" bgColor="#fff" color="" id="tech" />
    </>
  )
}

export default MobilePhones