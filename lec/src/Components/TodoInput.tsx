import React, { useState } from "react";
import { postTodo } from "./api";

type todoInputProp = {
  update: () => void;
};

const TodoInput = ({ update }: todoInputProp) => {
  const [title, setTitle] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(() => e.target.value);
    //  console.log(title);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(title);
    postTodo(title);
    setTitle(() => "");
    update();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
