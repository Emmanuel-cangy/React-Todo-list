import React from "react";

const NavExtended = ({ onShow }) => {
  return (
    <div className="flex justify-between container mx-5 border-b-2 bg-gray-100">
      <div className="flex justify-start mx-3 mt-4">
        <h1 className="pl-3 px-2 pb-2 mr-8 hover:border-b-2 border-blue-300">
          Notification
        </h1>
        <h1 className="pb-2 px-2 border-b-2 border-blue-300">ToDo</h1>
      </div>
      <button
        className="bg-gray-400 mx-3 mt-4 mb-2 p-1 text-sm rounded-md"
        onClick={onShow}
      >
        Add a Task
      </button>
    </div>
  );
};

export default NavExtended;
