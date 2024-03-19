import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handelEmail = (e) => {
    e.preventDefault();
    setEmail("")
  }
  return (
    <section className="flex justify-center">
      <div className="sm:flex-col md:flex md:flex-row sm:gap-[5px] sm:w-full sm:rounded-[4px] md:flex-row md:justify-between relative md:bottom-[-40px] sm:py-3 md:py-5 sm:px-5 md:px-10 sm:my-4 md:my-10 text-white bg-[#262261] md:w-[80%] md:rounded-2xl">
        <div>
          <h1 className="call_heading font-semibold sm:text-[16px] md:text-2xl">SUBSCRIBE TO GET UPDATED</h1>
          <p className="call_text sm:my-2 md:my-2 sm:text-[12px] md:text-[16px]">
            Lorem ipsum dolor sit adipisicing adipisicing elit. Quis, similique?
          </p>
        </div>
        <div className="call_enter_email flex items-center gap-2">
          <input
            type="email"
            placeholder="Enter you email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="call_input p-2 rounded-[8px] bg-[#262261] border-[1px] border-white text-white placeholder-white"
          />
          <button onClick={handelEmail} className="call_btn p-2 font-normal rounded-[8px] bg-white text-[#262261]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
