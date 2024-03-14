import Products from "./Products"
import men from "../assets/men.jpg";

const MenProduct = ({ products, lessProducts }) => {
  return (
    <>
    <Products products={products} lessProducts={lessProducts} heading="Men's Products" textColor="#fff" bgColor="#fff" id="men" color="#333" btnColor="#262261" />
    </>
  );
};

export default MenProduct;
