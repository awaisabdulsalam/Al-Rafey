import { useState } from "react";
import { LuPlus } from "react-icons/lu";

const userAddresses = [
  {
    name: "Shah Zaman",
    phone: "(+92) 0309 1354 207",
    address:
      "Punjab,Lahore - Model Town,Block D,Sher Shah Block , Barket Market , Near Skans School of accountancy , Lahore",
  },
  {
    name: "Shah Zaman",
    phone: "(+92) 0309 1354 207",
    address:
      "Punjab,Lahore - Model Town,Block D,Sher Shah Block , Barket Market , Near Skans School of accountancy , Lahore",
  },
];

const AddressSection = () => {

const [showForm, setShowForm] = useState(false);
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [address, setAddress] = useState("");
const [editMode, setEditMode] = useState(false);
const [editIndex, setEditIndex] = useState(null);

const addAdress = () => {
  setShowForm(!showForm);
  setEditMode(false);
  setName("");
  setPhone("");
  setAddress("");
};

const handleNewAddress = (e) => {
  e.preventDefault();
  const newAddress = { name: name, phone: phone, address: address };

  if (editMode) {
    userAddresses[editIndex] = newAddress;
    setEditMode(false); 
  } else {
    userAddresses.push(newAddress);
  }

  setName("");
  setPhone("");
  setAddress("");
  setShowForm(false);
};

const handleEditAddress = (index) => {
  const editbaleAddress = userAddresses[index];
  setName(editbaleAddress.name);
  setPhone(editbaleAddress.phone);
  setAddress(editbaleAddress.address);
  setShowForm(true);
  setEditMode(true)
  setEditIndex(index)
};

return (
  <>
    <div className="h-auto w-full mt-2  px-6 py-10 rounded-lg border-2">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-[16px] md:text-xl  font-semibold my-4 text-[#303030]">
          Address Book
        </h1>
        <div>
          <button
            onClick={addAdress}
            className="flex items-center gap-1 sm:px-[4px] md:px-3 sm:py-[4px] md:py-2 sm:text-[10px] md:text-[14px] rounded-[4px] text-white bg-[#262261]"
          >
            <LuPlus /> New Address
          </button>
        </div>
      </div>
      {showForm && (
        <form action="" onSubmit={handleNewAddress}>
          <label
            htmlFor="name"
            className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="sm:text-[12px] md:text-[16px] my-2 p-2 w-full border border-gray-300 rounded-md"
          />
          <label
            htmlFor="phone"
            className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
          >
            Phone number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="sm:text-[12px] md:text-[16px] my-2 p-2 w-full border border-gray-300 rounded-md"
          />
          <label
            htmlFor="address"
            className="sm:text-[12px] md:text-[16px] font-medium text-[#939393]"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="sm:text-[12px] md:text-[16px] my-2 p-2 w-full border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-[#262261] text-white my-4 px-4 py-2 rounded-md hover:bg-[#262261d3]"
          >
            {editMode ? "Update Address" : "Set Address"}
          </button>
        </form>
      )}
      <hr />
      <div className="mt-2">
        {userAddresses.map((user, index) => (
          <div key={index} className="my-6 w-[100%]">
            <div className="w-full flex justify-between">
              <h1 className="text-[#303030] sm:text-[16px] md:text-2xl font-semibold sm:my-1 md:my-2">
                {user.name}
              </h1>
              <button
                onClick={() => handleEditAddress(index)}
                className="sm:mt-[10px] sm:px-[4px] md:px-[10px] sm:py-[4px] sm:text-[10px] md:text-[14px] px-3 py-1 rounded-[4px] text-[14px] text-[#262261] bg-[#f6f6f6] border-[1px] border-[#262261]"
              >
                Edit Address
              </button>
            </div>
            <p className="sm:text-[10px] md:text-[16px] text-[#939393]">
              {user.phone}
            </p>
            <p className="sm:text-[10px] md:text-[16px] text-[#939393]">
              {user.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  </>
);
};


export default AddressSection;
