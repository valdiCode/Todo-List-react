import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);

  const { nombre, descripcion, estado, prioridad } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Complete el nombre",
        text: "Campos obligatorios",
        icon: "error",
        confirmButtonText: "Vale",
      });
      return;
    }
    if (!descripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Complete la descripción",
        text: "Campos obligatorios",
        icon: "error",
        confirmButtonText: "Vale",
      });
      return;
    }
    Swal.fire({
      title: "Éxito",
      text: "Tarea agregada",
      icon: "success",
      confirmButtonText: "Entendido",
    });

    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad: prioridad,
      id: uuidv4(),
    });
    reset();
  };

  return (
    <>
      <h3 className="mt-5 text-center">TODO List</h3>
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="Type TODO name..."
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          name="descripcion"
          placeholder="Type TODO description..."
          value={descripcion}
          onChange={handleChange}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handleChange}
        >
          <option value="pendiente">Pending</option>
          <option value="completado">Completed</option>
        </select>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="prioridad"
            id="flexCheckDefault"
            checked={prioridad}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            PRIORITY
          </label>
        </div>
        <button className="btn btn-primary w-25">ADD TODO</button>
      </form>
    </>
  );
};

export default Formulario;
