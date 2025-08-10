# Amigo Secreto - Aplicación Web

Este es un pequeño proyecto en JavaScript, HTML y CSS que permite:
- Ingresar una lista de amigos.
- Mostrar esa lista en pantalla.
- Sortear un amigo secreto aleatoriamente.

Es ideal para comprender conceptos básicos de programación en JavaScript y manipulación del DOM.

---

## Archivos del proyecto
El proyecto está compuesto por:

- **index.html** → Estructura de la página web.
- **style.css** → Estilos visuales.
- **script.js** → Lógica en JavaScript para manejar la aplicación.

---

## Funcionamiento general

### 1. **Agregar amigos**
Cuando el usuario escribe un nombre en el campo de texto y hace clic en el botón **"Agregar"**:
- El valor se obtiene con `document.getElementById("amigo").value`.
- Se eliminan espacios en blanco con `.trim()`.
- Si el campo está vacío, aparece una alerta pidiendo que se ingrese un nombre.
- Si hay texto, se guarda en el **array `amigos`** y se actualiza la lista visible en pantalla.

---

### 2. **Mostrar lista**
La función `mostrarLista()`:
- Limpia el contenido actual del elemento `<ul>` que muestra la lista.
- Recorre el array `amigos` con un **bucle `for`**.
- Crea elementos `<li>` por cada amigo y los agrega a la lista.

---

### 3. **Sortear un amigo secreto**
La función `sortearAmigo()`:
- Comprueba si la lista está vacía.
- Genera un número aleatorio entre `0` y `amigos.length - 1` usando:
  ```js
  Math.floor(Math.random() * amigos.length)
