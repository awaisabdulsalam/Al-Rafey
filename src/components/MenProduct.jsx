import Products from "./Products"
import men from "../assets/men.jpg";

const products = [
    { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: men, name: "T-Shirt", price: "$222", reviews: 234 },
  ]
const MensProduct = () => {
  return (
    <>
    <Products products={products} heading="Men's Products" bgColor="#fff" color="" id="men" />
    </>
  );
};

export default MensProduct;
