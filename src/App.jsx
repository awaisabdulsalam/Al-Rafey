import CallToAction from "./components/CallToAction"
import Companies from "./components/Companies"
import Footer from "./components/Footer"
import GroupImages from "./components/GroupImages"
import Header from "./components/Header"
import Hero from './components/Hero'
import HomeAppliances from "./components/HomeAppliances"
import MensProduct from "./components/MenProduct"
import MobilePhones from "./components/MobilePhones"
import MobileProduct from "./components/MobileProduct"
import RestCusion from "./components/RestCusion"
import SportsProduct from "./components/SportsProduct"
import WomenProduct from "./components/WomenProduct"
function App() {

  return (
    <>
    <Header />
    <Hero  />
    <Companies />
    <SportsProduct />
    <MensProduct />
    <WomenProduct />
    <MobileProduct />
    <GroupImages />
    <HomeAppliances />
    <RestCusion />
    <MobilePhones />
    <CallToAction />
    <Footer />
    </>
  )
}

export default App
