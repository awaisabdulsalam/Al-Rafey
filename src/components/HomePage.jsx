import Hero from './Hero'
import MobileProduct from "./MobileProduct"
import RestCusion from "./RestCusion"
import SportsProduct from "./SportsProduct"
import WomenProduct from "./WomenProduct"
import HomeAppliances from "./HomeAppliances"
import MensProduct from "./MenProduct"
import GroupImages from "./GroupImages"
import Companies from "./Companies"


const HomePage = () => {
  return (
    <>
    <Hero  />
    <Companies />
    <SportsProduct />
    <MensProduct />
    <WomenProduct />
    <MobileProduct />
    <GroupImages />
    <HomeAppliances />
    <RestCusion />
    </>
  )
}

export default HomePage