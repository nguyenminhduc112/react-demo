import Title from "./Title";
import AddTodo from "./AddTodo";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Todo from "./Todo";
const MainTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todoArray: any = [];
      querySnapshot.forEach((doc) => {
        todoArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArray);
    });
    return () => unsub();
  }, []);
  const handleEdit = async (todo: any, title: string) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };

  const togggleComplete = async (todo: any) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed });
  };

  const handledDelete = async (todo: any) => {
    await deleteDoc(doc(db, "todos", todo.id));
  };
  return (
    <div>
      <Title />
      <AddTodo />
      <div>
        {todos.map((todo: any) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleEdit={handleEdit}
            togggleComplete={togggleComplete}
            handledDelete={handledDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MainTodo;
