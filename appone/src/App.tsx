import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="App">
      <Button color="red">Hey</Button>
      <Button color="blue">Hi</Button>
      <Button color="green">YO</Button>
      <Button color="white">Okay</Button>
      <Counter />
    </div>
  );
}

export default App;
