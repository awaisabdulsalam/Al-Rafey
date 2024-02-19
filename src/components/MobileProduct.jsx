import mobile from "../assets/mobile.jpg";
import Products from "./Products";

const products = [
  { image: mobile, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: mobile, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: mobile, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: mobile, name: "T-Shirt", price: "$222", reviews: 234 },
  { image: mobile, name: "T-Shirt", price: "$222", reviews: 234 }
]

const MobileProduct = () => {
  return (
    <>
    <Products products={products} heading="Mobile Products" bgColor="#262261" color="#fff" />
    </>
  );
};

export default MobileProduct;
