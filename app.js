const agregarTarea = async () => {
  const descripcion = document.querySelector("#nuevaTarea").value;
  if (descripcion.trim() === "") {
    alert("Por favor, ingresa una descripción para la tarea");
    return;
  }

  // Enviar la nueva tarea al backend
  const response = await fetch("http://localhost:3000/tareas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ descripcion }),
  });

  const tarea = await response.json();
  agregarTareaALista(tarea);
  document.querySelector("#nuevaTarea").value = ""; // Limpiar el campo de texto
};

const obtenerTareas = async () => {
  const response = await fetch("http://localhost:3000/tareas");
  const data = await response.json();

  // Mostrar todas las tareas en la lista
  data.tareas.forEach((tarea) => agregarTareaALista(tarea));
};

const agregarTareaALista = (tarea) => {
  const listaTareas = document.querySelector("#listaTareas");

  // Crear un nuevo elemento de lista para la tarea
  const tareaElemento = document.createElement("li");
  tareaElemento.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  tareaElemento.textContent = tarea.descripcion;

  // Botón de eliminar tarea
  const btnEliminar = document.createElement("button");
  btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.onclick = () => eliminarTarea(tarea.id, tareaElemento);

  tareaElemento.appendChild(btnEliminar);
  listaTareas.appendChild(tareaElemento);
};

// Eliminar tarea
const eliminarTarea = async (id, tareaElemento) => {
  const response = await fetch(`http://localhost:3000/tareas/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    tareaElemento.remove(); // Eliminar el elemento de la lista en el frontend
  } else {
    alert("Error al eliminar la tarea");
  }
};

// Cargar las tareas al cargar la página
document.addEventListener("DOMContentLoaded", obtenerTareas);
