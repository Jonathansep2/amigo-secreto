// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crea la variable de tipo array, donde se almacenarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
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

// Función para actualizar la lista de amigos
function mostrarLista() {
    // 1. Obtener el elemento de la lista
    const lista = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente
    lista.innerHTML = "";

    // 3. Iterar sobre el areglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo elemento  <li>
        const li = document.createElement("li");
        li.textContent = amigos[i]; // asignar el nombre como texto

        // 5. Agregar el <li> a la lista en el HTML
        lista.appendChild(li);

    }
}

// Función para sortear los amigos
function SortearAmigo() {
    // 1. Validar que haya amigos disponibles
    if (amigos.lemgth === 0){
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    const IndiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSecreto = amigos[IndiceAleatorio];

    // 4. Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es <strong>${amigoSecreto}</strong> </li>`;


}
