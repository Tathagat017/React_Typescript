import React, { useState } from "react";
import { Todo } from "../Types/constants";
import { toggleTodo, deleteTodo } from "./api";
interface TodoItemProps extends Todo {
  Add: () => void;
}
const TodoItem = ({ title, id, status, Add }: TodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(id).then(() => Add());
  };

  const handleDelete = () => {
    deleteTodo(id).then(() => Add());
  };
  return (
    <div>
      <p>
        {title}-{status ? "completed" : "pending"}
      </p>
      <button onClick={() => handleToggle()}>Toggle</button>
      <button onClick={() => handleDelete()}> Delete</button>
    </div>
  );
};

export default TodoItem;
