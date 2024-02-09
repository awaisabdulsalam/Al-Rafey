import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";


const GroupImages = () => {
  return (
    <section className="flex gap-10 my-10 px-10">
      <div
        className="h-40 w-1/3 flex flex-col justify-center px-10"
        style={{ backgroundImage: `url(${group1})` }}
      >
        <h1 className="text-2xl">
          Hanging<br />
          <span className="font-bold">Lights</span>
        </h1>
        <div>
          <button className="border-2 border-grey-800 p-2 my-2 rounded-md text-gray-500">
            View Collections
          </button>
        </div>
      </div>
      <div
        className="h-40 w-1/3 flex flex-col justify-center px-10"
        style={{ backgroundImage: `url(${group2})` }}
      >
        <h1 className="text-2xl">
          Boomrang <br />
          <span className="font-bold">Chair</span>
        </h1>
        <div>
          <button className="border-2 border-grey-800 p-2 my-2 rounded-md text-gray-500">
            View Collections
          </button>
        </div>
      </div>
      <div
        className="h-40 w-1/3 flex flex-col justify-center px-10"
        style={{ backgroundImage: `url(${group3})` }}
      >
        <h1 className="text-2xl">
          Modern <br />
          <span className="font-bold">Chair</span>
        </h1>
        <div>
          <button className="border-2 border-grey-800 p-2 my-2 rounded-md text-gray-500">
            View Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default GroupImages;
