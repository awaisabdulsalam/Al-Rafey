// import { useState } from "react";
// import { FaBars, FaPlus, FaMinus } from "react-icons/fa"


// const CartNavbar = () => {
//     console.log(isOpen);

//     const [isOpen, setIsOpen] = useState(false);
//     const products = [
//       { id: 1, name: 'Product 1', quantity: 2 },
//       { id: 2, name: 'Product 2', quantity: 3 },
//       { id: 3, name: 'Product 3', quantity: 1 },
//     ];
  
//     const toggleMenu = () => {
//       setIsOpen(!isOpen);
//     };


//   return (
//     <>
//      <div className="cart_navbar">
//       <div className="navbar-toggle" onClick={toggleMenu}>
//         <FaBars />
//       </div>
//       {isOpen && (
//         <div className="menu">
//           {products.map((product) => (
//             <div key={product.id} className="product-item">
//               <div className="product-info">
//                 {/* You can style product image, name, and quantity */}
//                 <img src={`product_${product.id}.jpg`} alt={product.name} />
//                 <div>
//                   <h4>{product.name}</h4>
//                   <p>Quantity: {product.quantity}</p>
//                 </div>
//               </div>
//               <div className="quantity-controls">
//                 <button>
//                   <FaMinus />
//                 </button>
//                 <button>
//                   <FaPlus />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </>
//   )
// }

// export default CartNavbar