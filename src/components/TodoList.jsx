import { useState, useEffect } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log("Leer todos local");
        if (localStorage.getItem("todos")) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);
    
    useEffect(() => {
        console.log("Guardar todo local");
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    

    const agregarTodo = todo => {
        console.log(todo);
        setTodos((old) => [...old, todo])
    };

    const eliminarTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }

    const editarTodo = id => {
        const editarTodos = todos.map(item => (
            item.id === id ? {...item, estado: !item.estado} : item
        ))
        setTodos(editarTodos)
    }

    return(
        <>
            <Formulario agregarTodo={agregarTodo}/>
            <ul className="list-group list-group-numbered mt-2">
                {todos.map((item) => (
                    <Todo key={item.id} 
                          todo={item} 
                          eliminarTodo={eliminarTodo}
                          editarTodo={editarTodo}
                    />
                    ))}
            </ul>
        </>
    )
}

export default TodoList