import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import { Todo } from "./constants";
import { getTodo } from "./api";
import TodoItem from "./TodoItem";
//use tuple
const Todos = () => {
  const [todo, setTodo] = useState<Todo[]>();
  const [update, setUpdate] = useState<boolean>(false);

  const handleUpdate = () => {
    setUpdate((prev) => !prev);
  };

  useEffect(() => {
    getTodo().then((res) => setTodo(res));
  }, [update]);
  return (
    <div>
      <TodoInput update={handleUpdate} />
      {todo?.map((el) => {
        return (
          <TodoItem
            // title={el.title}
            // status={el.status}
            // id={el.id}
            {...el}
            key={el.id}
            update={handleUpdate}
          />
        );
      })}
    </div>
  );
};

export default Todos;
