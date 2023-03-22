import axios, { AxiosResponse } from "axios";

import { Todo } from "./constants";

export const postTodo = async (title: string) => {
  const newTodo: Todo = {
    title: title,
    status: false,
  };
  const url = `http://localhost:8080/todos`;
  try {
    let res: AxiosResponse<Todo> = await axios.post(url, newTodo);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const getTodo = async () => {
  try {
    const res: AxiosResponse<Todo[]> = await axios.get(
      `http://localhost:8080/todos`
    );
    return res["data"];
  } catch (err) {
    console.log(err);
  }
};

export const toggleTodo = async (id?: number) => {
  //geRequest --> current status
  // make a patch request --> !current status
  // or get status as parameter and send patch request : this is not recommended if multiple requests are happening as it can be out of sync
  try {
    const todo = await axios.get(`http://localhost:8080/todos/${id}`);
    console.log(todo);
    const res = await axios.patch(`http://localhost:8080/todos/${id}`, {
      status: !todo.data.status,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
