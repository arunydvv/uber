import React, { useState } from "react";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Requesting ride from ${pickup} to ${dropoff}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-xl font-semibold">UberClone</h1>
        <button className="bg-none border-none text-white text-2xl cursor-pointer">
          ☰
        </button>
      </header>

      <main className="flex-1 p-4 flex flex-col items-center">
        <div className="w-full h-48 bg-gray-300 flex justify-center items-center mb-4">
          <p>Map Placeholder</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full p-2 text-lg border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Enter drop-off location"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            className="w-full p-2 text-lg border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full p-3 text-lg bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Request Ride
          </button>
        </form>
      </main>

      <footer className="flex justify-around p-4 bg-black text-white">
        <button className="bg-none border-none text-white text-lg cursor-pointer">
          Home
        </button>
        <button className="bg-none border-none text-white text-lg cursor-pointer">
          Activity
        </button>
        <button className="bg-none border-none text-white text-lg cursor-pointer">
          Account
        </button>
      </footer>
    </div>
  );
};

export default Home;
