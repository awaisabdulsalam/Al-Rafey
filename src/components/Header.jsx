import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';


const Navbar = ({ totalPrice, products, lessProducts, addToCart }) => {
  return (
    <>
    <Navbar1 />
    <Navbar2 totalPrice={totalPrice} products={products} lessProducts={lessProducts} />
    <Navbar3 />
    </>
  );
};

export default Navbar;
