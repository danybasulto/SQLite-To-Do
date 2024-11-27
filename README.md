# Proyecto To-Do List con Node.js y SQLite

Este proyecto es una aplicación de lista de tareas (To-Do List) donde puedes agregar, ver y eliminar tareas. Utiliza un backend en **Node.js** y una base de datos **SQLite**.

## Requisitos

- **Node.js** instalado.
- **SQLite3** para la base de datos.

## Instalación y Ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/to-do-list.git
cd to-do-list
```

### 2. Instala las dependencias

Accede a la carpeta **server** e instala las dependencias:

```bash
cd server
npm install
```

### 3. Inicia el servidor

Ejecuta el siguiente comando para iniciar el servidor de Node.js:

```bash
node server.js
```

La aplicación estará disponible en **http://localhost:3000**

## Uso de la aplicación

* **Agregar tarea:** Ingresa una descripción y haz clic en "Agregar".
* **Ver tareas:** Las tareas se mostrarán en una lista.
* **Eliminar tareas:** Haz clic en el boton de eliminar junto a la tarea.

## Rutas de la API

* **GET /tareas**: Obtiene todas las tareas.
* **POST /tareas**: Agrega una nueva tarea (requiere la **descripcion**).
* **DELETE /tareas/:id**: Elimina tareas por **id**.