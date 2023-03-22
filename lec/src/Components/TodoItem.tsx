import React, { useState, useEffect } from "react";
import { Todo } from "./constants";
import { toggleTodo } from "./api";
interface todoItemProps extends Todo {
  update: () => void;
}
const TodoItem = ({ title, id, status, update }: todoItemProps) => {
  const [refresh, setRefresh] = useState<boolean>(false);
  const handleToggle = () => {
    toggleTodo(id);
    update();
  };

  return (
    <div>
      <h3>
        Title:{title}---Status:{status ? "completed" : "pending"}
      </h3>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default TodoItem;
