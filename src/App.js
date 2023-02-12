import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "learn React", completed: false },
    { id: 2, text: "Build a todo app", completed: false },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>My Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          placeholder="Enter New todo"
        />
        <button onClick={() => addTodo("New Todo")}>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}{" "}
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Incomplete" : "Complete"}
            </button>{" "}
            <button onClick={() => removeTodo(todo.id)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </div>
    );
  }

export default App;
