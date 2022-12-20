import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "../hooks/useForm";
import './Form.css';

const Form = ({ addTodo }) => {
  const initialState = {
    name: "",
    description: "",
    state: "pending",
    priority: false,
  };

  const [inputs, handleChange, reset] = useForm(initialState);

  const { name, description, state, priority } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Complete name",
        text: "Required field",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (!description.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Complete description",
        text: "Required field",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    Swal.fire({
      title: "Success",
      text: "Task added",
      icon: "success",
      confirmButtonText: "Ok",
    });

    addTodo({
      name: name,
      description: description,
      state: state === "pending" ? false : true,
      priority: priority,
      id: uuidv4(),
    });
    reset();
  };

  return (
    <>
      <h3 className="mt-5 text-center form-header">TODO <i>List</i></h3>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center"
      >
        <input
          type="text"
          className="form-control mb-2"
          name="name"
          placeholder="Type TODO name..."
          value={name}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          name="description"
          placeholder="Type TODO description..."
          value={description}
          onChange={handleChange}
        />
        <select
          name="state"
          className="form-control mb-2 select-design"
          value={state}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="completado">Completed</option>
        </select>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="priority"
            id="flexCheckDefault"
            checked={priority}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            PRIORITY
          </label>
        </div>
        <button className="btn btn-color w-25">ADD TODO</button>
      </form>
    </>
  );
};

export default Form;
