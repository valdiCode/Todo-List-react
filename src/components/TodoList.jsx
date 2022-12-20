import { useState, useEffect } from "react";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    console.log("READING TODOS LOCALSTORAGE");

    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  useEffect(() => {
    console.log("SAVING TODOS LOCALSTORAGE");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    console.log(todo);
    setTodos((old) => [...old, todo]);
  };

  const deleteTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const editTodo = (id) => {
    const editTodos = todos.map((item) =>
      item.id === id ? { ...item, state: !item.state } : item
    );
    setTodos(editTodos);
  };

  return (
    <>
      <Form addTodo={addTodo} />
      <ul className="list-group list-group-numbered mt-2">
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
