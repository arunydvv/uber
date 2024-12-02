import React, { useState } from "react";

const UserLogin = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");

  const handleInputChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with:", emailOrPhone);
  };

  return (
    <div className="flex flex-col ">
      <div className="w-full h-16 bg-black">
        <img
          className="h-full w-auto pl-10"
          src="https://th.bing.com/th/id/OIP.QdmLOWrxHmQbB9vS4aDTowHaE8?w=600&h=400&rs=1&pid=ImgDetMain"
          alt="Uber Image"
        />
        <h1 className="text-white font-3xl">Uber</h1>
      </div>
      <div className="w-full h-full flex flex-col items-center p-28 border-1 border-black">
        <div className="w-11/12 max-w-md p-6 bg-white  rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 text-start">
            Login to your Account
          </h1>

          <div className="mb-6">
            <label htmlFor="emailOrPhone" className="block text-gray-700">
              Email
            </label>
            <input
              id="emailOrPhone"
              type="text"
              value={emailOrPhone}
              onChange={handleInputChange}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 mb-3 h-12"
              required
            />
            <label htmlFor="emailOrPhone" className="block text-gray-700">
              Password
            </label>
            <input
              id="emailOrPhone"
              type="text"
              value={emailOrPhone}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 h-12"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full h-12 py-2 text-lg bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors duration-300 mb-3"
            >
              Continue
            </button>
          </div>
          <div class="relative flex items-center justify-center  m-3">
            <hr class="w-full border-t border-gray-300 mb-3" />
            <span class="absolute px-4 bg-white text-gray-500">or</span>
          </div>
          <button className="w-full py-2 bg-[#e8e8e8] text-black rounded-lg hover:bg-zinc-300 
          transition-colors duration-300 mb-4 h-12">
            Back to Home
          </button>

          <div className="text-center text-sm text-gray-500">
            By proceeding, you consent to get calls, WhatsApp, or SMS/RCS
            messages, including by automated means, from Uber and its affiliates
            to the number provided.
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
