// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea la variable de tipo array, donde se almacenarán los nombres de los amigos
let amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo() {
    // 1. Captura el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // "trim()" elimina espacios al inicio y al final

    // 2. Validar la entrada
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return; // Sale de la función si no hay nombre
    }

    // 3. Actualizar el array de amigos
    amigos.push(nombre);

    // 4. limpiar el campo de entrada
    input.value = "";
}