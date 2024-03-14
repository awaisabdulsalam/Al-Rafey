// import Hero from './Hero'
// import MobileProduct from "./MobileProduct"
// import RestCusion from "./RestCusion"
// import SportsProduct from "./SportsProduct"
// import WomenProduct from "./WomenProduct"
// import HomeAppliances from "./HomeAppliances"
// import MenProduct from "./MenProduct"
// import GroupImages from "./GroupImages"
// import Companies from "./Companies"


// const HomePage = ({ products }) => {
//   return (
//     <>
//     <Hero  />
//     <Companies />
//     <SportsProduct />
//     <MenProduct products={products} />
//     <WomenProduct products={products} />
//     <MobileProduct products={products} />
//     <GroupImages />
//     <HomeAppliances products={products} />
//     <RestCusion />
//     </>
//   )
// }

// export default HomePage


// ********************************************************

import Hero from './Hero'
import MobileProduct from "./MobileProduct"
import RestCusion from "./RestCusion"
import SportsProduct from "./SportsProduct"
import WomenProduct from "./WomenProduct"
import HomeAppliances from "./HomeAppliances"
import MenProduct from "./MenProduct"
import GroupImages from "./GroupImages"
import Companies from "./Companies"


const HomePage = ({ products, lessProducts }) => {
  return (
    <>
    <Hero  />
    <Companies />
    <SportsProduct />
    <MenProduct products={products} lessProducts={lessProducts} />
    <WomenProduct products={products} lessProducts={lessProducts} />
    <MobileProduct products={products}  lessProducts={lessProducts} />
    <GroupImages />
    <HomeAppliances products={products} lessProducts={lessProducts} />
    <RestCusion />
    </>
  )
}

export default HomePage