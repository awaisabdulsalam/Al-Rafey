import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';


const Navbar = ({ totalPrice, products }) => {
  return (
    <>
    <Navbar1 />
    <Navbar2 totalPrice={totalPrice} products={products} />
    <Navbar3 />
    </>
  );
};

export default Navbar;
