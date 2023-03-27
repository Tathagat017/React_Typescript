import axios from "axios";
import React from "react";
import { Todo } from "../Types/constants";
import { AxiosResponse } from "axios";
export const PostTodo = async (title: string) => {
  const newTodo: Todo = {
    title,
    status: false,
  };
  try {
    let response: AxiosResponse<Todo> = await axios.post(
      `http://localhost:8080/todos`,
      newTodo
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getTodo = async () => {
  try {
    const res: AxiosResponse<Todo[], any> = await axios.get(
      `http://localhost:8080/todos`
    );
    console.log(res.data);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const toggleTodo = async (id?: number) => {
  try {
    let data = await axios.get(`http://localhost:8080/todos/${id}`);
    let res = await axios.patch(`http://localhost:8080/todos/${id}`, {
      status: !data.data.status,
    });
  } catch (err) {}
};

export const deleteTodo = async (id?: number) => {
  try {
    let res = await axios.delete(`http://localhost:8080/todos/${id}`);
  } catch (err) {
    console.log(err);
  }
};
