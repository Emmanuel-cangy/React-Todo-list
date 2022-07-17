import React from "react";

const NavBar = () => {
  return (
    <div className="container flex justify-between items-center rounded-t-xl bg-gray-300 m-0 h-8">
      <div className="flex items-center mx-3">
        <span className="w-3 h-3 mx-1 rounded-full bg-red-600 box-content hover:bg-red-500"></span>
        <span className="w-3 h-3 mx-1 rounded-full bg-yellow-400 box-content hover:bg-yellow-300"></span>
        <span className="w-3 h-3 mx-1 rounded-full bg-green-400 box-content hover:bg-green-300"></span>
      </div>
    </div>
  );
};

export default NavBar;
