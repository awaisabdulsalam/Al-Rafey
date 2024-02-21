import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import heroImage1 from "../assets/heroImage1.png";
import heroImage2 from "../assets/heroImage2.png";
import heroImage3 from "../assets/heroImage3.png";

import vector1 from "../assets/vector1.png";
import vectorGray1 from "../assets/vectorGray1.png"
import vectorGray2 from "../assets/vectorGray2.png"
import groupImage from "../assets/groupImage.png"

import vectorYellow1 from "../assets/vectorYellow1.png"
import vectorYellow2 from "../assets/vectorYellow2.png"



const heros = [
  {
    id: 1,
    image: heroImage2,
    // vector: vectorYellow1,
    bgImage: vectorYellow1,
    heading: "Flat Sale 50% off",
    text: "All Executive in Rafey Traders",
    color: "#333",
    bgColor: "#e2ded3"
  },
  {
    id: 2,
    image: heroImage1,
    vector: vector1,
    heading: "Flat Sale 50% off",
    text: "All Executive in Rafey Traders",
    color: "#fff",
    bgColor: "#00D1BF",
    btnColor: "#E5F43E"
  },
  
  {
    id: 3,
    image: groupImage,
    vector: vectorGray1,
    heading: "Flat Sale 50% off",
    text: "All Executive in Rafey Traders",
    color: "#333",
    bgColor: "#ddd6ce"
  },
];

const Hero = () => {

  const [indexHero, setIndexHero] = useState(0);

  const handleNextHero = () => {
    setIndexHero((prevIndex) =>  (prevIndex + 1) % heros.length);
  }
  const handlePrevHero = () => {
    setIndexHero((prevIndex) => (prevIndex - 1 + heros.length) % heros.length);
  }
  return (
    <>
      <section className="flex">
        <div style={{
          background: "contain",
                backgroundImage: `url(${heros[indexHero].bgImage})`
              }}
               className={`w-full flex justify-between h-[80vh] bg-[${heros[indexHero].bgColor}] m-5 px-20 rounded-lg overflow-hidden`}>

          <div className="flex flex-col justify-center">
            <h1 className={`text-6xl text-[${heros[indexHero].color}] my-5 font-bold`}>
              {heros[indexHero].heading}
            </h1>
            <p className={`text-2xl text-[${heros[indexHero].color}] my-2 font-semibold`}>
              {heros[indexHero].text}
            </p>
            <div>
              <button className={`bg-[${heros[indexHero].btnColor}] hover:bg-[#eff886] hover:border-[#eff886] border-2 border-gray-500 px-8 py-3 my-1 rounded-lg text-xl`}>
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <img
              src={heros[indexHero].image}
              className="bg-contain bg-no-repeat bg-center h-[600px]"
              style={{
                backgroundImage: `url(${heros[indexHero].vector})`,
              }}
              alt=""
              />
          </div>
        </div>
      </section>
          <div className="flex justify-center gap-5">
            <FaArrowLeft className="text-3xl cursor-pointer" onClick={handleNextHero} />
            <FaArrowRight className="text-3xl cursor-pointer"onClick={handlePrevHero} />
          </div>
    </>
  );
};

export default Hero;