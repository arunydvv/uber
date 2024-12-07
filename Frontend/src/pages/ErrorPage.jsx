import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-2 bg-white text-black text-lg font-semibold rounded-md hover:bg-gray-300 transition-colors"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
