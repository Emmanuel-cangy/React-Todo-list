import React from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({
  onShow,
  setShow,
  inputMain,
  setInputMain,
  inputDesc,
  setInputDesc,
  inputPerson,
  setInputPerson,
  inputDate,
  setInputDate,
  todos,
  setTodos,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidV4(),
        title: inputMain,
        description: inputDesc,
        person: inputPerson,
        date: inputDate,
        completed: false,
      },
    ]);
    setInputMain("");
    setInputDesc("");
    setInputPerson("");
    setInputDate("");
    setShow("hidden");
  };

  const onInputChangeMain = (event) => {
    setInputMain(event.target.value);
  };

  const onInputChangeDesc = (event) => {
    setInputDesc(event.target.value);
  };

  const onInputChangePerson = (event) => {
    setInputPerson(event.target.value);
  };
  const onInputChangeDate = (event) => {
    setInputDate(event.target.value);
  };
  return (
    <div className="container mt-4 bg-gray-700 rounded-md">
      <form onSubmit={handleSubmit} className="pt-4 pb-4 px-2" onClick={onShow}>
        <input
          className="outline-none mb-4 container bg-transparent px-2 py-1 truncate"
          name="mainTask"
          type="text"
          placeholder="Task Name"
          value={inputMain}
          required
          onChange={onInputChangeMain}
        />
        <br />
        <input
          className="outline-none mb-4 container bg-transparent px-2 py-1"
          name="description"
          type="text"
          placeholder="Description"
          value={inputDesc}
          required
          onChange={onInputChangeDesc}
        />
        <div className="flex justify-between mb-3 mx-2">
          <div className="flex">
            <input
              className="outline-none mr-2 bg-transparent"
              name="date"
              type="date"
              placeholder="Date"
              value={inputDate}
              onChange={onInputChangeDate}
            />
            <input
              className="outline-none bg-transparent px-2 py-1"
              name="assingTo"
              type="text"
              placeholder="Assign To"
              value={inputPerson}
              onChange={onInputChangePerson}
            />
          </div>
          <div className="flex gap-4">
            <button
              onClick={onShow}
              className="bg-gray-500 px-4 py-1 rounded-md"
            >
              Cancel
            </button>
            <button
              className="submitButton bg-blue-300 px-4 py-1 rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;