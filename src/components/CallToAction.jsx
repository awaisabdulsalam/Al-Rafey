import { useState } from "react";

const CallToAction = () => {
  const [email, setEmail] = useState("");

  const handelEmail = (e) => {
    e.preventDefault();
    setEmail("")
  }
  return (
    <section className="flex justify-center">
      <div className="call_to_action flex justify-between relative bottom-[-40px] py-5 px-10 my-10 text-white bg-[#262261] w-[80%] rounded-2xl">
        <div>
          <h1 className="call_heading font-semibold text-2xl">SUBSCRIBE TO GET UPDATED</h1>
          <p className="call_text">
            Lorem ipsum dolor sit adipisicing adipisicing elit. Quis, similique?
          </p>
        </div>
        <div className="call_enter_email flex items-center gap-2">
          <input
            type="email"
            placeholder="Enter you email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="call_input p-3 rounded-lg bg-[#262261] border-2 border-white text-white placeholder-white"
          />
          <button onClick={handelEmail} className="call_btn p-3 font-medium rounded-lg bg-white text-[#262261]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
