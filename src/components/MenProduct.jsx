import Products from "./Products"
import men from "../assets/men.jpg";

const MensProduct = ({ products }) => {
  return (
    <>
    <Products products={products} heading="Men's Products" bgColor="#fff" id="men" color="#333" btnColor="#262261" />
    </>
  );
};

export default MensProduct;
