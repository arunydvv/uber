import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";

const CaptainSignup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the captainData structure aligns with the Zod schema
    const captainData = {
      fullname: {
        firstname: firstname.trim(),
        lastname: lastname.trim(),
      },
      email: email.toLowerCase(),
      password: password,
      status: "active",
      vehicle: { 
        color: vehicleColor.trim(),
        plate: vehiclePlate.trim(),
        capacity: Number(vehicleCapacity), // Ensure it's a number
        vehicleType: vehicleType.toLowerCase(), // Ensure lowercase enum value
      },
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captain/register`,
        captainData
      );
      if (response.status === 200) {
        setCaptain(response.data.user);
        localStorage.setItem("token", response.data.token);
        navigate("/captain/home");
      }
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        if (statusCode === 409) {
          alert(
            "User already exists with this email. Redirecting to Login Page"
          );
          navigate("/user/login");
        } else {
          alert("An unexpected error occurred.");
        }
      } else {
        alert("No response from server. Please try again later.");
      }
    }
    console.log("Form submitted with:", captainData);
  };

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="w-full h-16 bg-black flex items-center">
        <h1 className="text-white pl-4 text-xl sm:text-3xl font-semibold ml-4">
          Uber
        </h1>
      </div>

      <div className="w-full h-full flex flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-md bg-white p-6 rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 text-start">
            Create Account
          </h1>

          {/* Firstname & Lastname */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full md:w-1/2">
              <label htmlFor="firstname" className="block text-gray-700 mb-2">
                Firstname
              </label>
              <input
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
                required
              />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label htmlFor="lastname" className="block text-gray-700 mb-2">
                Lastname
              </label>
              <input
                id="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Smith"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              placeholder="email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
              required
            />
          </div>

          {/* Vehicle Capacity & Color */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-4">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="vehicle-capacity"
                className="block text-gray-700 mb-2"
              >
                Vehicle Capacity
              </label>
              <input
                id="vehicle-capacity"
                type="number"
                min="1"
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
                required
              />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label
                htmlFor="vehicle-color"
                className="block text-gray-700 mb-2"
              >
                Vehicle Color
              </label>
              <input
                id="vehicle-color"
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
                required
              />
            </div>
          </div>

          {/* Vehicle Plate & Type */}
          <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
            <div className="w-full md:w-1/2">
              <label
                htmlFor="vehicle-plate"
                className="block text-gray-700 mb-2"
              >
                Vehicle Plate
              </label>
              <input
                id="vehicle-plate"
                type="text"
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
                required
              />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label
                htmlFor="vehicle-type"
                className="block text-gray-700 mb-2"
              >
                Vehicle Type
              </label>
              <select
                id="vehicle-type"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg h-12"
                required
              >
                <option value="" disabled>
                  Select type
                </option>
                <option value="car">Car</option>
                <option value="bike">Bike</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-black text-white py-2 rounded-lg h-12"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
