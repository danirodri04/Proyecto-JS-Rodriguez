/* let i;

for(i=1;i<=100;i=i+1) {
	console.log(i);
}
*/

class Tarea {
    constructor(nombre, descripcion) {
        this.nombre = nombre
        this.descripcion = descripcion
    }
}

let tareas = []
if(localStorage.getItem('tareas')) {
    tareas = JSON.parse(localStorage.getItem('tareas'))
} else {
    localStorage.setItem('tareas', JSON.stringify(tareas))
}

const formTareas = document.getElementById("formTareas")
const divTareas = document.getElementById("divTareas")
const botonTareas = document.getElementById("botonTareas")

formTareas.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target)

   let tarea = new Tarea(datForm.get('nombre'), datForm.get('descripcion'))
   tareas.push(tarea)
   console.log(tareas)
   localStorage.setItem('tareas', JSON.stringify(tareas))
    formTareas.reset()
})

botonTareas.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('tareas'))
    divTareas.innerHTML = ""
    arrayStorage.forEach((tarea, indice) => {

        divTareas.innerHTML += `
        <div class="card border-dark mb-3" id="tarea${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>${tarea.nombre}</h2></div>
            <div class="card-body">
                <p class="card-title">${tarea.descripcion}</p>
                <button class="btn btn-danger">Eliminar Tarea</button>
            </div>
        </div>
        
        `
    });

    arrayStorage.forEach((tarea, indice) => {
        let botonCard = document.getElementById(`tarea${indice}`).lastElementChild.lastElementChild
        botonCard.addEventListener('click', () => {
          Swal.fire({
            title: 'Estas seguro?',
            text: "No volveras a revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar!'
          }).then((result) => {
            if (result.isConfirmed) {
            document.getElementById(`tarea${indice}`).remove()
            tareas.splice(indice,1)
            localStorage.setItem('tareas', JSON.stringify(tareas))
            console.log(`${tarea.nombre} Eliminada`)
              Swal.fire(
                'Eliminada!',
                'Tu tarea a sido borrada.',
                'success'
              )
            }
          })
            
        })
    })


})