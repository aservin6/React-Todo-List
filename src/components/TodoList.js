import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const removeItemHandler = (item) => {
    props.setTodoList(props.todoList.filter((el) => el.id !== item.id));
  };

  const completeTaskHandler = (item) => {
    const newStatus = props.todoList.map((obj) => {
      if (obj.id === item.id && item.completed === false) {
        return { ...obj, completed: true };
      } else if (obj.id === item.id && item.completed === true) {
        return { ...obj, completed: false };
      } else {
        return obj;
      }
    });
    props.setTodoList(newStatus);
  };

  return (
    <ul
      className={`${
        props.todoList.length === 0 ? "hidden" : ""
      } mt-10 mx-auto border border-slate-500 w-2/3 lg:w-1/3 md:w-1/2`}
    >
      {props.todoList.map((item) => (
        <TodoItem
          task={item.task}
          key={item.id}
          item={item}
          onRemoveItem={removeItemHandler}
          onCompleteTask={completeTaskHandler}
        />
      ))}
    </ul>
  );
};

export default TodoList;
