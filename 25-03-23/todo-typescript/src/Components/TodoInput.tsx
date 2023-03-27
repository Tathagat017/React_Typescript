import React, { useState, Dispatch, SetStateAction } from "react";
import { PostTodo } from "./api";

interface TodoInputProp {
  Add: () => void;
}

const TodoInput = ({ Add }: TodoInputProp) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    PostTodo(title);
    Add();

    setTitle("");
  };

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => handleChange(e)}
          value={title}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoInput;
