import './Todo.css';

const Todo = ({ todo, deleteTodo, editTodo }) => {
  const { id, name, description, state, priority } = todo;

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {name} {state ? " (Completed)" : " (Pending)"}
          </div>
          <p>{description}</p>
          <div>
            <button
              className="btn btn-edit me-2"
              onClick={() => editTodo(id)}
            >
              Edit
            </button>
            <button className="btn btn-delete" onClick={() => deleteTodo(id)}>
              Delete
            </button>
          </div>
        </div>
        <span className="badge bg-primary rounded-pill">
          {priority && "Priority Task"}
        </span>
      </li>
    </>
  );
};

export default Todo;
