import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CallToAction from "./components/CallToAction";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import Checkout from "./components/Checkout";
import Favourites from "./components/Favourites";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MobilePhones from "./components/MobilePhones";
import Purchase from "./components/Purchase";
import Order from "./components/Order";
import UserProfile from "./components/UserProfile";
import Products from "./components/Products";
import MenChProducts from "./components/MenProduct";
import Context from "./components/Context";
import WomenProduct from "./components/WomenProduct";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <HomePage /> */}
        {/* <Context /> */}
        {/* <Products /> */}
        {/* <MensProduct /> */}
        {/* <WomenProduct /> */}
        {/* <UserProfile /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        {/* <Order /> */}
        {/* <Purchase /> */}
        {/* <Favourites /> */}
        {/* <Checkout /> */}
        {/* <Categories /> */}
        {/* <Cart /> */}
        <MobilePhones />
        <CallToAction />
        <Footer />
      </Router>
    </>
  );
}

export default App;
