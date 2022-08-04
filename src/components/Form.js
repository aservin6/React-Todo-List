import { useState } from "react";

const Form = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  // Stores user input into enteredTask variable
  const changeHandler = (e) => {
    setEnteredTask(e.target.value);
  };

  // Passes enteredTask variable into saveTask() and clears enteredTask state
  const clickHandler = (e) => {
    e.preventDefault();
    saveTask(enteredTask);
    setEnteredTask("");
  };

  // Takes enteredTask from clickHandler() and stores into an object with an id
  // Then calls onSubmit prop with the saved object as an input
  const saveTask = (input) => {
    const taskData = {
      task: input,
      id: Math.random() * 1000, // Using Math.random() for id since this is just for practice and testing
      completed: false
    };
    props.onSubmit(taskData);
  };

  return (
    // Form with input onChange and button onClick handlers
    <form className="text-center mt-10">
      <input className="h-12 pl-2.5" value={enteredTask} onChange={changeHandler} type="text" placeholder="Ex. Do dishes" />
      <button className="bg-green-500 aspect-square w-12" onClick={clickHandler} type="submit">
        <i className="fa-solid fa-lg fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
