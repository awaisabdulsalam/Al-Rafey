import heroImage from "../assets/heroimage.png"
import rectangleImage from "../assets/rectangle.png"
import ellipseImage from "../assets/ellipse.png"


const Hero = () => {
  return (
    <>
    <section>
        <div className="flex justify-between h-[80vh] bg-[#00D1BF] m-5 px-20 rounded-lg overflow-hidden">
            <div className="flex flex-col justify-center">
                <h1 className="text-6xl text-white my-5 font-bold">Flat Sale 50% off</h1>
                <p className="text-2xl text-white my-2 font-semibold">All Executive in Rafey Traders</p>
                <div>
                <button className="bg-[#E5F43E] border-2 border-white px-8 py-3 my-1 rounded-lg text-lg">Shop Now</button>
                </div>
            </div>
            <div >
                <img src={heroImage} className="bg-contain bg-no-repeat bg-center h-[600px]" style={{ backgroundImage: "url('/src/assets/vector1.png'), url('/src/assets/vector2.png')" }} alt="" srcset="" />
            </div>
        </div>
        <div className="flex mt-[-10] justify-center">
            {/* <div className="border-2 border-red-900"> */}
                <img src={rectangleImage} alt="" srcset="" className="h-5" />
                <img src={ellipseImage} alt="" srcset="" />
            {/* </div> */}
        </div>
    </section>
    </>
  )
}

export default Hero