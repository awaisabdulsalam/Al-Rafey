import Products from "./Products"

  const WomenProduct = ({ products }) => {
  return (
    <>
    <Products products={products} heading="Women's Products" bgColor="#fff" id="women" color="#333" btnColor="#262261"/>
    </>
  );
};

export default WomenProduct;
