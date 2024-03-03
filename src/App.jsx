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




import { createContext, useState } from "react"
import Favourites from "./components/Favourites.jsx";
import Order from "./components/Order.jsx";
import Checkout from "./components/Checkout.jsx";
export const userContext = createContext();


function App() {
  const [addCartNum, setAddCartNum] = useState(0);
  const [favourite, setFavourite] = useState(0);

  return (
    <>
        <userContext.Provider value={[addCartNum, favourite, setAddCartNum, setFavourite]}>
      <Router>
        <Header />
        <Routes>
          <Route path="/al-rafey/" element={<HomePage />} />
          <Route path="/al-rafey/profile/*" element={<UserProfile />} />
          <Route path="/al-rafey/cart" element={<Cart />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/al-rafey/categories" element={<Categories />} />
          <Route path="/al-rafey/favourites" element={<Favourites />} />
          <Route path="/al-rafey/purchase" element={<Purchase />} />
          <Route path="/al-rafey/order-confirm" element={<Order />} />
          <Route path="/al-rafey/checkout" element={<Checkout />} />
        </Routes>
        <MobilePhones />
        <CallToAction />
        <Footer />
      </Router>
        </userContext.Provider>
    </>
  );
}

export default App;
