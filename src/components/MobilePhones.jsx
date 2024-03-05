import Products from "./Products";
import phone from "../assets/phone.png";

// const products = [
//   { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
//   { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
//   { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
//   { image: phone, name: "T-Shirt", price: "$222", reviews: 234 },
//   { image: phone, name: "T-Shirt", price: "$222", reviews: 234 }
// ]

const MobilePhones = ({ products }) => {
  return (
    <>
    <Products products={products} heading="Mobile Phones" bgColor="#fff" id="tech" color="#333" btnColor="#262261" />
    </>
  )
}

export default MobilePhones