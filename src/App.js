import React, { useState } from "react";

// Import Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
// Import Stylesheet
import "./index.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const getUserInput = (input) => {
    setTodoList((prevList) => {
      return [input, ...prevList]
    });
  };

  return (
    <div className="bg-slate-800 h-screen">
      <h1 className="text-slate-300 text-6xl text-center font-bold pt-10">Todo List</h1>
      <Form onSubmit={getUserInput} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
