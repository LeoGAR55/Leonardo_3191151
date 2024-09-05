//mi arreglo principal para guardar las tareas
let tareas =[];

//funcion para el menu
function mostrarMenu(){
    return parseInt(prompt(`
        "Opciones"
        1.-Agregar tarea
        2.-Ver tareas
        3.-Marcar tareas como completadas
        4.-Salir  

    `));
}
//funcion agregar tarea
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea");
    if(nombre){
        let tarea={
            nombre: nombre,
            completada: false
        };
        tareas.push(tarea);
        alert("Tarea agregada");
    }else{
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//funcion para ver las tareas
function verTarea(){
    if(tareas.length === 0){
        alert("No hay tareas en la lista");

    }else{
        let mensaje = "Listas de tareas: \n";
        tareas.forEach((tarea,index)=>{
                
        });
        
    }
}



//Funcion principal
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTarea();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida. Intenta nuevamente");
        }
    }
    alert("Programa Finalizado");
}
iniciarPrograma();