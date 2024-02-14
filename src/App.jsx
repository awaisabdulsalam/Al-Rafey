import CallToAction from "./components/CallToAction"
import Cart from "./components/Cart"
import Categories from "./components/Categories"
import Checkout from "./components/Checkout"
import Favourites from "./components/Favourites"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import MobilePhones from "./components/MobilePhones"
import Purchase from "./components/Purchase"
import Order from "./components/Order"


function App() {

  return (
    <>
    <Header />
    <Order />
    <Purchase />
    <Favourites />
    <Checkout />
    <Categories />
    <Cart />
    <HomePage />
    <MobilePhones />
    <CallToAction />
    <Footer />
    </>
  )
}

export default App
