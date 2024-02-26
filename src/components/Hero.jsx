import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import heroImage1 from "../assets/heroImage1.png";
import heroImage2 from "../assets/heroImage2.png";
import heroImage3 from "../assets/heroImage3.png";


import vector1 from "../assets/vector1.png";
import vectorGray1 from "../assets/vectorGray1.png"
import groupImage from "../assets/groupImage.png"

import vectorYellow1 from "../assets/vectorYellow1.png"



const heros = [
  {
    id: 1,
    image: heroImage1,
    vector: vector1,
    heading: "Flat Sale 50% off",
    text: "All Executive in Rafey Traders",
    color: "#fff",
    bgColor: "#00d1bf",
    btnColor: "#E5F43E"
  },
  {
    id: 2,
    bgImage: vectorYellow1,
    image: heroImage2,
    heading: "Flat Sale 50% off",
    text: "All Executive in Rafey Traders",
    color: "#333",
    bgColor: "#8e880f",
    btnColor: "#fff500"
  },
  
  {
    id: 3,
    image: heroImage3,
    vector: vectorGray1,
    heading: "Flat Sale 50% off",
    text: "All Executive in Rafey Traders",
    color: "#333",
    bgColor: "#ddd6ce",
    btnColor: "#ddd6ce",
    right: "right",
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
                backgroundImage: `url(${heros[indexHero].bgImage})`,
                backgroundColor: heros[indexHero].bgColor
              }}
               className={`hero_section w-full flex justify-between h-[80vh] m-5 px-20 rounded-lg overflow-hidden`}>

          <div className="flex flex-col justify-center">
            <h1 className={`hero_heading md:text-6xl text-[${heros[indexHero].color}] my-5 font-bold`}>
              {heros[indexHero].heading}
            </h1>
            <p className={`hero_text md:text-2xl text-[${heros[indexHero].color}] my-2 font-semibold`}>
              {heros[indexHero].text}
            </p>
            <div>
              <button style={{ backgroundColor: heros[indexHero].btnColor }} className={`hero_btn hover:bg-[#eff886] hover:border-[#eff886] border-2 border-white px-8 py-3 my-1 rounded-lg text-xl`}>
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <img
              src={heros[indexHero].image}
              className="bg-contain bg-no-repeat bg-right h-[600px]"
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
