import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Task = ({ todos, setTodos }) => {
  let [color, setColor] = useState("bg-gray-300");

  function handleAcceptance() {
    color === "bg-gray-300" ? setColor("bg-blue-500") : setColor("bg-gray-300");
  }

  return (
    <div className="container ">
      {todos.map((todo) => {
        return (
          <div className="container flex bg-gray-50 border-b-2">
            <div>
              <button
                className={`rounded-full ${color} h-4 w-4 mt-6 ml-4`}
                onClick={handleAcceptance}
              ></button>
            </div>
            <div className="container">
              <li
                className="container  px-3 py-4 list-none flex flex-col"
                key={todo.id}
              >
                <input
                  type="text"
                  className="outline-none container bg-transparent mb-2 ml-2 text-lg font-sans"
                  value={todo.title}
                  onChange={(event) => event.preventDefault()}
                />
                <input
                  type="text"
                  className="outline-none bg-transparent ml-4 text-sm text-gray-600 font-sans"
                  value={todo.description}
                  onChange={(event) => event.preventDefault()}
                />
                <div className="text-sm mt-2 ml-4 text-gray-600">
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    type="text"
                    className="outline-none bg-transparent ml-2 font-sans"
                    value={todo.person}
                    onChange={(event) => event.preventDefault()}
                  />
                  <span>date:</span>
                  <input
                    type="text"
                    className="outline-none bg-transparent ml-2 font-sans"
                    value={todo.date}
                    onChange={(event) => event.preventDefault()}
                  />
                </div>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;