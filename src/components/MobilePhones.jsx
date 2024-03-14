import Products from "./Products";

const MobilePhones = ({ products, lessProducts }) => {
  return (
    <>
    <Products products={products} lessProducts={lessProducts} heading="Mobile Phones" textColor="#fff" bgColor="#fff" id="tech" color="#333" btnColor="#262261" />
    </>
  )
}

export default MobilePhones