import MensProduct from "./MenProduct.jsx"
import WomenProduct from "./WomenProduct.jsx"
import MobileProduct from "./MobileProduct.jsx"

const InputSearchProduct = ({ inputValue }) => {
  return (
    <>
      {inputValue === "men" && <MensProduct />}
      {inputValue === "women" && <WomenProduct />}
      {inputValue === "mobile" && <MobileProduct />}
    </>
  );
};

export default InputSearchProduct;
