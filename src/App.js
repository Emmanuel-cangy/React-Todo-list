import React, { useState } from "react";
import NavBar from "./components/Navbar";
import "./App.css";
import NavExtended from "./components/navextend";
import Task from "./components/task";
import Form from "./components/form";

const App = () => {
  // Form Data parsed from Form to Task
  const [inputMain, setInputMain] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputPerson, setInputPerson] = useState("");
  const [todos, setTodos] = useState([]);

  // show the Form and Hide it on submit
  const [show, setShow] = useState("hide");
  const [showContainer, setShowContainer] = useState("");

  const handleShow = () => {
    show === "" ? setShow("hide") : setShow("");
    showContainer === ""
      ? setShowContainer("showContainer")
      : setShowContainer("");
  };

  return (
    <div className=" flex flex-col justify-center items-center mt-16">
      <NavBar />
      <NavExtended onShow={handleShow} />

      <Task todos={todos} setTodos={setTodos} />

      <div className={`container ${show}`} id={`${showContainer}`}>
        <Form
          onShow={handleShow}
          setShow={setShow}
          inputMain={inputMain}
          setInputMain={setInputMain}
          inputDesc={inputDesc}
          setInputDesc={setInputDesc}
          inputPerson={inputPerson}
          setInputPerson={setInputPerson}
          inputDate={inputDate}
          setInputDate={setInputDate}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default App;
