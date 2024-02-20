import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MobilePhones from "./components/MobilePhones";
import UserProfile from "./components/UserProfile";



import { createContext, useState } from "react"
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
          <Route path="/profile/*" element={<UserProfile />} />
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
