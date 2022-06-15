// import { useState } from "react"
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({agregarTodo}) => {

    const initialState = {
        nombre:"",
        descripcion:"",
        estado:"pendiente",
        prioridad: false
    }

    // const [todo, setTodo] = useState(initialState);

    const [inputs, handleChange, reset] = useFormulario(initialState)

    const {nombre, descripcion, estado, prioridad} = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombre.trim()){
            e.target[0].focus();
            Swal.fire({
                title: 'Complete el nombre',
                text: 'Campos obligatorios',
                icon: 'error',
                confirmButtonText: 'Vale'
              })
            return
        }
        if(!descripcion.trim()){
            e.target[1].focus();
            Swal.fire({
                title: 'Complete la descripción',
                text: 'Campos obligatorios',
                icon: 'error',
                confirmButtonText: 'Vale'
              })
            return
        }
        Swal.fire({
            title: 'Éxito',
            text: 'Tarea agregada',
            icon: 'success',
            confirmButtonText: 'Entendido'
          })

        agregarTodo({
            /* nombre,
            descripcion,
            estado,
            prioridad */
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true,
            prioridad: prioridad,
            id: uuidv4()
        })
        // console.log(todo)
        // setTodo(initialState);
        reset();
    }

    // const handleChange = (e) => {
    //     const {name, value, checked, type} = e.target

    //     setTodo((old) => ({
    //         ...old,
    //         [name]: type === "checkbox" ? checked : value
    //     }))
    // }

    return (
        <>
            <h3>Agregar TODO</h3>
            {/* relacionar inputs con datos de js: useState y luego onChange*/}
            <form onSubmit={handleSubmit}>
                <input type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="Ingrese TODO nombre"
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea className="form-control mb-2"
                    name="descripcion"
                    placeholder="Ingrese TODO descripción"
                    value={descripcion}
                    onChange={handleChange}
                />
                <select name="estado"
                    className="form-control mb-2"
                    value={estado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <div className="form-check mb-2">
                    <input className="form-check-input" 
                           type="checkbox" 
                           name="prioridad"
                           id="flexCheckDefault"
                           checked={prioridad}
                           onChange={handleChange}
                    />
                        <label className="form-check-label" 
                               htmlFor="flexCheckDefault"
                        >
                            PRIORITARIO
                        </label>
                </div>
                <button className="btn btn-primary w-100">
                    Agregar TODO
                </button>
            </form>
        </>
    )
}

export default Formulario