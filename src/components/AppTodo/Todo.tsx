import React, { useState } from "react";

const Todo = ({
  todo,
  handleEdit,
  togggleComplete,
  handledDelete,
}: TypeTodo) => {
  const [newTitle, setNewTitle] = useState("");
  const handleChange = (e: any) => {
    e.preventDefault();
    if (todo.completed === true) {
      setNewTitle(todo.title);
    } else {
      todo.title = "";
      setNewTitle(e.target.value);
    }
  };
  return (
    <div style={{ marginBottom: "30px" }}>
      <input
        type="text"
        value={todo.title === "" ? newTitle : todo.title}
        onChange={handleChange}
        disabled={todo.completed}
      />
      <button
        onClick={() => {
          todo.title = newTitle;
          setNewTitle("");
          handleEdit(todo, newTitle);
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          todo.completed = !todo.completed;
          togggleComplete(todo);
        }}
      >
        {todo.completed ? "Uncomplete" : "Complete"}
      </button>
      <button
        onClick={() => {
          todo.title = "";
          setNewTitle("");
          handledDelete(todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
