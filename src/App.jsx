import Companies from "./components/Companies"
import GroupImages from "./components/GroupImages"
import Header from "./components/Header"
import Hero from './components/Hero'
import MensProduct from "./components/MenProduct"
import MobileProduct from "./components/MobileProduct"
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
    </>
  )
}

export default App
