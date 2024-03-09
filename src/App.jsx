import { createContext, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MobilePhones from "./components/MobilePhones";
import UserProfile from "./components/UserProfile";
import Cart from "./components/Cart.jsx";
import Categories from "./components/Categories.jsx";
import Purchase from "./components/Purchase.jsx";
import Favourites from "./components/Favourites.jsx";
import Order from "./components/Order.jsx";
import Checkout from "./components/Checkout.jsx";
export const userContext = createContext();

import men from "./assets/men.jpg";

const products = [
  {
    id: 0,
    image: men,
    images: [men, men, men, men],
    name: "T-Shirt",
    category: "All",
    price: 100,
    reviews: 84,
    rating: 4.6,
    quantity: 1,
  },
  {
    id: 1,
    image: men,
    images: [men, men, men, men],
    name: "Groceries",
    category: "Groceries & Pets",
    price: 20,
    reviews: 78,
    rating: 4.1,
    quantity: 1,
  },
  {
    id: 2,
    image: men,
    images: [men, men, men, men],
    name: "Pharmacy",
    category: "Online Pharmacy",
    price: 80,
    reviews: 4,
    rating: 4.2,
    quantity: 1,
  },
  {
    id: 3,
    image: men,
    images: [men, men, men, men],
    name: "Books",
    category: "Books",
    price: 45,
    reviews: 94,
    rating: 4.9,
    quantity: 1,
  },
  {
    id: 4,
    image: men,
    images: [men, men, men, men],
    name: "Home & Office",
    category: "Home & Office Improvement",
    price: 99,
    reviews: 34,
    rating: 4.7,
    quantity: 1,
  },
];

function App() {
  const [addCartNum, setAddCartNum] = useState(0);
  const [addToCart, setAddtoCart] = useState([]);
  const [favourite, setFavourite] = useState(0);
  const [favouriteArray, setFavouriteArray] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedProduct, setAddedProduct] = useState([]);
  const [redHeart, setRedHeart] = useState(false);

  console.log(addToCart);
  console.log(addedProduct);

  const handleTotalPrice = (total) => {
    setTotalPrice(total);
    return total;
  };
  useEffect(() => {
    handleTotalPrice();
  }, [addToCart]);


  return (
    <>
      <userContext.Provider
        value={[
          addCartNum,
          favourite,
          setAddCartNum,
          setFavourite,
          setFavouriteArray,
          addToCart,
          setAddtoCart,
          addedProduct,
          setAddedProduct,
          setRedHeart
        ]}
      >
        <Router>
          <Header
            totalPrice={totalPrice}
            addToCart={addToCart}
            handleTotalPrice={handleTotalPrice}
            products={products}
          />
          <Routes>
            <Route
              path="/al-rafey/"
              element={<HomePage products={products} />}
            />
            <Route path="/al-rafey/profile/*" element={<UserProfile />} />
            <Route
              path="/al-rafey/cart"
              element={
                <Cart
                  addToCart={addToCart}
                  addedProduct={addedProduct}
                  products={products}
                  setAddtoCart={setAddtoCart}
                  setAddedProduct={setAddedProduct}
                />
              }
            />
              <Route
                path="/al-rafey/checkout"
                element={
                  <Checkout
                  addedProduct={addedProduct}
                  addToCart={addToCart}
                    setAddedProduct={setAddedProduct}
                    setAddtoCart={setAddtoCart}
                    setAddCartNum={setAddCartNum}
                  />
                }
              />
            <Route
              path="/al-rafey/categories"
              element={<Categories products={products} />}
            />

            <Route
              path="/al-rafey/purchase"
              element={
                <Purchase addToCart={addToCart} addedProduct={addedProduct} setAddtoCart={setAddtoCart} handleTotalPrice={handleTotalPrice} setAddCartNum={setAddCartNum} />
              }
            />
            <Route
              path="/al-rafey/favourites"
              element={
                <Favourites
                  setFavourite={setFavourite}
                  favouriteArray={favouriteArray}
                  setFavouriteArray={setFavouriteArray}
                />
              }
            />
            <Route
              path="/al-rafey/order-confirm"
              element={<Order products={products} />}
            />
          </Routes>
          <MobilePhones products={products} />
          <CallToAction />
          <Footer />
        </Router>
      </userContext.Provider>
    </>
  );
}

export default App;
