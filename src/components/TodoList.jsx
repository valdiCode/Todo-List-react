import { useState, useEffect } from "react";
import Empty from "./Empty";
import Form from "./Form";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
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

  console.log(todos);

  return (
    <>
      <Form addTodo={addTodo} />

      {!todos?.lenght === 0 ? (
        <ul className="list-group list-group-numbered mt-2">
          {todos?.map((item) => (
            <Todo
              key={item.id}
              todo={item}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default TodoList;
