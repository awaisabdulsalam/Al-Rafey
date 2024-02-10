import cusion from "../assets/cusion.png"

const RestCusion = () => {
  return (
    <section className="px-20 py-10 my-10">
        <div className="flex justify-between bg-[#f6f6f6] px-10 py-10 rounded-md">
        <div className="flex-col justify-center py-10">
        <h1 className="text-3xl my-2">
        Living Room<br />
          <span className="font-bold">Rest Cusion</span>
        </h1>
        <p className="my-2 font-light">The design of the Rest fabric <br /> began from the use of leftover materials from the Sand upholstery fabric.</p>
        <button className="text-xl my-2 py-2 px-4 rounded-lg border-[2px] border-[#000]">
          Show More
        </button>
        </div>
        <div>
            <img src={cusion} alt="" className="" />
        </div>
        </div>
    </section>
  )
}

export default RestCusion