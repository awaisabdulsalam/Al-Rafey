import Products from "./Products";


const MobileProduct = ({ products }) => {
  return (
    <>
    <Products products={products} heading="Mobile Products" bgColor="#262261" color="#fff" btnColor="#262261"  />
    </>
  );
};

export default MobileProduct;
