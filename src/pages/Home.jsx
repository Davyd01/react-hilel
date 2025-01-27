import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>TODO List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Нове завдання"
        style={{ marginRight: "10px" }}
      />
      <button onClick={addTodo}>Додати</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
