import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [captainData, setCaptainData] = useState("");
 
  const handleHome = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    console.log("Form submitted with:", { email, password });
    console.log(captainData);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full h-16 bg-black">
        <img
          className="h-full w-auto pl-10"
          src="https://th.bing.com/th/id/OIP.QdmLOWrxHmQbB9vS4aDTowHaE8?w=600&h=400&rs=1&pid=ImgDetMain"
          alt="Uber Image"
        />
        <h1 className="text-white font-3xl">Uber</h1>
      </div>
      <div className="w-full h-full flex flex-col items-center p-28 border-1 border-black">
        <div className="w-11/12 max-w-md p-6 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 text-start">
            Login to your Account
          </h1>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                e.target.value = e.target.value.toLowerCase();
                setEmail(e.target.value);
              }}
              placeholder="email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 mb-3 h-12"
              required
            />
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 h-12"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full h-12 py-2 text-lg bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors duration-300 "
            >
              Continue
            </button>
          </div>
          <div className="relative flex items-center justify-center m-2">
            <hr className="w-full border-t border-gray-300 mb-3" />
            <span className="absolute px-4 bg-white text-gray-500">or</span>
          </div>

          <button
            onClick={handleHome}
            className="w-full h-12 py-2 text-lg bg-[#e8e8e8] text-black rounded-lg hover:bg-zinc-200 transition-colors duration-300 mb-4"
          >
            Back to Home
          </button>

          <div className="text-center text-xs text-gray-500">
            By proceeding, you consent to receive email communications,
            including by automated means, from Uber and its affiliates to the
            email provided.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
