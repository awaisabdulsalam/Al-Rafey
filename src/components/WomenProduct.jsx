import Products from "./Products"
import women from "../assets/women.jpg";


  const WomenProduct = ({ products }) => {
  return (
    <>
    <Products products={products} heading="Women's Products" bgColor="#fff" id="women" color="#333" btnColor="#262261"/>
    </>
  );
};

export default WomenProduct;
