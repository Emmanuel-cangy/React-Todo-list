import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Task = ({ todos, setTodos }) => {
  const handleAcceptance = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed, color: !item.color };
        }
        return item;
      })
    );
  };

  return (
    <div className="container ">
      {todos.map((todo) => {
        return (
          <div className="container flex task-background-color border-b-2 border-gray-500">
            <div>
              <button
                key={todo.id}
                className={`rounded-full ${
                  todo.completed ? "color" : ""
                } bg-gray-400 h-4 w-4 mt-6 ml-4`}
                onClick={() => handleAcceptance(todo)}
              ></button>
            </div>
            <div className="container">
              <li
                className="container  px-3 py-4 list-none flex flex-col"
                key={todo.id}
              >
                <input
                  type="text"
                  className={`${
                    todo.completed ? "complete" : ""
                  } outline-none container text-gray-50 bg-transparent mb-2 ml-2 text-lg font-sans`}
                  value={todo.title}
                  onChange={(event) => event.preventDefault()}
                />
                <input
                  type="text"
                  className={`${
                    todo.completed ? "complete" : ""
                  } outline-none bg-transparent ml-4 text-sm text-gray-300 font-sans`}
                  value={todo.description}
                  onChange={(event) => event.preventDefault()}
                />
                <div className="text-sm mt-2 ml-4 text-gray-300">
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
                    className={`${
                      todo.completed ? "complete" : ""
                    } outline-none bg-transparent ml-2 font-sans`}
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
