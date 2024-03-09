import mobileImage from "../assets/mobile.png";

const Favourites = ({ setFavourite, favouriteArray, setFavouriteArray }) => {

  const hanldeRemoveFavourite = (index) => {
    const updatedFavouriteArray = [...favouriteArray];
    
    updatedFavouriteArray.splice(index, 1);

    setFavouriteArray(updatedFavouriteArray);
  }
  setFavourite(prev => prev = favouriteArray.length)


  return (
    <>
<section className="md:my-10 md:mx-10 md:px-5 sm:px-4">
  <h1 className="font-semibold sm:px-2 my-5 sm:text-[18px] text-[#333] md:text-3xl">Favourites</h1>
    <div className="rounded-lg bg-[#fff]  sm:px-2 md:px-8  overflow-hidden mb-5"
    style={{
      boxShadow:
        "0 8px 12px rgba(0, 10, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    }}
    >
      <div className="rounded-lg flex justify-between items-center sm:px-1 md:px-4 py-3  sm:my-8 bg-[#f6f9f8]">
        <h1 className="text-[#a8a8a8] text-base sm:text-[12px] md:text-[18px]">Product</h1>
        <h1 className="text-[#a8a8a8] text-base sm:text-[12px] md:text-[18px]">Amount</h1>
        <h1 className="text-[#a8a8a8] text-base sm:text-[12px] md:text-[18px]">Action</h1>
      </div>
      {
        favouriteArray.map((favourite, index) => (

      <div key={index} className="rounded-lg flex justify-between items-center sm:px-0 md:px-4 sm:my-1 md:my-3 py-3">
        <div className="flex items-center">
          <img src={mobileImage} alt="" className="sm:h-8 md:h-12 sm:w-8 md:w-12 object-cover" />
          <p className="text-[#a8a8a8] sm:text-[10px] md:text-[15px] text-base ml-2">{favourite.name}</p>
        </div>
        <div className="flex justify-start sm:mr-24 md:mr-46 sm:flex sm:justify-start sm:pl-4">
          <h1 className="text-[#a8a8a8] text-base sm:text-[10px] md:text-[15px]">{`$${favourite.price}`}</h1>
        </div>
        <div className="">
          <button onClick={() => hanldeRemoveFavourite(index)} className="text-[#bcbcbc] text-base sm:text-[10px] md:text-[15px]">Remove</button>
        </div>
      </div>
         ) )
      }
      
      <hr className="border-t" />
    </div>

  </section>

    </>
  )
}

export default Favourites