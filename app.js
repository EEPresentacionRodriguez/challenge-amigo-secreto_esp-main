// Lo hice con la ayuda de ChatGPT

// Lista para almacenar los nombres de amigos
let amigos = [];

// Seleccionamos los elementos del DOM
const inputNombre = document.getElementById("amigo");
const btnAdicionar = document.querySelector(".button-add");
const listaAmigos = document.getElementById("listaAmigos");
const btnSortear = document.querySelector(".button-draw");
const resultado = document.getElementById("resultado");

// Función para agregar amigos a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    inputNombre.value = "";
}

// Actualizar la lista en la UI
function actualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Sorteo aleatorio
btnSortear.addEventListener("click", () => {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong> 🎉</li>`;
});
