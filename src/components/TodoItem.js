const TodoItem = (props) => {
  const clickHandler = () => {
    props.onRemoveItem(props.item);
  };

  const completeHandler = () => {
    props.onCompleteTask(props.item);
  };

  return (
    <li className="flex items-center justify-between bg-slate-300 border-b border-slate-500 space-x-10">
      <p
        onClick={completeHandler}
        className={`${
          props.item.completed && "line-through opacity-50"
        } pl-3 font-semibold text-lg hover:cursor-pointer break-all`}
      >
        {props.task}
      </p>
      <button
        className="aspect-square w-12 bg-red-400 border-l border-slate-500"
        onClick={clickHandler}
      >
        <i className="fa-solid fa-lg fa-xmark"></i>
      </button>
    </li>
  );
};

export default TodoItem;
