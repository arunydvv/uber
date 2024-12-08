import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <nav className="w-full h-16 bg-black px-[7%] flex items-center justify-between">
          <h1 className="text-white text-3xl p-3 pr-5">Uber</h1>

          <div className="flex justify-between w-full items-center">
            <div className="flex space-x-4">
              <button className="text-white text-sm p-3" aria-label="Menu">
                Menu
              </button>
              <button className="text-white text-sm p-3" aria-label="Account">
                Account
              </button>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                className="text-white px-3 py-2 border-none rounded-md text-sm"
                aria-label="Help"
              >
                Help
              </button>
              <button
                className="text-white px-3 py-2 border-none rounded-md text-sm"
                aria-label="Login"
              >
                Login
              </button>
              <button
                type="submit"
                className=" sm:w-auto py-1 px-3 text-base bg-white text-black rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
              >
                Sign up
              </button>
            </div>
          </div>
        </nav>

        <div className="flex  h-[calc(100vh-64px)]   text-black  p-16">
          <div className="w-2/5 h-full p-10 flex flex-col">
            <h1 className="text-5xl ">Go anywhere with Uber</h1>
            <div className="flex space-x-4 p-4 pl-0 gap-10 mb-10">
              <button className="border  border-red-500">Hello</button>
              <button className="border  border-red-500">Hello</button>
            </div>
            <button className="w-full  flex items-center h-12 py-2 text-lg bg-[#e8e8e8] text-black rounded-lg hover:bg-zinc-200 transition-colors duration-300 mb-4">
              <span className="w-3 h-3 inline-block mr-2 rounded-full bg-black mx-3 "></span>
              Back to Home
            </button>
            <button className="w-full flex items-center h-12 py-2 text-lg bg-[#e8e8e8] text-black rounded-lg hover:bg-zinc-200 transition-colors duration-300 mb-4">
              <span className="w-3 h-3 inline-block mr-2 bg-black mx-3"></span>
              Back to Home
            </button>
            <div className="flex justify-between align-center ">
              <button className="w-[45%] flex items-center h-12 py-2 text-lg bg-[#e8e8e8] text-black rounded-lg hover:bg-zinc-200 transition-colors duration-300 mb-4">
                Back to Home
              </button>
              <button className="w-[45%] flex items-center h-12 py-2 text-lg bg-[#e8e8e8] text-black rounded-lg hover:bg-zinc-200 transition-colors duration-300 mb-4">
                Back to Home
              </button>
            </div>
          </div>
          <div className="w-3/5 h-full  pl-20 pr-16 ">
            <img
              className="h-full rounded-md"
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80022131f5a1"
              alt=""
            />
          </div>
          <div className="absolute top-[83%] left-[89%] transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="flex flex-col items-center bg-[#e8e8e8] p-2 rounded-lg shadow-md space-y-2 w-auto">
              <button className="w-12 h-12 text-xl text-black bg-white rounded-full hover:bg-zinc-200 transition-colors duration-300">
                +
              </button>
              <button className="w-12 h-12 text-xl text-black bg-white rounded-full hover:bg-zinc-200 transition-colors duration-300">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
