import { createContext, useState } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MobilePhones from "./components/MobilePhones";
import UserProfile from "./components/UserProfile";
import Cart from "./components/Cart.jsx"
import Categories from "./components/Categories.jsx"
import Purchase from "./components/Purchase.jsx"
import Favourites from "./components/Favourites.jsx";
import Order from "./components/Order.jsx";
import Checkout from "./components/Checkout.jsx";
export const userContext = createContext();

import men from "./assets/men.jpg";

const products = [
  {
    image: men,
    name: "T-Shirt",
    category: "All",
    price: 100,
    reviews: 234,
  },
  {
    image: men,
    name: "Groceries",
    category: "Groceries & Pets",
    price: 20,
    reviews: 234,
  },
  {
    image: men,
    name: "Pharmacy",
    category: "Online Pharmacy",
    price: 80,
    reviews: 234,
  },
  {
    image: men,
    name: "Books",
    category: "Books",
    price: 45,
    reviews: 234,
  },
  {
    image: men,
    name: "Home & Office",
    category: "Home & Office Improvement",
    price: 99,
    reviews: 234,
  }
];


function App() {
  const [addCartNum, setAddCartNum] = useState(0);
  const [favourite, setFavourite] = useState(0);

  return (
    <>
        <userContext.Provider value={[addCartNum, favourite, setAddCartNum, setFavourite]}>
      <Router>
        <Header />
        <Routes>
          <Route path="/al-rafey/" element={<HomePage products={products} />} />
          <Route path="/al-rafey/profile/*" element={<UserProfile />} />
          <Route path="/al-rafey/cart" element={<Cart products={products} />} />
          <Route path="/al-rafey/categories" element={<Categories products={products} />} />
          <Route path="/al-rafey/favourites" element={<Favourites products={products} />} />
          <Route path="/al-rafey/purchase" element={<Purchase products={products} />} />
          <Route path="/al-rafey/order-confirm" element={<Order products={products} />} />
          <Route path="/al-rafey/checkout" element={<Checkout products={products} />} />
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
