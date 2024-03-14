import Products from "./Products"

const WomenProduct = ({ products, lessProducts }) => {
  return (
    <>
    <Products products={products} lessProducts={lessProducts} heading="Women's Products" textColor="#fff" bgColor="#fff" id="women" color="#333" btnColor="#262261"/>
    </>
  );
};

export default WomenProduct;
