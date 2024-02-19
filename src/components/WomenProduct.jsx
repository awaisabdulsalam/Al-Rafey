import Products from "./Products"
import women from "../assets/women.jpg";

const products = [
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 },
    { image: women, name: "T-Shirt", price: "$222", reviews: 234 }
  ]

  const WomenProduct = () => {
  return (
    <>
    <Products products={products} heading="Women's Products" bgColor="#fff" color="" id="women" />
    </>
  );
};

export default WomenProduct;
