import Products from "./Products";

const MobilePhones = ({ products }) => {
  return (
    <>
    <Products products={products} heading="Mobile Phones" bgColor="#fff" id="tech" color="#333" btnColor="#262261" />
    </>
  )
}

export default MobilePhones