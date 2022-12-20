import './Todo.css';

const Todo = ({ todo, eliminarTodo, editarTodo }) => {
  const { id, nombre, descripcion, estado, prioridad } = todo;

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {nombre} {estado ? " (Completed)" : " (Pending)"}
          </div>
          <p>{descripcion}</p>
          <div>
            <button
              className="btn btn-edit me-2"
              onClick={() => editarTodo(id)}
            >
              Edit
            </button>
            <button className="btn btn-delete" onClick={() => eliminarTodo(id)}>
              Delete
            </button>
          </div>
        </div>
        <span className="badge priority-task rounded-pill">
          {prioridad && "Priority Task"}
        </span>
      </li>
    </>
  );
};

export default Todo;
