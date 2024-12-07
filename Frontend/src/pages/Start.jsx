import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Welcome to UberClone
        </h1>

        <div className="space-y-4">
          <button
            onClick={() => handleNavigation("/user/login")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login as User
          </button>

          <button
            onClick={() => handleNavigation("/user/register")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register User
          </button>

          <button
            onClick={() => handleNavigation("/captain/login")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login as Captain
          </button>

          <button
            onClick={() => handleNavigation("/captain/register")}
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register as Captain
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
