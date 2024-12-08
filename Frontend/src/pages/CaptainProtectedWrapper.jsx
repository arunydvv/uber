import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = localStorage.getItem("Captaintoken");
      if (!token || token === "null") {
        navigate("/captain/login");
      }
    } catch (error) {
      console.error("Error parsing token from localStorage:", error);
      navigate("/captain/login");
    }
  }, []);

  return children;
};

export default CaptainProtectedWrapper;
