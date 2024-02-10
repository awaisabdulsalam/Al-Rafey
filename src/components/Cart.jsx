import { TbHeart } from "react-icons/tb";
import { MdOutlineShare } from "react-icons/md";
import shirt1 from "../assets/shirt1.png";
import shirt2 from "../assets/shirt2.png";

const Cart = () => {
  return (
    <section className="flex gap-10 my-10 px-10">
      <section className="w-1/2">
        <div>
          <img src={shirt1} alt="" />
        </div>
        <div className="flex gap-2 my-5">
          <img src={shirt2} alt="" />
          <img src={shirt2} alt="" />
          <img src={shirt2} alt="" />
          <img src={shirt2} alt="" />
        </div>
      </section>
      <section className="w-1/2">
        <p className="text-gray-500">{`Home > Fun > Sideboard`}</p>
        <div className="flex align-middle justify-between py-5">
            <div className="w-full">
              <h1 className="text-3xl">Embrace Sideboard</h1>
              <p className="text-xl text-gray-400">Teixeira Design Studio</p>
            </div>
            <div>
            <div className="w-full flex gap-5 justify-center">
              <div className="flex px-2 py-2 bg-[#ffe3ba3a] rounded-lg">
                <TbHeart className="text-2xl text-[#faaf40]" />
                <span className="text-[#faaf40] font-semibold">109</span>
              </div>
              <div className="bg-[#c5c3ff64] rounded-lg px-2 py-2">
                <MdOutlineShare className="text-2xl" />
              </div>
          </div>
            </div>
        </div>
      </section>
    </section>
  );
};

export default Cart;
