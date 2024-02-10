const CallToAction = () => {
  return (
    <section className="flex justify-center">
      <div className="flex justify-between relative bottom-[-40px] py-5 px-10 my-10 text-white bg-[#262261] w-[80%] rounded-2xl">
        <div>
          <h1 className="font-semibold text-2xl">SUBSCRIBE TO GET UPDATED</h1>
          <p>
            Lorem ipsum dolor sit adipisicing adipisicing elit. Quis, similique?
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter you email"
            className="p-3 rounded-lg bg-[#262261] border-2 border-white text-white placeholder-white"
            
          />
          <button className="p-3 font-medium rounded-lg bg-white text-[#262261]">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
