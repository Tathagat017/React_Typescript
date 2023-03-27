import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { Todo } from "../Types/constants";
import { getTodo } from "./api";
import { AxiosResponse } from "axios";

const TodoApp = () => {
  const [todo, setTodo] = useState<Todo[] | any>([]);
  const [update, setUpdate] = useState<boolean>(false);
  useEffect(() => {
    getTodo()
      .then((res) => {
        setTodo(res);
      })
      .catch((err) => console.error(err));
  }, [update]);

  const Add = () => {
    setUpdate((prev) => !prev);
  };
  return (
    <div>
      <TodoInput Add={Add} />
      {todo?.map((el: Todo) => {
        return <TodoItem key={el.id} {...el} Add={Add} />;
      })}
    </div>
  );
};

export default TodoApp;
