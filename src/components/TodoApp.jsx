import { useState } from "react";
import "./Todo.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() != "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };
  return (
    <div className="app-container">
      <>
        <h1 className="title">Lista de Tarefas</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Adicione uma tarefa..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="add-button" type="submit">
            Adicionar
          </button>
        </form>
      </>
      {todos.length == 0 && <p className="empty">Não há tarefas</p>}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            {todo.text}
            <button className="delete-button">Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
