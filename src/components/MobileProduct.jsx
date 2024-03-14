import Products from "./Products";


const MobileProduct = ({ products, lessProducts }) => {
  return (
    <>
    <Products products={products} lessProducts={lessProducts} heading="Mobile Products" textColor="#262261" bgColor="#262261" color="#fff" btnColor="#fff"  />
    </>
  );
};

export default MobileProduct;
