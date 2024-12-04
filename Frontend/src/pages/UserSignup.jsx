import React, { useState } from "react";

const UserSignup = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      password: password,
    };
    setCaptainData(formData);
    console.log("Form submitted with:", formData);
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
        <div className="w-11/12 max-w-md p-3 bg-white rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 text-start">
            User Account
          </h1>

          <div className="mb-6">
            <label htmlFor="firstname" className="block text-gray-700">
              Firstname
            </label>
            <input
              id="firstname"
              type="text"
              value={firstname}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              placeholder="Chris"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 mb-3 h-12"
              required
            />
            <label htmlFor="lastname" className="block text-gray-700">
              Lastname
            </label>
            <input
              id="lastname"
              type="text"
              value={lastname}
              onChange={(e) => {
                setlastname(e.target.value); // Correct setter
              }}
              placeholder="Taylor"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 mb-3 h-12"
              required
            />
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.toLowerCase());
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
              placeholder="********"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1 h-12"
              required
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full h-12 py-2 text-lg bg-black text-white rounded-lg hover:bg-zinc-800 transition-colors duration-300"
            >
              Continue
            </button>
          </div>

          <div className="text-center text-xs text-gray-500">
            Already have an Account?
            <br />
            <a
              href="/captain/login"
              className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
              Login here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
