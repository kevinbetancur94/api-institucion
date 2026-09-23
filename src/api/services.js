import { end_points } from "./config.js"

export function getData() {
    fetch(end_points.estudiantes)
        .then(response => response.json())
        .then(data => {console.log(data)})
        .catch(error => console.error("Error al obtener los datos:", error))

}
export function createData() {

}
export function updateData() {

}
export function deleteData() {

}