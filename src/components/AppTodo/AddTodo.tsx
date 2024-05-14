import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
const AddTodo = () => {
  const [title, setTitle] = useState("");
  const addTodo = async (e: any) => {
    e.preventDefault();
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title: title,
        completed: false,
      });
      setTitle("");
    } else {
      alert("Please enter a title");
    }
  };
  return (
    <div style={{}}>
      <form onSubmit={addTodo} style={{ flex: 7, marginRight: "10px" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
      <button
        type="submit"
        style={{
          flex: 3,
          borderRadius: "5px",
          marginBottom: "30px",
          background: "#fff",
          padding: "10px",
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
