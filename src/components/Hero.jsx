import heroImage from "../assets/heroimage.png";
// import rectangleImage from "../assets/rectangle.png"
// import ellipseImage from "../assets/ellipse.png"
import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"


const Hero = () => {
  return (
    <>
      <section>
        <div className="flex justify-between h-[80vh] bg-[#00D1BF] m-5 px-20 rounded-lg overflow-hidden">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl text-white my-5 font-bold">
              Flat Sale 50% off
            </h1>
            <p className="text-2xl text-white my-2 font-semibold">
              All Executive in Rafey Traders
            </p>
            <div>
              <button className="bg-[#E5F43E] border-2 border-white px-8 py-3 my-1 rounded-lg text-lg">
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <img
              src={heroImage}
              className="bg-contain bg-no-repeat bg-center h-[600px]"
              style={{
                backgroundImage:
                  `url(${vector1}), url(${vector1})`,
              }}
              alt=""
            />
          </div>
        </div>
        {/* <div className="flex mt-[-10] justify-center">
                <img src={rectangleImage} alt="" srcset="" className="h-5" />
                <img src={ellipseImage} alt="" srcset="" />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
